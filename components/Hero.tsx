"use client";

import React, { useEffect, useRef } from 'react';
import DitherShader from '@/components/ui/dither-shader';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = canvas.width = parent.clientWidth;
        height = canvas.height = parent.clientHeight;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Bayer Matrix 4x4 for ordered dithering
    // Normalized by dividing by 16 later
    const bayerMatrix = [
      [0, 8, 2, 10],
      [12, 4, 14, 6],
      [3, 11, 1, 9],
      [15, 7, 13, 5]
    ];

    // Configuration
    const GRID_SPACING = 6; // Increased from 4 for chunkier pixels
    const DOT_SIZE = 3; // Increased to match grid scaling
    const LIGHT_RADIUS = 800; // Larger light radius

    // State
    let mouseX = width / 2;
    let mouseY = height / 2;
    let currentX = width / 2;
    let currentY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      // Smooth follow
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // We want a dark background, so dots will be the 'light'
      // Color: Zinc-600/500ish but represented as simple fill
      ctx.fillStyle = '#52525b'; // zinc-600

      // Optimization: Only scan relevant area
      const startX = Math.floor((currentX - LIGHT_RADIUS) / GRID_SPACING) * GRID_SPACING;
      const endX = Math.ceil((currentX + LIGHT_RADIUS) / GRID_SPACING) * GRID_SPACING;
      const startY = Math.floor((currentY - LIGHT_RADIUS) / GRID_SPACING) * GRID_SPACING;
      const endY = Math.ceil((currentY + LIGHT_RADIUS) / GRID_SPACING) * GRID_SPACING;

      // Clamp
      const drawStartX = Math.max(0, startX);
      const drawEndX = Math.min(width, endX);
      const drawStartY = Math.max(0, startY);
      const drawEndY = Math.min(height, endY);

      for (let x = drawStartX; x < drawEndX; x += GRID_SPACING) {
        for (let y = drawStartY; y < drawEndY; y += GRID_SPACING) {
          // Distance calc
          const dx = x - currentX;
          const dy = y - currentY;
          const distSquared = dx * dx + dy * dy;
          const maxDistSquared = LIGHT_RADIUS * LIGHT_RADIUS;

          if (distSquared < maxDistSquared) {
            const dist = Math.sqrt(distSquared);
            // Intensity 0 to 1 (1 at center)
            let intensity = 1 - dist / LIGHT_RADIUS;

            // Adjust intensity curve for better falloff
            intensity = Math.pow(intensity, 2.5);

            // Bayer Dither Logic
            // Map (x,y) to 4x4 matrix
            const col = (x / GRID_SPACING) % 4;
            const row = (y / GRID_SPACING) % 4;
            const threshold = bayerMatrix[row][col] / 16;

            // If intensity exceeds threshold, draw pixel
            if (intensity > threshold) {
              // Dimmer effect: Max alpha reduced from 1.0 to 0.5
              // Base alpha 0.2, max additional 0.3
              ctx.globalAlpha = 0.2 + (intensity * 0.3);
              ctx.fillRect(x, y, DOT_SIZE, DOT_SIZE);
            }
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
  }, []);

  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-black">
      {/* Interactive Dither Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
              Centralize your Application With Synapse Suite
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed font-light">
              Synapse Suite is a unified security platform with six integrated modules, designed to protect your application infrastructure at every layer.
            </p>

            <div className="flex justify-start mb-12">
              <button className="bg-white text-black px-8 py-3.5 rounded-full text-base font-semibold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95">
                Request demo
              </button>
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
                primaryColor="#000000"
                secondaryColor="#ffffff"
                backgroundColor="transparent"
                threshold={0.55}
                className="w-[85%] h-[85%] translate-x-6 -translate-y-6"
                animated={true}
                animationSpeed={0.005}
                objectFit="contain"
              />
              {/* Overlay gradient for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Trusted By - Animated Marquee */}
        <div className="border-t border-zinc-900 pt-10">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-8">Protecting the world's most innovative companies</p>

          {/* Marquee Container with Gradient Fade */}
          <div className="relative overflow-hidden">
            {/* Left gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            {/* Right gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling logos container */}
            <div className="flex w-max min-w-full animate-marquee">
              {/* First set of logos */}
              <div className="flex items-center gap-16 md:gap-24 shrink-0 px-8 md:px-12">
                <img src="/logos/aws-dark-logo.svg" alt="AWS" className="h-8 w-auto brightness-0 invert transition-opacity" />
                <img src="/logos/azure-plain-wordmark-logo.svg" alt="Azure" className="h-14 w-auto brightness-0 invert transition-opacity" />
                <img src="/logos/cloudflare-logo.svg" alt="Cloudflare" className="h-6 w-auto brightness-0 invert transition-opacity" />
                <img src="/logos/datadog-logo.svg" alt="Datadog" className="h-8 w-auto brightness-0 invert transition-opacity" />
                <img src="/logos/digitalocean-original-wordmark-logo.svg" alt="DigitalOcean" className="h-10 w-auto brightness-0 invert transition-opacity" />
                <img src="/logos/mongodb-logo.svg" alt="MongoDB" className="h-7 w-auto brightness-0 invert transition-opacity" />
                <img src="/logos/vercel-logo.svg" alt="Vercel" className="h-6 w-auto brightness-0 invert transition-opacity" />
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-16 md:gap-24 shrink-0 px-8 md:px-12">
                <img src="/logos/aws-dark-logo.svg" alt="AWS" className="h-8 w-auto brightness-0 invert transition-opacity" />
                <img src="/logos/azure-plain-wordmark-logo.svg" alt="Azure" className="h-14 w-auto brightness-0 invert transition-opacity" />
                <img src="/logos/cloudflare-logo.svg" alt="Cloudflare" className="h-6 w-auto brightness-0 invert transition-opacity" />
                <img src="/logos/datadog-logo.svg" alt="Datadog" className="h-8 w-auto brightness-0 invert transition-opacity" />
                <img src="/logos/digitalocean-original-wordmark-logo.svg" alt="DigitalOcean" className="h-10 w-auto brightness-0 invert transition-opacity" />
                <img src="/logos/mongodb-logo.svg" alt="MongoDB" className="h-7 w-auto brightness-0 invert transition-opacity" />
                <img src="/logos/vercel-logo.svg" alt="Vercel" className="h-6 w-auto brightness-0 invert transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;