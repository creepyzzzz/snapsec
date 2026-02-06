import React from 'react';
import { Tilt } from './ui/tilt';
import { Shield, Target, Database, Siren, Scan, Lock, ArrowRight } from 'lucide-react';

import { ApiSecurityVisual } from './visualizations/ApiSecurityVisual';
import { ScanningVisual } from './visualizations/ScanningVisual';

import { ClientSideBar } from './ui/client-side-bar';

const ProblemSection: React.FC = () => {
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 wireframe-grid pointer-events-none opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">
                        Six modules. <span className="text-zinc-500">One platform.</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
                        Everything you need to secure your applications in one unified solution
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">

                    {/* Module 1: Vulnerability Management (Wide Top-Left) */}
                    <div className="md:col-span-1 lg:col-span-2">
                        <Tilt rotationFactor={4} isRevese springOptions={{ stiffness: 40, damping: 30, mass: 1 }} className="bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden group hover:border-zinc-700 flex flex-col h-full hover:shadow-2xl hover:shadow-zinc-900/50 transition-all duration-300">
                            <div className="h-40 relative overflow-hidden flex items-center justify-center border-b border-zinc-800/50 bg-zinc-900/20">
                            </div>
                            <div className="p-5 flex flex-col flex-grow bg-zinc-900/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Shield className="w-4 h-4 text-white" />
                                    <h3 className="text-white font-medium text-base">Vulnerability Management</h3>
                                </div>
                                <p className="text-zinc-500 text-xs leading-relaxed flex-grow line-clamp-3">
                                    Track, prioritize, and remediate vulnerabilities across your entire application portfolio with intelligent risk scoring based on real-time exploitability context.
                                </p>
                                <div className="mt-4 flex items-center text-xs font-medium text-zinc-500 group-hover:text-white transition-colors cursor-pointer">
                                    Learn more <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Tilt>
                    </div>

                    {/* Module 4: Threat Management (Wide Top-Right) */}
                    <div className="md:col-span-1 lg:col-span-2">
                        <Tilt rotationFactor={4} isRevese springOptions={{ stiffness: 40, damping: 30, mass: 1 }} className="bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden group hover:border-zinc-700 flex flex-col h-full hover:shadow-2xl hover:shadow-zinc-900/50 transition-all duration-300">
                            <div className="h-40 relative overflow-hidden flex items-center justify-center border-b border-zinc-800/50 bg-zinc-900/20">
                                {/* Threat Waveform Graphic */}
                                <div className="flex items-end gap-1 h-12 w-full px-16 justify-center opacity-40">
                                    {Array.from({ length: 30 }).map((_, i) => (
                                        <ClientSideBar key={i} index={i} />
                                    ))}
                                </div>
                            </div>
                            <div className="p-5 flex flex-col flex-grow bg-zinc-900/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Siren className="w-4 h-4 text-white" />
                                    <h3 className="text-white font-medium text-base">Threat Management</h3>
                                </div>
                                <p className="text-zinc-500 text-xs leading-relaxed flex-grow line-clamp-3">
                                    Detect, analyze, and respond to security threats with advanced threat intelligence and automated detection workflows.
                                </p>
                                <div className="mt-4 flex items-center text-xs font-medium text-zinc-500 group-hover:text-white transition-colors cursor-pointer">
                                    Learn more <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Tilt>
                    </div>

                    {/* Module 2: Attack Surface Management (Small) */}
                    <div className="md:col-span-1 lg:col-span-1">
                        <Tilt rotationFactor={4} isRevese springOptions={{ stiffness: 40, damping: 30, mass: 1 }} className="bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden group hover:border-zinc-700 flex flex-col h-full hover:shadow-2xl hover:shadow-zinc-900/50 transition-all duration-300">
                            <div className="h-32 relative overflow-hidden flex items-center justify-center border-b border-zinc-800/50 bg-zinc-900/20">
                                {/* Network Nodes Graphic */}
                                <svg className="w-full h-full opacity-40 p-6" viewBox="0 0 200 150">
                                    <circle cx="100" cy="75" r="4" fill="#52525b" />
                                    <circle cx="50" cy="40" r="3" fill="#3f3f46" />
                                    <circle cx="150" cy="40" r="3" fill="#3f3f46" />
                                    <line x1="100" y1="75" x2="50" y2="40" stroke="#3f3f46" strokeWidth="1" />
                                    <line x1="100" y1="75" x2="150" y2="40" stroke="#3f3f46" strokeWidth="1" />
                                    <circle cx="100" cy="75" r="40" stroke="#3f3f46" strokeWidth="1" fill="none" className="animate-pulse" />
                                </svg>
                            </div>
                            <div className="p-5 flex flex-col flex-grow bg-zinc-900/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Target className="w-4 h-4 text-zinc-200" />
                                    <h3 className="text-white font-medium text-sm">Attack Surface</h3>
                                </div>
                                <p className="text-zinc-500 text-xs leading-relaxed flex-grow mb-2 line-clamp-3">
                                    Continuously discover and monitor your external attack surface exposures.
                                </p>
                            </div>
                        </Tilt>
                    </div>

                    {/* Module 3: Asset Inventory (Small) */}
                    <div className="md:col-span-1 lg:col-span-1">
                        <Tilt rotationFactor={4} isRevese springOptions={{ stiffness: 40, damping: 30, mass: 1 }} className="bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden group hover:border-zinc-700 flex flex-col h-full hover:shadow-2xl hover:shadow-zinc-900/50 transition-all duration-300">
                            <div className="h-32 relative overflow-hidden flex items-center justify-center border-b border-zinc-800/50 bg-zinc-900/20">
                            </div>
                            <div className="p-5 flex flex-col flex-grow bg-zinc-900/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Database className="w-4 h-4 text-zinc-200" />
                                    <h3 className="text-white font-medium text-sm">Asset Inventory</h3>
                                </div>
                                <p className="text-zinc-500 text-xs leading-relaxed flex-grow mb-2 line-clamp-3">
                                    Maintain complete visibility of all digital assets with automated discovery.
                                </p>
                            </div>
                        </Tilt>
                    </div>

                    {/* Module 5: Vulnerability Scanning (Small) */}
                    <div className="md:col-span-1 lg:col-span-1">
                        <Tilt rotationFactor={4} isRevese springOptions={{ stiffness: 40, damping: 30, mass: 1 }} className="bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden group hover:border-zinc-700 flex flex-col h-full hover:shadow-2xl hover:shadow-zinc-900/50 transition-all duration-300">
                            <div className="h-32 relative overflow-hidden flex items-center justify-center border-b border-zinc-800/50 bg-zinc-900/20">
                                <ScanningVisual />
                            </div>
                            <div className="p-5 flex flex-col flex-grow bg-zinc-900/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Scan className="w-4 h-4 text-white" />
                                    <h3 className="text-white font-medium text-sm">Scanning</h3>
                                </div>
                                <p className="text-zinc-500 text-xs leading-relaxed flex-grow mb-2 line-clamp-3">
                                    Automated scanning for web apps, APIs, and infrastructure.
                                </p>
                            </div>
                        </Tilt>
                    </div>

                    {/* Module 6: API Security (Small) */}
                    <div className="md:col-span-1 lg:col-span-1">
                        <Tilt rotationFactor={4} isRevese springOptions={{ stiffness: 40, damping: 30, mass: 1 }} className="bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden group hover:border-zinc-700 flex flex-col h-full hover:shadow-2xl hover:shadow-zinc-900/50 transition-all duration-300">
                            <div className="h-32 relative overflow-hidden flex items-center justify-center border-b border-zinc-800/50 bg-zinc-900/20">
                                <ApiSecurityVisual />
                            </div>
                            <div className="p-5 flex flex-col flex-grow bg-zinc-900/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Lock className="w-4 h-4 text-zinc-200" />
                                    <h3 className="text-white font-medium text-sm">API Security</h3>
                                </div>
                                <p className="text-zinc-500 text-xs leading-relaxed flex-grow mb-2 line-clamp-3">
                                    Protect your APIs with runtime protection.
                                </p>
                            </div>
                        </Tilt>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProblemSection;