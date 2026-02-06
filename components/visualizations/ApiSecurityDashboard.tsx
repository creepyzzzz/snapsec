"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Globe, Lock, Shield, AlertTriangle, FileCode, Server, Search, CheckCircle, XCircle } from 'lucide-react';
import { cn } from "@/lib/utils";
import { AnimatedNumber } from '@/components/ui/animated-number';

const MetricCard = ({ label, value, sublabel }: { label: string, value: number, sublabel?: string }) => (
    <div className="flex flex-col">
        <span className="text-[9px] text-zinc-500 uppercase tracking-wider font-medium">{label}</span>
        <div className="text-xl font-medium text-zinc-200 my-0.5">
            <AnimatedNumber value={value} springOptions={{ bounce: 0, duration: 2000 }} />
        </div>
        {sublabel && <span className="text-[9px] text-zinc-600">{sublabel}</span>}
    </div>
);

const ApiEndpointRow = ({ method, path, status, latency }: { method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH", path: string, status: "Secure" | "Risk" | "Vulnerable", latency: string }) => (
    <div className="flex items-center justify-between py-2 border-b border-zinc-800/40 last:border-0 group cursor-default">
        <div className="flex items-center gap-3 w-full max-w-[70%]">
            <div className={cn("px-1.5 py-0.5 rounded text-[8px] font-mono font-bold w-10 text-center border",
                method === 'GET' ? 'bg-zinc-800 text-zinc-400 border-zinc-700' :
                    method === 'POST' ? 'bg-zinc-100 text-zinc-900 border-zinc-200' :
                        method === 'DELETE' ? 'bg-zinc-900 text-zinc-500 border-zinc-800' :
                            'bg-zinc-800/50 text-zinc-500 border-zinc-800')}>
                {method}
            </div>
            <span className="text-[10px] font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors truncate">{path}</span>
        </div>
        <div className="flex items-center gap-4">
            <span className="text-[9px] text-zinc-600 font-mono w-10 text-right">{latency}</span>
            <div className="flex items-center gap-1.5 w-20 justify-end">
                {status === 'Secure' && <Shield className="w-3 h-3 text-zinc-600" />}
                {status === 'Risk' && <AlertTriangle className="w-3 h-3 text-zinc-400" />}
                {status === 'Vulnerable' && <AlertTriangle className="w-3 h-3 text-zinc-100" />}
                <span className={cn("text-[9px] font-medium",
                    status === 'Secure' ? 'text-zinc-600' :
                        status === 'Risk' ? 'text-zinc-400' :
                            'text-zinc-100')}>
                    {status}
                </span>
            </div>
        </div>
    </div>
);

export const ApiSecurityDashboard = () => {
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
                        <Globe className="w-3 h-3" />
                        <span>API Security Monitor</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-zinc-500/20 border border-zinc-500/30" />
                    </div>
                </div>

                <div className="flex-1 p-3 sm:p-4 overflow-y-auto overflow-x-hidden flex flex-col gap-3 text-xs custom-scrollbar">
                    {/* Toolbar */}
                    <div className="flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-2">
                            <h2 className="text-zinc-100 font-medium text-sm tracking-tight">Endpoint Inventory</h2>
                            <div className="h-4 w-[1px] bg-zinc-800 hidden sm:block" />
                            <p className="text-zinc-500 text-[10px] hidden sm:block">Schema Validation Active</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-zinc-900/50 border border-zinc-800/60 rounded text-zinc-500 text-[10px] hover:border-zinc-700 transition-colors cursor-text min-w-[140px]">
                                <Search className="w-3 h-3" />
                                <span>Filter endpoints...</span>
                            </div>
                        </div>
                    </div>

                    {/* KPI Cards Strip */}
                    <div className="grid grid-cols-4 gap-2.5 shrink-0">
                        <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-2.5 flex flex-col backdrop-blur-sm">
                            <MetricCard label="Endpoints" value={245} sublabel="Total Discovered" />
                        </div>
                        <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-2.5 flex flex-col backdrop-blur-sm">
                            <MetricCard label="Shadow APIs" value={12} sublabel="Unmanaged" />
                        </div>
                        <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-2.5 flex flex-col backdrop-blur-sm">
                            <MetricCard label="PII Exposure" value={3} sublabel="Alerts" />
                        </div>
                        <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-2.5 flex flex-col backdrop-blur-sm">
                            <MetricCard label="Avg Latency" value={45} sublabel="ms" />
                        </div>
                    </div>

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2.5 min-h-0">
                        {/* Sidebar / Traffic Stats */}
                        <div className="md:col-span-1 bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-3 flex flex-col gap-4 backdrop-blur-sm">
                            <div>
                                <h4 className="text-[10px] font-medium text-zinc-400 mb-2 uppercase tracking-wider">Protocol Breakdown</h4>
                                <div className="space-y-3">
                                    <div className="space-y-1">
                                        <div className="flex justify-between text-[9px] text-zinc-500">
                                            <span>REST</span>
                                            <span>78%</span>
                                        </div>
                                        <div className="h-1 w-full bg-zinc-800/50 rounded-full overflow-hidden">
                                            <div className="h-full bg-zinc-200 w-[78%]" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex justify-between text-[9px] text-zinc-500">
                                            <span>GraphQL</span>
                                            <span>15%</span>
                                        </div>
                                        <div className="h-1 w-full bg-zinc-800/50 rounded-full overflow-hidden">
                                            <div className="h-full bg-zinc-500 w-[15%]" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex justify-between text-[9px] text-zinc-500">
                                            <span>gRPC</span>
                                            <span>7%</span>
                                        </div>
                                        <div className="h-1 w-full bg-zinc-800/50 rounded-full overflow-hidden">
                                            <div className="h-full bg-zinc-700 w-[7%]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto p-3 bg-zinc-900/50 rounded border border-zinc-800/50">
                                <div className="flex items-start gap-2">
                                    <Lock className="w-3 h-3 text-zinc-400 mt-0.5" />
                                    <div>
                                        <div className="text-[10px] font-medium text-zinc-300">Auth Compliance</div>
                                        <div className="text-[9px] text-zinc-500 mt-0.5">99.1% of endpoints enforce OAuth2 scopes.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Interaction Area - Endpoint List */}
                        <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-0 overflow-hidden flex flex-col backdrop-blur-sm">
                            <div className="flex items-center justify-between p-3 border-b border-zinc-800/40 bg-zinc-900/20">
                                <h3 className="text-[11px] font-medium text-zinc-300">Live Traffic Inspection</h3>
                                <FileCode className="w-3 h-3 text-zinc-600" />
                            </div>

                            <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                                <div className="flex flex-col gap-0.5">
                                    <ApiEndpointRow method="GET" path="/v1/users/{id}/profile" status="Secure" latency="24ms" />
                                    <ApiEndpointRow method="POST" path="/v1/auth/login" status="Secure" latency="82ms" />
                                    <ApiEndpointRow method="POST" path="/v1/payments/process" status="Secure" latency="145ms" />
                                    <ApiEndpointRow method="GET" path="/v1/admin/debug-dump" status="Vulnerable" latency="12ms" />
                                    <ApiEndpointRow method="PUT" path="/v1/settings/org" status="Secure" latency="56ms" />
                                    <ApiEndpointRow method="GET" path="/internal/metrics" status="Risk" latency="8ms" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
