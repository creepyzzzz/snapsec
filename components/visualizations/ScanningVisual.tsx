"use client";

import { motion } from "framer-motion";
import { Globe, Server, Cloud, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const ScanningVisual = () => {
    const [scannedItems, setScannedItems] = useState<number[]>([]);

    // Animation constants
    const SCAN_DURATION = 4000; // 4 seconds for a slower, smoother scan
    const RESET_DELAY = 1000;   // Wait 1s before restarting

    useEffect(() => {
        const runScan = () => {
            setScannedItems([]);

            // Calculated delays to match the beam passing over centered items
            // Assuming linear movement from -20% to 120%
            // Center (idx 1) is at 50% -> (50 - (-20)) / 140 * 4000 = 2000ms
            // Items are close, so we offset by ~400ms

            // First Item (Left)
            setTimeout(() => setScannedItems(prev => [...prev, 0]), 1600);
            // Second Item (Center)
            setTimeout(() => setScannedItems(prev => [...prev, 1]), 2000);
            // Third Item (Right)
            setTimeout(() => setScannedItems(prev => [...prev, 2]), 2400);
        };

        const totalCycleTime = SCAN_DURATION + RESET_DELAY;
        runScan();
        const interval = setInterval(runScan, totalCycleTime);

        return () => clearInterval(interval);
    }, []);

    const assets = [
        { icon: Globe, label: "Web" },
        { icon: Server, label: "API" },
        { icon: Cloud, label: "Infra" },
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-zinc-900/20">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0"
                style={{
                    backgroundImage: 'linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.1
                }}
            />

            {/* Assets Row */}
            <div className="relative z-10 flex items-center justify-center gap-8">
                {assets.map((asset, index) => {
                    const isScanned = scannedItems.includes(index);
                    const Icon = asset.icon;
                    return (
                        <div key={index} className="relative group">
                            {/* Asset Icon Box */}
                            <motion.div
                                className={cn(
                                    "relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-700",
                                    isScanned
                                        ? "bg-zinc-800/60 shadow-[0_0_20px_rgba(255,255,255,0.05)] border-zinc-700/50"
                                        : "bg-transparent border-transparent"
                                )}
                                initial={{ border: "1px solid transparent" }}
                                animate={{
                                    borderColor: isScanned ? "rgba(63, 63, 70, 0.5)" : "transparent",
                                    scale: isScanned ? 1 : 0.95
                                }}
                            >
                                <Icon
                                    className={cn(
                                        "w-6 h-6 transition-colors duration-700",
                                        isScanned ? "text-zinc-100" : "text-zinc-800"
                                    )}
                                    strokeWidth={1.5}
                                />

                                {/* Verified Checkmark Overlay - Subtle Fade In */}
                                <motion.div
                                    className="absolute -top-1 -right-1 bg-zinc-950 rounded-full p-[2px] ring-1 ring-zinc-800"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{
                                        opacity: isScanned ? 1 : 0,
                                        scale: isScanned ? 1 : 0.5
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                                >
                                    <ShieldCheck className="w-3 h-3 text-white" />
                                </motion.div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            {/* Scanning Laser Beam */}
            <motion.div
                className="absolute top-0 bottom-0 w-[1px] z-20 pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.4), transparent)',
                    boxShadow: '0 0 15px 1px rgba(255,255,255,0.15)'
                }}
                initial={{ left: "-20%", opacity: 0 }}
                animate={{
                    left: ["-20%", "120%"],
                    opacity: [0, 1, 1, 0]
                }}
                transition={{
                    duration: 4,      // Matches SCAN_DURATION
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 1    // Matches RESET_DELAY / 1000
                }}
            />

            {/* Scan Area Highlight (follows beam) separate for softer effect */}
            <motion.div
                className="absolute top-0 bottom-0 z-15 pointer-events-none w-32 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                initial={{ left: "-30%" }}
                animate={{ left: "110%" }}
                transition={{
                    duration: 4,
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            />
        </div>
    );
};
