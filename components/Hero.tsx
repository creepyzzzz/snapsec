"use client";

import React, { useEffect, useRef } from 'react';
import DitherShader from '@/components/ui/dither-shader';
import Button from './ui/Button';

import { useTheme } from 'next-themes';



const Hero: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let imageData: ImageData;
    let pixels: Uint8ClampedArray;

    // Configuration
    const PIXEL_SIZE = 6;
    const PIXEL_DENSITY = 1200; // Reduced density as requested
    const LIGHT_R = 700;
    const LIGHT_R_SQ = LIGHT_R * LIGHT_R;

    // Unified Blue Palette - Adapt to theme
    const isDark = resolvedTheme === 'dark';
    const BR = isDark ? 37 : 59; 
    const BG = isDark ? 99 : 130; 
    const BB = isDark ? 235 : 246; // blue-600 in dark, blue-400/500 in light

    // Points state
    let points: { x: number, y: number, isBlue: boolean, threshold: number }[] = [];

    const generatePoints = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = canvas.width = parent.clientWidth;
      height = canvas.height = parent.clientHeight;
      imageData = ctx.createImageData(width, height);
      pixels = imageData.data;

      const numPoints = Math.floor((width * height) / PIXEL_DENSITY);
      points = Array.from({ length: numPoints }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        isBlue: true,
        threshold: Math.random() * 0.15 
      }));
    };

    window.addEventListener('resize', generatePoints);
    generatePoints();

    let time = 0;
    let lastFrame = 0;
    const INTERVAL = 1000 / 24;

    const draw = (ts: number) => {
      animationFrameId = requestAnimationFrame(draw);

      const dt = ts - lastFrame;
      if (dt < INTERVAL) return;
      lastFrame = ts - (dt % INTERVAL);

      time += 0.012;

      pixels.fill(0);

      const fX = 0.003;
      const fY = 0.003;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        
        // Stretched Vertical gradient - wide ellipse distribution
        const yFactor = p.y / height; // Adjusted to start from bottom
        const xPercent = (p.x - width / 2) / (width / 2); // -1 to 1
        
        const w1 = 0.2 * Math.sin(p.x * 0.0012 + time * 0.1);
        const w2 = 0.1 * Math.cos(p.x * 0.003 - time * 0.08);
        const waveFactor = (w1 + w2) * Math.pow(yFactor, 2);
        
        // curveOffset (0.15 * x^2) for the wide horizon
        const curveOffset = 0.15 * (xPercent * xPercent);
        // Reduced exponent (3.0) pushes the particles further up the section
        const densityFactor = Math.max(0, Math.pow(yFactor, 3.0) - curveOffset + waveFactor - 0.05);

        const sinVal = Math.sin(p.x * fX + time);
        const pixelWave = (sinVal + Math.cos(p.y * fY + time * 0.5)) * 0.5;
        
        let intensity = (pixelWave * 0.5 + 0.5) * 0.5 * densityFactor;

        const effectiveThreshold = p.threshold;

        if (intensity > effectiveThreshold) {
          const alpha = Math.min(255, ((0.3 + (intensity - effectiveThreshold) * 3.0) * 255) | 0);
          
          const startX = Math.floor(p.x);
          const startY = Math.floor(p.y);
          const endX = Math.min(startX + PIXEL_SIZE, width);
          const endY = Math.min(startY + PIXEL_SIZE, height);

          for (let px = startX; px < endX; px++) {
            for (let py = startY; py < endY; py++) {
              const idx = (py * width + px) * 4;
              pixels[idx]     = BR;
              pixels[idx + 1] = BG;
              pixels[idx + 2] = BB;
              pixels[idx + 3] = alpha;
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', generatePoints);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <section className="relative pt-40 pb-32 -mt-16 overflow-hidden bg-white dark:bg-zinc-950">
      {/* Interactive Dither Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Solid Blue Ellipse Gradient Overlay - Raised and stretched */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: resolvedTheme === 'dark'
            ? 'radial-gradient(ellipse 100% 75% at 50% -5%, rgba(37, 99, 235, 0.3) 0%, rgba(37, 99, 235, 0.1) 45%, transparent 75%)'
            : 'radial-gradient(ellipse 100% 75% at 50% -5%, rgba(37, 99, 235, 0.7) 0%, rgba(37, 99, 235, 0.2) 45%, transparent 75%)',
          maskImage: 'radial-gradient(ellipse 100% 80% at 50% -15%, black 45%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 80% at 50% -15%, black 45%, transparent 85%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-950 dark:text-white mb-6 leading-[1.1]">
              Intelligent Application <span className="protection-gradient">Protection.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mb-10 leading-relaxed font-light">
              Aether Sentinel replaces fragmented protection tools with a single, autonomous engine that discovers, prioritizes, and remediates risks across your entire digital estate.
            </p>

            <div className="flex justify-start mb-12">
              <Button size="lg">Request demo</Button>
            </div>
          </div>

          {/* Right Column: Dither Shader Animation */}
          <div className="hidden lg:flex h-full min-h-[500px] items-center justify-center relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden flex items-center justify-center">
              <DitherShader
                src="/images/hero-image-dither.webp"
                gridSize={2}
                ditherMode="bayer"
                colorMode="grayscale"
                primaryColor={resolvedTheme === 'dark' ? '#ffffff' : '#000000'}
                secondaryColor={resolvedTheme === 'dark' ? '#000000' : '#ffffff'}
                backgroundColor="transparent"
                threshold={0.55}
                className="w-[85%] h-[85%] translate-x-6 -translate-y-6"
                animated={true}
                animationSpeed={0.005}
                objectFit="contain"
              />
              {/* Overlay gradient for better integration */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;