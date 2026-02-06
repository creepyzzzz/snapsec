"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Globe, Search, ArrowUpRight, ArrowDownRight } from 'lucide-react';

import { cn } from "@/lib/utils";
import { AnimatedNumber } from '@/components/ui/animated-number';
import { WorldMap } from "@/components/ui/world-map";

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn("bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-2.5 sm:p-3 flex flex-col backdrop-blur-sm transition-all duration-300", className)}>
        {children}
    </div>
);

const MacOSHeader = () => (
    <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800/60 bg-zinc-900/50 rounded-t-lg select-none backdrop-blur-md">
        <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 shadow-sm" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 shadow-sm" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 shadow-sm" />
        </div>
        <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-zinc-500/80">
            <Globe className="w-3 h-3" />
            <span>Attack Surface Manager</span>
        </div>
        <div className="w-10" />
    </div>
);

export const AttackSurfaceDashboard = () => {
    return (
        <div className="w-full h-full flex flex-col font-sans select-none p-1 sm:p-2 overflow-hidden">
            {/* Window Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full mx-auto rounded-lg border border-zinc-800/60 bg-black/60 backdrop-blur-2xl shadow-2xl shadow-black/80 flex flex-col"
            >
                <MacOSHeader />

                {/* Dashboard Content */}
                <div className="flex-1 p-3 sm:p-4 overflow-y-auto overflow-x-hidden flex flex-col gap-3 text-xs custom-scrollbar">

                    {/* Toolbar */}
                    <div className="flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-2">
                            <h2 className="text-zinc-100 font-medium text-sm tracking-tight">External Assets</h2>
                            <div className="h-4 w-[1px] bg-zinc-800 hidden sm:block" />
                            <p className="text-zinc-500 text-[10px] hidden sm:block">Perimeter Monitoring</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-zinc-900/50 border border-zinc-800/60 rounded text-zinc-500 text-[10px] hover:border-zinc-700 transition-colors cursor-text min-w-[140px]">
                                <Search className="w-3 h-3" />
                                <span>Search domains...</span>
                            </div>
                        </div>
                    </div>

                    {/* KPI Cards Strip */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 shrink-0">
                        <Card className="hover:bg-zinc-900/60 hover:border-zinc-700/50 group py-2">
                            <div className="text-zinc-500 text-[9px] font-medium uppercase tracking-wider mb-1 group-hover:text-zinc-400">Total Exposures</div>
                            <div className="flex items-end justify-between">
                                <div className="text-lg font-medium text-white">
                                    <AnimatedNumber value={342} springOptions={{ bounce: 0, duration: 2000 }} />
                                </div>
                                <div className="flex items-center gap-0.5 text-[9px] text-zinc-400 bg-zinc-800/40 px-1 py-0.5 rounded border border-zinc-800/50">
                                    <ArrowUpRight className="w-2 h-2" /> 8 new
                                </div>
                            </div>
                        </Card>
                        <Card className="hover:bg-zinc-900/60 hover:border-zinc-700/50 group py-2">
                            <div className="text-zinc-500 text-[9px] font-medium uppercase tracking-wider mb-1 group-hover:text-zinc-400">External Assets</div>
                            <div className="flex items-end justify-between">
                                <div className="text-lg font-medium text-white">
                                    <AnimatedNumber value={1247} springOptions={{ bounce: 0, duration: 2000 }} />
                                </div>
                                <div className="text-[9px] text-zinc-500">23 domains</div>
                            </div>
                        </Card>
                        <Card className="hover:bg-zinc-900/60 hover:border-zinc-700/50 group py-2">
                            <div className="text-zinc-500 text-[9px] font-medium uppercase tracking-wider mb-1 group-hover:text-zinc-400">Shadow IT</div>
                            <div className="flex items-end justify-between">
                                <div className="text-lg font-medium text-white">
                                    <AnimatedNumber value={18} springOptions={{ bounce: 0, duration: 2000 }} />
                                </div>
                                <div className="text-[9px] text-zinc-500">Requires review</div>
                            </div>
                        </Card>
                        <Card className="hover:bg-zinc-900/60 hover:border-zinc-700/50 group py-2">
                            <div className="text-zinc-500 text-[9px] font-medium uppercase tracking-wider mb-1 group-hover:text-zinc-400">Attack Surface</div>
                            <div className="flex items-end justify-between">
                                <div className="text-lg font-medium text-zinc-200">-12%</div>
                                <div className="flex items-center gap-0.5 text-[9px] text-emerald-500/80 bg-emerald-500/10 px-1 py-0.5 rounded border border-emerald-500/20">
                                    <ArrowDownRight className="w-2 h-2" /> Reduced
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Main Content Split */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5 grow min-h-0">
                        {/* Global Map Visualization */}
                        <Card className="lg:col-span-2 hover:border-zinc-700/50 relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-3 z-10 relative px-4 pt-4">
                                <h3 className="text-zinc-300 font-medium text-[11px]">Global Server Distribution</h3>
                            </div>
                            <div className="relative w-full h-[200px] bg-zinc-900/20 overflow-hidden rounded-b-lg">
                                <div className="absolute inset-0 h-full w-full">
                                    <WorldMap
                                        dots={[
                                            {
                                                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                                                end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
                                            },
                                            {
                                                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                                                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                                            },
                                            {
                                                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                                                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                                            },
                                            {
                                                start: { lat: 51.5074, lng: -0.1278 }, // London
                                                end: { lat: 28.6139, lng: 77.2090 }, // New Delhi
                                            },
                                            {
                                                start: { lat: 28.6139, lng: 77.2090 }, // New Delhi
                                                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                                            },
                                            {
                                                start: { lat: 28.6139, lng: 77.2090 }, // New Delhi
                                                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                                            },
                                        ]}
                                        lineColor="#3b82f6"
                                    />
                                </div>
                            </div>
                        </Card>

                        {/* Critical Exposures */}
                        <Card className="hover:border-zinc-700/50 overflow-hidden flex flex-col">
                            <div className="flex items-center justify-between mb-3 shrink-0">
                                <h3 className="text-zinc-300 font-medium text-[11px]">Critical Exposures</h3>
                            </div>
                            <div className="flex flex-col gap-2 overflow-y-auto custom-scrollbar pr-1 -mr-1">
                                {[
                                    { name: "Open S3 Bucket", loc: "us-east-1", type: "Critical" },
                                    { name: "Exposed Admin Panel", loc: "eu-west-1", type: "High" },
                                    { name: "Unencrypted Database", loc: "us-west-2", type: "Critical" },
                                    { name: "Default Credentials", loc: "ap-south-1", type: "High" },
                                    { name: "Outdated SSL Cert", loc: "eu-central-1", type: "Medium" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-2 rounded-md hover:bg-zinc-800/40 transition-colors group cursor-default border border-zinc-800/30 hover:border-zinc-700/50">
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-zinc-300 text-[10px] font-medium truncate group-hover:text-white transition-colors">{item.name}</span>
                                            <div className="flex items-center gap-1 text-[9px] text-zinc-600">
                                                <Globe className="w-2.5 h-2.5" />
                                                <span>{item.loc}</span>
                                            </div>
                                        </div>
                                        <div className={cn("px-1.5 py-0.5 rounded text-[8px] font-medium border",
                                            item.type === 'Critical' ? 'bg-zinc-100 text-black border-zinc-100' :
                                                item.type === 'High' ? 'bg-zinc-800 text-zinc-300 border-zinc-700' :
                                                    'bg-transparent text-zinc-500 border-zinc-800')}>
                                            {item.type}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>



                </div>

                {/* Status Footer */}
                <div className="px-3 py-1.5 border-t border-zinc-800/60 bg-zinc-900/30 flex items-center justify-between text-[8px] sm:text-[9px] text-zinc-600">
                    <div className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-medium">Monitoring Active</span>
                    </div>
                    <div className="font-mono opacity-60">Last scan: 30s ago</div>
                </div>
            </motion.div >
        </div >
    );
};
