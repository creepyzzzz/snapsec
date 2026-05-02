"use client";

import React, { useRef } from 'react';
import { Settings, Brain, Zap, Edit3, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const FeatureList: React.FC = () => {
    return (
        <section className="py-24 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 relative">

                {/* Left Side - 3D Tunnel Effect & Text */}
                <div className="lg:w-1/3 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="sticky top-32"
                    >
                        {/* Abstract 3D Tunnel CSS simulation */}
                        <div className="absolute -left-20 -top-20 w-[600px] h-[600px] pointer-events-none opacity-30 -z-10">
                            <svg viewBox="0 0 400 400" className="w-full h-full animate-spin-slow" style={{ animationDuration: '60s' }}>
                                <defs>
                                    <linearGradient id="tunnelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#3f3f46" stopOpacity="0.1" />
                                        <stop offset="50%" stopColor="#71717a" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="#3f3f46" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <ellipse key={i} cx="200" cy="200" rx={20 + i * 15} ry={10 + i * 10} fill="none" stroke="url(#tunnelGrad)" strokeWidth="0.5" transform={`rotate(${i * 15} 200 200)`} />
                                ))}
                            </svg>
                        </div>

                        <div className="flex items-center gap-2 mb-8 relative z-10">
                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-zinc-950 dark:text-white" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 2L3 7v5c0 5 4 9 9 11 5-2 9-6 9-11V7l-9-5z" fill="currentColor" fillOpacity="0.1" />
                                <path d="M12 6L6 9v3c0 3 2.5 5.5 6 7 3.5-1.5 6-4 6-7V9l-6-3z" fill="currentColor" fillOpacity="0.2" />
                                <path d="M12 10l-3 1.5v1.5c0 1.5 1.25 2.75 3 3.5 1.75-.75 3-2 3-3.5v-1.5l-3-1.5z" fill="currentColor" fillOpacity="0.4" />
                            </svg>
                            <span className="font-semibold text-base text-zinc-950 dark:text-white">Aether</span>
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-[34px] font-medium text-zinc-950 dark:text-white mb-2">Better decisions.</h2>
                            <h2 className="text-[34px] font-medium text-zinc-950 dark:text-white mb-2">Faster outcomes.</h2>
                            <h2 className="text-[34px] font-medium text-zinc-400 dark:text-zinc-500 mb-8">Not more alerts.</h2>

                            <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed max-w-xs">
                                Aether Sentinel is purpose-built to run protection intelligence in production: persistent agents with deep memory, isolated execution, and deterministic, auditable workflows.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Stack */}
                <div className="lg:w-2/3 flex flex-col gap-6 relative z-10">
                    {/* Common wrapper function for the cards to keep code DRY could be used, but writing out explicitly for clarity */}
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative rounded-[24px] p-8 overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.1),0_11px_11px_rgba(0,0,0,0.09),0_26px_15px_rgba(0,0,0,0.05),0_46px_18px_rgba(0,0,0,0.01)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-blue-100 dark:border-zinc-800"
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-bl from-blue-300 via-blue-100/40 to-transparent dark:from-blue-600/30 dark:via-zinc-900/80 dark:to-zinc-900"></div>
                        
                        {/* Pixel Texture */}
                        <div 
                            className="absolute inset-0 opacity-[0.5] dark:opacity-[0.3] pointer-events-none mix-blend-overlay"
                            style={{ 
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='8' height='8' fill='%23000000' fill-opacity='0.05' /%3E%3Crect x='12' y='12' width='8' height='8' fill='%23000000' fill-opacity='0.05' /%3E%3C/svg%3E")`,
                                backgroundSize: '24px 24px',
                                maskImage: 'linear-gradient(to bottom left, black 10%, transparent 80%)',
                                WebkitMaskImage: 'linear-gradient(to bottom left, black 10%, transparent 80%)'
                            }} 
                        />
                        <div className="relative z-10 h-full flex flex-col justify-start">
                            
                            <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-4" />
                            <h3 className="text-zinc-950 dark:text-white font-medium text-lg mb-2">Autonomous Execution</h3>
                            <p className="text-zinc-600 dark:text-zinc-500 text-[15px]">Aether Sentinel adapts in real-time as your stack changes. Testing techniques evolve dynamically, ensuring protection never lags behind deployment.</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative rounded-[24px] p-8 overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.1),0_11px_11px_rgba(0,0,0,0.09),0_26px_15px_rgba(0,0,0,0.05),0_46px_18px_rgba(0,0,0,0.01)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-blue-100 dark:border-zinc-800"
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-bl from-blue-300 via-blue-100/40 to-transparent dark:from-blue-600/30 dark:via-zinc-900/80 dark:to-zinc-900"></div>
                        
                        {/* Pixel Texture */}
                        <div 
                            className="absolute inset-0 opacity-[0.5] dark:opacity-[0.3] pointer-events-none mix-blend-overlay"
                            style={{ 
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='8' height='8' fill='%23000000' fill-opacity='0.05' /%3E%3Crect x='12' y='12' width='8' height='8' fill='%23000000' fill-opacity='0.05' /%3E%3C/svg%3E")`,
                                backgroundSize: '24px 24px',
                                maskImage: 'linear-gradient(to bottom left, black 10%, transparent 80%)',
                                WebkitMaskImage: 'linear-gradient(to bottom left, black 10%, transparent 80%)'
                            }} 
                        />
                        <div className="relative z-10 h-full flex flex-col justify-start">
                            
                            <div className="flex justify-between items-start mb-4">
                                <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-zinc-600 dark:text-zinc-400 font-medium px-2 py-1 rounded bg-zinc-200/50 dark:bg-zinc-800/50">Sign in</span>
                                    <Button size="sm">Request demo</Button>
                                </div>
                            </div>
                            <h3 className="text-zinc-950 dark:text-white font-medium text-lg mb-2">Behavioral Reasoning</h3>
                            <p className="text-zinc-600 dark:text-zinc-500 text-[15px]">The engine models how your applications authenticate and interact. It doesn't just scan—it reasons like a protection architect to find deep logic flaws.</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative rounded-[24px] p-8 overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.1),0_11px_11px_rgba(0,0,0,0.09),0_26px_15px_rgba(0,0,0,0.05),0_46px_18px_rgba(0,0,0,0.01)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-blue-100 dark:border-zinc-800"
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-bl from-blue-300 via-blue-100/40 to-transparent dark:from-blue-600/30 dark:via-zinc-900/80 dark:to-zinc-900"></div>
                        
                        {/* Pixel Texture */}
                        <div 
                            className="absolute inset-0 opacity-[0.5] dark:opacity-[0.3] pointer-events-none mix-blend-overlay"
                            style={{ 
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='8' height='8' fill='%23000000' fill-opacity='0.05' /%3E%3Crect x='12' y='12' width='8' height='8' fill='%23000000' fill-opacity='0.05' /%3E%3C/svg%3E")`,
                                backgroundSize: '24px 24px',
                                maskImage: 'linear-gradient(to bottom left, black 10%, transparent 80%)',
                                WebkitMaskImage: 'linear-gradient(to bottom left, black 10%, transparent 80%)'
                            }} 
                        />
                        <div className="relative z-10 h-full flex flex-col justify-start">
                            
                            <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-4" />
                            <h3 className="text-zinc-950 dark:text-white font-medium text-lg mb-2">Persistent Context</h3>
                            <p className="text-zinc-600 dark:text-zinc-500 text-[15px]">Historical data, prior findings, and validation results persist across every run. New workflows build on existing knowledge, eliminating redundant discovery.</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative rounded-[24px] p-8 overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.1),0_11px_11px_rgba(0,0,0,0.09),0_26px_15px_rgba(0,0,0,0.05),0_46px_18px_rgba(0,0,0,0.01)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-blue-100 dark:border-zinc-800"
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-bl from-blue-300 via-blue-100/40 to-transparent dark:from-blue-600/30 dark:via-zinc-900/80 dark:to-zinc-900"></div>
                        
                        {/* Pixel Texture */}
                        <div 
                            className="absolute inset-0 opacity-[0.5] dark:opacity-[0.3] pointer-events-none mix-blend-overlay"
                            style={{ 
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='8' height='8' fill='%23000000' fill-opacity='0.05' /%3E%3Crect x='12' y='12' width='8' height='8' fill='%23000000' fill-opacity='0.05' /%3E%3C/svg%3E")`,
                                backgroundSize: '24px 24px',
                                maskImage: 'linear-gradient(to bottom left, black 10%, transparent 80%)',
                                WebkitMaskImage: 'linear-gradient(to bottom left, black 10%, transparent 80%)'
                            }} 
                        />
                        <div className="relative z-10 h-full flex flex-col justify-start">
                            
                            <Edit3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-4" />
                            <h3 className="text-zinc-950 dark:text-white font-medium text-lg mb-2">Contemporary Intelligence</h3>
                            <p className="text-zinc-600 dark:text-zinc-500 text-[15px]">Aether Sentinel incorporates cutting-edge protection research in real-time, ensuring you are defended against the latest 0-day exploits and attack vectors.</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative rounded-[24px] p-8 overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.1),0_11px_11px_rgba(0,0,0,0.09),0_26px_15px_rgba(0,0,0,0.05),0_46px_18px_rgba(0,0,0,0.01)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-blue-100 dark:border-zinc-800"
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-bl from-blue-300 via-blue-100/40 to-transparent dark:from-blue-600/30 dark:via-zinc-900/80 dark:to-zinc-900"></div>
                        
                        {/* Pixel Texture */}
                        <div 
                            className="absolute inset-0 opacity-[0.5] dark:opacity-[0.3] pointer-events-none mix-blend-overlay"
                            style={{ 
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='8' height='8' fill='%23000000' fill-opacity='0.05' /%3E%3Crect x='12' y='12' width='8' height='8' fill='%23000000' fill-opacity='0.05' /%3E%3C/svg%3E")`,
                                backgroundSize: '24px 24px',
                                maskImage: 'linear-gradient(to bottom left, black 10%, transparent 80%)',
                                WebkitMaskImage: 'linear-gradient(to bottom left, black 10%, transparent 80%)'
                            }} 
                        />
                        <div className="relative z-10 h-full flex flex-col justify-start">
                            
                            <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-4" />
                            <h3 className="text-zinc-950 dark:text-white font-medium text-lg mb-2">Verifiable Evidence</h3>
                            <p className="text-zinc-600 dark:text-zinc-500 text-[15px]">No more speculation. Every finding comes with a sandboxed reproduction path, clear execution context, and validated fix guidance.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FeatureList;