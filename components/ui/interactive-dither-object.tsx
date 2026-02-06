"use client";

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface InteractiveDitherObjectProps {
    className?: string;
    gridSize?: number;
    color?: string;
}

const InteractiveDitherObject: React.FC<InteractiveDitherObjectProps> = ({
    className,
    gridSize = 6, // Slightly larger for better performance by default
    color = '#52525b' // zinc-600
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;
        let time = 0;

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                // Ensure correct drawing surface size
                width = canvas.width = parent.clientWidth;
                height = canvas.height = parent.clientHeight;
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // 4x4 Bayer Matrix
        const bayerMatrix = [
            [0, 8, 2, 10],
            [12, 4, 14, 6],
            [3, 11, 1, 9],
            [15, 7, 13, 5]
        ];

        const DOT_SIZE = Math.max(1, Math.floor(gridSize / 2));

        // Reduced count for guaranteed smoothness
        const numBalls = 4;
        const balls = Array.from({ length: numBalls }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            radius: 80 + Math.random() * 60,
        }));

        let mouseX = width / 2;
        let mouseY = height / 2;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const draw = () => {
            time += 0.015;

            // Physics Update for Balls
            balls.forEach(ball => {
                // Gentle wandering
                ball.vx += (Math.random() - 0.5) * 0.1;
                ball.vy += (Math.random() - 0.5) * 0.1;

                // Damping
                ball.vx *= 0.98;
                ball.vy *= 0.98;

                // Mouse interaction - Attraction
                const dx = mouseX - ball.x;
                const dy = mouseY - ball.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Smooth attraction
                if (dist < 400 && dist > 10) {
                    const force = (400 - dist) / 400; // 0 to 1
                    ball.vx += dx * force * 0.0008;
                    ball.vy += dy * force * 0.0008;
                }

                // Keep in bounds
                const margin = 100;
                if (ball.x < -margin) ball.vx += 0.1;
                if (ball.x > width + margin) ball.vx -= 0.1;
                if (ball.y < -margin) ball.vy += 0.1;
                if (ball.y > height + margin) ball.vy -= 0.1;

                ball.x += ball.vx;
                ball.y += ball.vy;
            });

            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = color;

            const gridSizeInt = Math.floor(gridSize);

            // Optimization: Bounding Box Limiting
            // Instead of calculating all balls for all pixels, only check nearby ones.
            // Actually, for 4 balls, simple distance check is fast enough IF we skip division.

            // Pre-calculate squared radii and constants to avoid re-doing math in inner loop
            const ballData = balls.map(b => ({
                x: b.x,
                y: b.y,
                rSq: b.radius * b.radius,
                limitSq: (b.radius * 4.5) ** 2 // cutoff distance squared
            }));

            const mouseRSq = 120 * 120;
            const mouseLimitSq = (120 * 4.5) ** 2;

            for (let x = 0; x < width; x += gridSizeInt) {
                for (let y = 0; y < height; y += gridSizeInt) {

                    let field = 0;

                    // Mouse Field
                    const mdx = x - mouseX;
                    const mdy = y - mouseY;
                    const mDistSq = mdx * mdx + mdy * mdy;

                    if (mDistSq < mouseLimitSq) {
                        field += mouseRSq / (mDistSq + 1000);
                    }

                    // Ball Fields
                    for (let i = 0; i < numBalls; i++) {
                        const b = ballData[i];
                        const dx = x - b.x;
                        const dy = y - b.y;

                        // Fast manhattan check first? Optional.
                        if (Math.abs(dx) > 400 || Math.abs(dy) > 400) continue;

                        const distSq = dx * dx + dy * dy;
                        if (distSq < b.limitSq) {
                            field += b.rSq / (distSq + 1000);
                        }
                    }

                    // Thresholding
                    // Adjusted for smoother/larger connection
                    const threshold = 1.1;

                    // Smooth falloff calculation
                    // If field is close to threshold, we want smooth transition.
                    // field >> threshold -> solid
                    // field < threshold -> empty

                    if (field < threshold - 0.2) continue; // Early exit for empty space

                    let intensity = 0;
                    if (field > threshold) {
                        intensity = Math.min(1, (field - threshold) * 0.5);
                    } else {
                        // Soft edge range
                        intensity = Math.max(0, (field - threshold + 0.2) * 2.5);
                    }

                    if (intensity <= 0.01) continue;

                    // DITHRING - NO NOISE for smoothness
                    const col = (x / gridSizeInt) % 4;
                    const row = (y / gridSizeInt) % 4;

                    // Normalize threshold: 0 to 1
                    // If intensity (0-1) > pattern value, draw.
                    const bayerVal = bayerMatrix[row][col] / 16;

                    if (intensity > bayerVal) {
                        // Use a fixed alpha for consistency or very slight variation
                        // Avoiding heavy alpha blending helps "crispness" but user wanted "smoothness".
                        // "Smooth" likely refers to frame rate and lack of jitter.
                        // Fixed alpha prevents "flickering" when intensity hovers.
                        ctx.globalAlpha = 0.2 + intensity * 0.8;
                        ctx.fillRect(x, y, DOT_SIZE, DOT_SIZE);
                    }
                }
            }

            ctx.globalAlpha = 1.0;
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [gridSize, color]);

    return (
        <canvas
            ref={canvasRef}
            className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
        />
    );
};

export default InteractiveDitherObject;
