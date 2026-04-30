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

        const DOT_SIZE = 6;
        const PIXEL_DENSITY = 800; // One pixel per 800 square pixels

        // Points state
        let points: { x: number, y: number, isBlue: boolean, threshold: number }[] = [];

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                width = canvas.width = parent.clientWidth;
                height = canvas.height = parent.clientHeight;
                
                const numPoints = Math.floor((width * height) / PIXEL_DENSITY);
                points = Array.from({ length: numPoints }).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    isBlue: Math.random() < 0.03,
                    threshold: 1.1 + Math.random() * 0.4 // Random threshold per point
                }));
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

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
                ball.vx += (Math.random() - 0.5) * 0.1;
                ball.vy += (Math.random() - 0.5) * 0.1;
                ball.vx *= 0.98;
                ball.vy *= 0.98;

                const dx = mouseX - ball.x;
                const dy = mouseY - ball.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 400 && dist > 10) {
                    const force = (400 - dist) / 400;
                    ball.vx += dx * force * 0.0008;
                    ball.vy += dy * force * 0.0008;
                }

                const margin = 100;
                if (ball.x < -margin) ball.vx += 0.1;
                if (ball.x > width + margin) ball.vx -= 0.1;
                if (ball.y < -margin) ball.vy += 0.1;
                if (ball.y > height + margin) ball.vy -= 0.1;

                ball.x += ball.vx;
                ball.y += ball.vy;
            });

            ctx.clearRect(0, 0, width, height);

            const ballData = balls.map(b => ({
                x: b.x,
                y: b.y,
                rSq: b.radius * b.radius,
                limitSq: (b.radius * 4.5) ** 2
            }));

            const mouseRSq = 120 * 120;
            const mouseLimitSq = (120 * 4.5) ** 2;

            for (let i = 0; i < points.length; i++) {
                const p = points[i];
                let field = 0;

                // Mouse Field
                const mdx = p.x - mouseX;
                const mdy = p.y - mouseY;
                const mDistSq = mdx * mdx + mdy * mdy;

                if (mDistSq < mouseLimitSq) {
                    field += mouseRSq / (mDistSq + 1000);
                }

                // Ball Fields
                for (let j = 0; j < numBalls; j++) {
                    const b = ballData[j];
                    const dx = p.x - b.x;
                    const dy = p.y - b.y;

                    if (Math.abs(dx) > 400 || Math.abs(dy) > 400) continue;

                    const distSq = dx * dx + dy * dy;
                    if (distSq < b.limitSq) {
                        field += b.rSq / (distSq + 1000);
                    }
                }

                const threshold = p.threshold;
                if (field < threshold - 0.2) continue;

                let intensity = 0;
                if (field > threshold) {
                    intensity = Math.min(1, (field - threshold) * 0.5);
                } else {
                    intensity = Math.max(0, (field - threshold + 0.2) * 2.5);
                }

                if (intensity <= 0.01) continue;

                // Color Selection
                const mdxS = p.x - mouseX;
                const mdyS = p.y - mouseY;
                const mDistSqS = mdxS * mdxS + mdyS * mdyS;
                const spotlightRadius = 400;
                let spotAlpha = 0;
                if (mDistSqS < spotlightRadius * spotlightRadius) {
                    spotAlpha = Math.max(0, 1 - Math.sqrt(mDistSqS) / spotlightRadius);
                    spotAlpha = spotAlpha * spotAlpha;
                }

                if (spotAlpha > 0.1) {
                    ctx.fillStyle = '#60a5fa';
                } else {
                    ctx.fillStyle = p.isBlue ? '#3b82f6' : color;
                }

                ctx.globalAlpha = 0.2 + intensity * 0.8;
                ctx.fillRect(Math.floor(p.x), Math.floor(p.y), DOT_SIZE, DOT_SIZE);
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
