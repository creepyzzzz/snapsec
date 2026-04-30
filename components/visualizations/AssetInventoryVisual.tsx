"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Database } from 'lucide-react';

export const AssetInventoryVisual = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/20">
            <div className="relative flex items-center justify-center">
                {/* Central Database Icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="z-20 w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shadow-sm"
                >
                    <Database className="w-5 h-5 text-zinc-900 dark:text-white" />
                </motion.div>

                {/* Pulsing Discovery Rings */}
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full border border-zinc-400/20 dark:border-white/10"
                        initial={{ width: 40, height: 40, opacity: 0.5 }}
                        animate={{ 
                            width: [40, 160], 
                            height: [40, 160], 
                            opacity: [0.5, 0] 
                        }}
                        transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            delay: i * 1,
                            ease: "easeOut"
                        }}
                    />
                ))}

                {/* Floating "Discovered" Particles */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white"
                        initial={{ 
                            x: 0, 
                            y: 0, 
                            opacity: 0,
                            scale: 0 
                        }}
                        animate={{ 
                            x: (Math.cos(i * 45 * Math.PI / 180) * 60), 
                            y: (Math.sin(i * 45 * Math.PI / 180) * 60),
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0.5]
                        }}
                        transition={{ 
                            duration: 2.5, 
                            repeat: Infinity, 
                            delay: i * 0.3,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
