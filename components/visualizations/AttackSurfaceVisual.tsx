"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Target } from 'lucide-react';

export const AttackSurfaceVisual = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/20">
            {/* Radar Grid */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-40 h-40 border border-zinc-900 dark:border-white rounded-full" />
                <div className="w-24 h-24 border border-zinc-900 dark:border-white rounded-full" />
                <div className="absolute w-full h-[1px] bg-zinc-900 dark:bg-white" />
                <div className="absolute h-full w-[1px] bg-zinc-900 dark:bg-white" />
            </div>

            {/* Rotating Radar Sweep */}
            <motion.div
                className="absolute w-1/2 h-1/2 origin-bottom-right"
                style={{
                    bottom: '50%',
                    right: '50%',
                    background: 'conic-gradient(from 0deg, transparent 0deg, rgba(0,0,0,0.1) 90deg, transparent 90deg)',
                    // Adapt for dark mode
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            {/* Dark mode sweep */}
            <motion.div
                className="absolute w-1/2 h-1/2 origin-bottom-right hidden dark:block"
                style={{
                    bottom: '50%',
                    right: '50%',
                    background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.1) 90deg, transparent 90deg)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Threat Indicators */}
            <div className="relative z-10 flex items-center justify-center">
                <Target className="w-6 h-6 text-zinc-950 dark:text-white" />
                
                {/* Random Pulsing "Exposures" */}
                {[
                    { x: -30, y: -40, delay: 0 },
                    { x: 45, y: -20, delay: 1.2 },
                    { x: -20, y: 35, delay: 0.8 },
                ].map((pos, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-zinc-900 dark:bg-white"
                        style={{ x: pos.x, y: pos.y }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                            opacity: [0, 1, 0], 
                            scale: [0, 1.2, 0.8] 
                        }}
                        transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: pos.delay,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="absolute inset-0 rounded-full bg-inherit animate-ping opacity-40" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
