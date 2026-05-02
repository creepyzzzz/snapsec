"use client";

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CTADitherObjectProps {
    className?: string;
    gridSize?: number;
    color?: string;
}

const CTADitherObject: React.FC<CTADitherObjectProps> = ({
    className,
    gridSize = 6,
    color = '#52525b'
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

        const DOT_SIZE = 3.2; 

        // Points state
        let points: { x: number, y: number, isBlue: boolean, threshold: number }[] = [];

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                width = canvas.width = parent.clientWidth;
                height = canvas.height = parent.clientHeight;
                
                points = [];
                for (let x = 0; x < width; x += gridSize) {
                    for (let y = 0; y < height; y += gridSize) {
                        points.push({
                            x,
                            y,
                            isBlue: Math.random() < 0.04,
                            threshold: 1.1 + Math.random() * 0.4
                        });
                    }
                }
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Harmonic Wave Sources (Wave Packets)
        const numSources = 5;
        const sources = Array.from({ length: numSources }).map((_, i) => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            amplitude: 1.2 + Math.random() * 0.5,
            sigma: 150 + Math.random() * 100, // Spread of the packet
            frequency: 2.0 + Math.random() * 1.5,
            k: 0.015 + Math.random() * 0.01 // Wave number
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
            time += 0.012;

            // Physical movement for wave sources
            sources.forEach(s => {
                s.x += s.vx;
                s.y += s.vy;

                // Soft boundary repulsion
                const margin = 200;
                if (s.x < -margin) s.vx += 0.02;
                if (s.x > width + margin) s.vx -= 0.02;
                if (s.y < -margin) s.vy += 0.02;
                if (s.y > height + margin) s.vy -= 0.02;

                // Mouse influence
                const dx = mouseX - s.x;
                const dy = mouseY - s.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 500) {
                    const force = (500 - dist) / 500;
                    s.vx += dx * force * 0.0002;
                    s.vy += dy * force * 0.0002;
                }
                
                // Friction
                s.vx *= 0.995;
                s.vy *= 0.995;
            });

            ctx.clearRect(0, 0, width, height);

            // Pre-calculate mouse field
            const mouseRSq = 180 * 180;

            for (let i = 0; i < points.length; i++) {
                const p = points[i];
                let field = 0;

                // Wave Packet Interference formula: I = sum( A * exp(-d^2 / 2s^2) * cos(k*d - w*t) )
                for (let j = 0; j < numSources; j++) {
                    const s = sources[j];
                    const dx = p.x - s.x;
                    const dy = p.y - s.y;
                    const d2 = dx * dx + dy * dy;
                    const d = Math.sqrt(d2);
                    
                    // Gaussian envelope
                    const envelope = Math.exp(-d2 / (2 * s.sigma * s.sigma));
                    // Harmonic oscillation
                    const oscillation = Math.cos(s.k * d - time * s.frequency);
                    
                    field += s.amplitude * envelope * (0.5 + 0.5 * oscillation);
                }

                // Mouse interaction (Static field + Pulse)
                const mdx = p.x - mouseX;
                const mdy = p.y - mouseY;
                const md2 = mdx * mdx + mdy * mdy;
                const md = Math.sqrt(md2);
                const mouseField = (150 * 150) / (md2 + 1000);
                const mousePulse = Math.exp(-md2 / (2 * 100 * 100)) * (0.3 + 0.2 * Math.sin(time * 3));
                
                const totalField = field + mouseField + mousePulse;

                if (totalField < p.threshold - 0.25) continue;

                let intensity = 0;
                if (totalField > p.threshold) {
                    intensity = Math.min(1.2, (totalField - p.threshold) * 0.7);
                } else {
                    intensity = Math.max(0, (totalField - p.threshold + 0.25) * 2.8);
                }

                if (intensity <= 0.01) continue;

                // Unified Blue Palette
                if (intensity > 0.95) {
                    ctx.fillStyle = '#60a5fa'; // Light Blue highlight
                } else if (intensity > 0.6) {
                    ctx.fillStyle = '#3b82f6'; // Primary Blue
                } else {
                    ctx.fillStyle = '#2563eb'; // Brand Blue
                }

                // Digital Dither Texture Mask
                if (intensity > 0.9) {
                    const pattern = (Math.floor(p.x / gridSize) + Math.floor(p.y / gridSize)) % 2;
                    if (pattern === 0) intensity *= 0.7;
                }

                ctx.globalAlpha = Math.min(1, 0.1 + intensity * 0.8);
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

export default CTADitherObject;
