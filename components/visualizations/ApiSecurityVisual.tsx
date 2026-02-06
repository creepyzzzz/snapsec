"use client";

import React, { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/80 p-1.5 shadow-lg",
                className
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

// API endpoint icons
const Icons = {
    // Client/App icon
    client: () => (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-400"
        >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
    ),
    // Lock/Security icon
    lock: () => (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
        >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    ),
    // API/Server icon
    server: () => (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-400"
        >
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
    ),
    // Database icon
    database: () => (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-400"
        >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
    ),
    // Webhook icon
    webhook: () => (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-400"
        >
            <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
            <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
            <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8H17" />
        </svg>
    ),
};

export const ApiSecurityVisual = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const clientRef = useRef<HTMLDivElement>(null);
    const securityRef = useRef<HTMLDivElement>(null);
    const serverRef = useRef<HTMLDivElement>(null);
    const databaseRef = useRef<HTMLDivElement>(null);
    const webhookRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="relative flex h-full w-full items-center justify-center overflow-hidden"
            ref={containerRef}
        >
            <div className="flex h-full w-full flex-row items-stretch justify-between gap-4 px-4 py-3">
                {/* Left: Client Sources */}
                <div className="flex flex-col justify-center gap-3">
                    <Circle ref={clientRef}>
                        <Icons.client />
                    </Circle>
                    <Circle ref={webhookRef}>
                        <Icons.webhook />
                    </Circle>
                </div>

                {/* Center: Lock Security */}
                <div className="flex flex-col justify-center">
                    <Circle
                        ref={securityRef}
                        className="size-10 border-zinc-600 bg-zinc-700/50 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    >
                        <Icons.lock />
                    </Circle>
                </div>

                {/* Right: API Endpoints */}
                <div className="flex flex-col justify-center gap-3">
                    <Circle ref={serverRef}>
                        <Icons.server />
                    </Circle>
                    <Circle ref={databaseRef}>
                        <Icons.database />
                    </Circle>
                </div>
            </div>

            {/* Animated Beams - Client to Security */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={clientRef}
                toRef={securityRef}
                curvature={15}
                pathColor="#3f3f46"
                pathWidth={1.5}
                pathOpacity={0.3}
                gradientStartColor="#a1a1aa"
                gradientStopColor="#ffffff"
                duration={3}
                delay={0}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={webhookRef}
                toRef={securityRef}
                curvature={-15}
                pathColor="#3f3f46"
                pathWidth={1.5}
                pathOpacity={0.3}
                gradientStartColor="#a1a1aa"
                gradientStopColor="#ffffff"
                duration={3.5}
                delay={0.5}
            />

            {/* Animated Beams - Security to Endpoints */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={securityRef}
                toRef={serverRef}
                curvature={15}
                pathColor="#3f3f46"
                pathWidth={1.5}
                pathOpacity={0.3}
                gradientStartColor="#ffffff"
                gradientStopColor="#71717a"
                duration={3}
                delay={1}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={securityRef}
                toRef={databaseRef}
                curvature={-15}
                pathColor="#3f3f46"
                pathWidth={1.5}
                pathOpacity={0.3}
                gradientStartColor="#ffffff"
                gradientStopColor="#71717a"
                duration={3.5}
                delay={1.5}
            />
        </div>
    );
};
