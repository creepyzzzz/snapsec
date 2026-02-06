"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, ShieldCheck, Activity, Zap, Search, AlertOctagon, XCircle, CheckCircle2, Terminal } from 'lucide-react';
import { cn } from "@/lib/utils";
import { AnimatedNumber } from '@/components/ui/animated-number';

// --- Mini Components ---

const StatusBadge = ({ status }: { status: "Critical" | "High" | "Medium" | "Low" | "Mitigated" }) => {
    const styles = {
        "Critical": "bg-zinc-800 text-zinc-200 border-zinc-700",
        "High": "bg-zinc-800 text-zinc-300 border-zinc-700",
        "Medium": "bg-zinc-900 text-zinc-500 border-zinc-800",
        "Low": "bg-zinc-900 text-zinc-600 border-zinc-800",
        "Mitigated": "bg-transparent text-zinc-500 border-zinc-800 border-dashed",
    };

    return (
        <span className={cn("px-1.5 py-0.5 rounded text-[8px] font-medium border uppercase tracking-wider", styles[status])}>
            {status}
        </span>
    );
};

const ThreatRow = ({ type, source, status, time }: { type: string, source: string, status: "Critical" | "High" | "Mitigated", time: string }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center justify-between p-2 rounded-md border border-zinc-800/40 bg-zinc-900/20 hover:bg-zinc-800/40 transition-colors group cursor-default"
    >
        <div className="flex items-center gap-2.5">
            <div className={cn("w-1.5 h-1.5 rounded-full",
                status === 'Critical' ? 'bg-zinc-100 shadow-[0_0_8px_rgba(255,255,255,0.4)]' :
                    status === 'High' ? 'bg-zinc-500' :
                        'bg-zinc-800')}
            />
            <div className="flex flex-col">
                <span className="text-[10px] font-medium text-zinc-300 group-hover:text-white transition-colors">{type}</span>
                <span className="text-[8px] text-zinc-500 font-mono">{source}</span>
            </div>
        </div>
        <div className="flex items-center gap-3">
            <span className="text-[8px] text-zinc-600 font-mono">{time}</span>
            <StatusBadge status={status} />
        </div>
    </motion.div>
);

const RadarScanner = () => {
    return (
        <div className="relative w-full aspect-square max-w-[180px] mx-auto flex items-center justify-center opacity-90">
            {/* Radar Background Rings */}
            <div className="absolute inset-0 rounded-full border border-zinc-800/30" />
            <div className="absolute inset-4 rounded-full border border-zinc-800/30" />
            <div className="absolute inset-8 rounded-full border border-zinc-800/30" />

            {/* Crosshairs */}
            <div className="absolute top-0 bottom-0 w-[1px] bg-zinc-800/30" />
            <div className="absolute left-0 right-0 h-[1px] bg-zinc-800/30" />

            {/* Scanning Line */}
            <motion.div
                className="absolute w-1/2 h-1/2 top-0 right-0 origin-bottom-left bg-gradient-to-t from-transparent to-zinc-200/5"
                style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.1)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            />

            {/* Blips - Monochrome */}
            <motion.div
                className="absolute top-6 right-8 w-1.5 h-1.5 bg-zinc-100 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
                className="absolute bottom-10 left-12 w-1.5 h-1.5 bg-zinc-600 rounded-full"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
            />
        </div>
    );
};

// --- Main Component ---

export const ThreatManagementDashboard = () => {
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
                        <ShieldAlert className="w-3 h-3" />
                        <span>Threat Response Center</span>
                    </div>
                    <div className="w-10 flex justify-end" />
                </div>

                <div className="flex-1 p-3 sm:p-4 overflow-y-auto overflow-x-hidden flex flex-col gap-3 text-xs custom-scrollbar">

                    {/* Top KPI Cards */}
                    <div className="grid grid-cols-3 gap-2.5 shrink-0">
                        <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-2.5 flex flex-col relative overflow-hidden group">
                            <div className="flex items-start justify-between z-10">
                                <span className="text-[9px] text-zinc-500 uppercase tracking-wider font-medium">Threat Level</span>
                                <Activity className="w-3 h-3 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                            </div>
                            <div className="mt-1 z-10">
                                <span className="text-lg font-medium text-zinc-200">Moderate</span>
                            </div>
                        </div>

                        <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-2.5 flex flex-col relative overflow-hidden group">
                            <div className="flex items-start justify-between z-10">
                                <span className="text-[9px] text-zinc-500 uppercase tracking-wider font-medium">Active Incidents</span>
                                <AlertOctagon className="w-3 h-3 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                            </div>
                            <div className="mt-1 z-10 flex items-baseline gap-1">
                                <span className="text-lg font-medium text-zinc-200">
                                    <AnimatedNumber value={3} springOptions={{ bounce: 0, duration: 2000 }} />
                                </span>
                                <span className="text-[9px] text-zinc-500">Processing</span>
                            </div>
                        </div>

                        <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-2.5 flex flex-col relative overflow-hidden group">
                            <div className="flex items-start justify-between z-10">
                                <span className="text-[9px] text-zinc-500 uppercase tracking-wider font-medium">MTTR</span>
                                <Zap className="w-3 h-3 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                            </div>
                            <div className="mt-1 z-10 flex items-baseline gap-1">
                                <span className="text-lg font-medium text-zinc-200">
                                    <AnimatedNumber value={12} springOptions={{ bounce: 0, duration: 2000 }} />s
                                </span>
                                <span className="text-[9px] text-zinc-500">−15%</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Interface */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2.5 min-h-0">

                        {/* Radar Section */}
                        <div className="md:col-span-1 bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
                            <h3 className="w-full text-[10px] font-medium text-zinc-500 uppercase tracking-wider text-center">Perimeter Scan</h3>
                            <RadarScanner />
                            <div className="flex gap-4 text-[9px] text-zinc-500 font-mono">
                                <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" /> NET</span>
                                <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" /> HOST</span>
                                <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 bg-zinc-600 rounded-full" /> CLOUD</span>
                            </div>
                        </div>

                        {/* Recent Alerts Feed */}
                        <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-0 flex flex-col overflow-hidden">
                            <div className="flex items-center justify-between p-3 border-b border-zinc-800/40 bg-zinc-900/20">
                                <h3 className="text-[11px] font-medium text-zinc-300">Live Incident Feed</h3>
                                <Terminal className="w-3 h-3 text-zinc-600" />
                            </div>
                            <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
                                <ThreatRow type="Ransomware Pattern" source="finance-server-01" status="Critical" time="Now" />
                                <ThreatRow type="SSH Brute Force" source="bastion-host-eu" status="High" time="12s ago" />
                                <ThreatRow type="Malicious Payload" source="api-gateway" status="Mitigated" time="45s ago" />
                                <ThreatRow type="Privilege Escalation" source="worker-node-88" status="Mitigated" time="2m ago" />
                                <ThreatRow type="Unusual Data Exfil" source="s3-bucket-logs" status="High" time="5m ago" />
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
        </div>
    );
};
