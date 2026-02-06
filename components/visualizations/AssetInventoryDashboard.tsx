"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Database, Server, Smartphone, Cloud, Globe, Box, MoreHorizontal, Search, Download } from 'lucide-react';
import { cn } from "@/lib/utils";
import { AnimatedNumber } from '@/components/ui/animated-number';

const MetricCard = ({ label, value, sublabel }: { label: string, value: number, sublabel?: string }) => (
    <div className="flex flex-col">
        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">{label}</span>
        <div className="text-xl font-medium text-zinc-100 my-0.5">
            <AnimatedNumber value={value} springOptions={{ bounce: 0, duration: 2000 }} />
        </div>
        {sublabel && <span className="text-[9px] text-zinc-600">{sublabel}</span>}
    </div>
);

const AssetRow = ({ icon: Icon, name, type, seen, status }: { icon: any, name: string, type: string, seen: string, status: "Active" | "Inactive" | "New" }) => (
    <div className="flex items-center justify-between py-2 border-b border-zinc-800/40 last:border-0 group cursor-default">
        <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-zinc-800/50 flex items-center justify-center border border-zinc-700/30 group-hover:border-zinc-600/50 transition-colors">
                <Icon className="w-3 h-3 text-zinc-400" />
            </div>
            <div className="flex flex-col">
                <span className="text-[11px] font-medium text-zinc-300 group-hover:text-white transition-colors">{name}</span>
                <span className="text-[9px] text-zinc-600">{type}</span>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <span className="text-[9px] text-zinc-600 font-mono hidden sm:block">{seen}</span>
            <div className={cn("px-1.5 py-0.5 rounded text-[8px] font-medium border",
                status === 'Active' ? 'bg-zinc-800/50 text-zinc-300 border-zinc-700/50' :
                    status === 'New' ? 'bg-zinc-100 text-zinc-900 border-zinc-200 shadow-sm' :
                        'bg-zinc-900 text-zinc-600 border-zinc-800')}>
                {status}
            </div>
        </div>
    </div>
);

const DistributionBar = ({ label, count, total, color }: { label: string, count: number, total: number, color: string }) => (
    <div className="space-y-1">
        <div className="flex justify-between text-[9px] text-zinc-500">
            <span>{label}</span>
            <span>{Math.round((count / total) * 100)}%</span>
        </div>
        <div className="h-1 w-full bg-zinc-800/50 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(count / total) * 100}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={cn("h-full rounded-full", color)}
            />
        </div>
    </div>
);



export const AssetInventoryDashboard = () => {
    return (
        <div className="w-full h-full flex flex-col font-sans select-none p-1 sm:p-2 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full mx-auto rounded-lg border border-zinc-800/60 bg-black/60 backdrop-blur-2xl shadow-2xl shadow-black/80 flex flex-col"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800/60 bg-zinc-900/50 rounded-t-lg select-none backdrop-blur-md">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 shadow-sm" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 shadow-sm" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 shadow-sm" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-zinc-500/80">
                        <Box className="w-3 h-3" />
                        <span>Asset Inventory</span>
                    </div>
                    <div className="w-10" />
                </div>

                <div className="flex-1 p-3 sm:p-4 overflow-y-auto overflow-x-hidden flex flex-col gap-3 text-xs custom-scrollbar">
                    {/* Toolbar */}
                    <div className="flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-2">
                            <h2 className="text-zinc-100 font-medium text-sm tracking-tight">Inventory Overview</h2>
                            <div className="h-4 w-[1px] bg-zinc-800 hidden sm:block" />
                            <p className="text-zinc-500 text-[10px] hidden sm:block">Real-time Tracking</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-zinc-900/50 border border-zinc-800/60 rounded text-zinc-500 text-[10px] hover:border-zinc-700 transition-colors cursor-text min-w-[140px]">
                                <Search className="w-3 h-3" />
                                <span>Search assets...</span>
                            </div>
                        </div>
                    </div>

                    {/* KPI Cards Strip */}
                    <div className="grid grid-cols-4 gap-2.5 shrink-0">
                        <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-2.5 flex flex-col backdrop-blur-sm">
                            <MetricCard label="Total Assets" value={14205} sublabel="+124 this week" />
                        </div>
                        <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-2.5 flex flex-col backdrop-blur-sm">
                            <MetricCard label="Cloud Resources" value={8432} sublabel="AWS, GCP, Azure" />
                        </div>
                        <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-2.5 flex flex-col backdrop-blur-sm">
                            <MetricCard label="Endpoints" value={4112} sublabel="Laptops, Mobiles" />
                        </div>
                        <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-2.5 flex flex-col backdrop-blur-sm">
                            <MetricCard label="Unmanaged" value={18} sublabel="Needs Review" />
                        </div>
                    </div>

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2.5 min-h-0">
                        {/* Sidebar / Distribution - Made into a Card */}
                        <div className="md:col-span-1 bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-3 flex flex-col gap-4 backdrop-blur-sm">
                            <div>
                                <h4 className="text-[10px] font-medium text-zinc-400 mb-2 uppercase tracking-wider">ByType</h4>
                                <div className="space-y-2.5">
                                    <DistributionBar label="Compute" count={4500} total={14205} color="bg-zinc-100" />
                                    <DistributionBar label="Storage" count={3200} total={14205} color="bg-zinc-400" />
                                    <DistributionBar label="Network" count={2800} total={14205} color="bg-zinc-500" />
                                    <DistributionBar label="Database" count={3705} total={14205} color="bg-zinc-600" />
                                </div>
                            </div>

                            <div className="mt-auto">
                                <h4 className="text-[10px] font-medium text-zinc-400 mb-1 uppercase tracking-wider">Coverage</h4>
                                <div className="flex items-center gap-2">
                                    <div className="text-2xl font-light text-white">98.2%</div>
                                    <div className="text-[9px] text-zinc-500">Monitored</div>
                                </div>
                            </div>
                        </div>

                        {/* Main Interaction Area - Recent Asset List - Made into a Card */}
                        <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-0 overflow-hidden flex flex-col backdrop-blur-sm">
                            <div className="flex items-center justify-between p-3 border-b border-zinc-800/40 bg-zinc-900/20">
                                <h3 className="text-[11px] font-medium text-zinc-300">Recently Discovered</h3>
                                <button className="flex items-center gap-1 px-2 py-1 rounded bg-zinc-800/50 border border-zinc-700/50 text-[9px] text-zinc-400 hover:text-zinc-200 transition-colors">
                                    <Download className="w-2.5 h-2.5" />
                                    Export
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                                <div className="flex flex-col gap-0.5">
                                    <AssetRow icon={Database} name="prod-db-replica-04" type="AWS RDS • PostgreSQL" seen="2m ago" status="New" />
                                    <AssetRow icon={Server} name="worker-node-882" type="GCP Compute • e2-standard" seen="15m ago" status="Active" />
                                    <AssetRow icon={Cloud} name="assets-bucket-backup" type="AWS S3 • Standard" seen="42m ago" status="Active" />
                                    <AssetRow icon={Globe} name="api-gateway-internal" type="Azure App Gateway" seen="1h ago" status="Active" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
