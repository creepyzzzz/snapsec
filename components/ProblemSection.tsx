import React from 'react';
import { Tilt } from './ui/tilt';
import { Shield, Target, Database, Siren, Scan, Lock, ArrowRight } from 'lucide-react';

import { ClientSideBar } from './ui/client-side-bar';

const ProblemSection: React.FC = () => {
    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 wireframe-grid pointer-events-none opacity-20 dark:opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-[40px] md:text-[52px] font-medium text-zinc-950 dark:text-white mb-4 tracking-tight">
                        Six modules. <span className="text-zinc-400 dark:text-zinc-500">One platform.</span>
                    </h2>
                    <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto">
                        Everything you need to protect your applications in one unified solution
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">

                    {/* Module 1: Vulnerability Intelligence (Wide Top-Left) */}
                    <div className="md:col-span-1 lg:col-span-2">
                        <Tilt rotationFactor={4} isRevese springOptions={{ stiffness: 40, damping: 30, mass: 1 }} className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-700 flex flex-col h-full hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 transition-all duration-300">
                            <div className="h-40 relative overflow-hidden flex items-center justify-center border-b border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-100/50 dark:bg-zinc-900/20">
                            </div>
                            <div className="p-5 flex flex-col flex-grow bg-zinc-100/50 dark:bg-zinc-900/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Shield className="w-4 h-4 text-zinc-950 dark:text-white" />
                                    <h3 className="text-zinc-950 dark:text-white font-medium text-lg">Vulnerability Intelligence</h3>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed flex-grow line-clamp-3">
                                    Go beyond generic scanners. Correlate technical findings with real-world exploitability and business impact to focus on what matters most.
                                </p>
                                <div className="mt-4 flex items-center text-sm font-medium text-zinc-500 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors cursor-pointer">
                                    Learn more <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Tilt>
                    </div>

                    {/* Module 4: Proactive Threat Hunting (Wide Top-Right) */}
                    <div className="md:col-span-1 lg:col-span-2">
                        <Tilt rotationFactor={4} isRevese springOptions={{ stiffness: 40, damping: 30, mass: 1 }} className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-700 flex flex-col h-full hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 transition-all duration-300">
                            <div className="h-40 relative overflow-hidden flex items-center justify-center border-b border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-100/50 dark:bg-zinc-900/20">
                                {/* Threat Waveform Graphic */}
                                <div className="flex items-end gap-1 h-12 w-full px-16 justify-center opacity-40">
                                    {Array.from({ length: 30 }).map((_, i) => (
                                        <ClientSideBar key={i} index={i} />
                                    ))}
                                </div>
                            </div>
                            <div className="p-5 flex flex-col flex-grow bg-zinc-100/50 dark:bg-zinc-900/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Siren className="w-4 h-4 text-zinc-950 dark:text-white" />
                                    <h3 className="text-zinc-950 dark:text-white font-medium text-lg">Proactive Threat Hunting</h3>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed flex-grow line-clamp-3">
                                    Identify sophisticated adversaries before they strike with behavioral analysis, anomaly detection, and real-time threat intelligence.
                                </p>
                                <div className="mt-4 flex items-center text-sm font-medium text-zinc-500 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors cursor-pointer">
                                    Learn more <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Tilt>
                    </div>

                    {/* Module 2: Active Surface Defense (Small) */}
                    <div className="md:col-span-1 lg:col-span-1">
                        <Tilt rotationFactor={4} isRevese springOptions={{ stiffness: 40, damping: 30, mass: 1 }} className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-700 flex flex-col h-full hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 transition-all duration-300">
                            <div className="h-32 relative overflow-hidden flex items-center justify-center border-b border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-100/50 dark:bg-zinc-900/20">
                            </div>
                            <div className="p-5 flex flex-col flex-grow bg-zinc-100/50 dark:bg-zinc-900/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Target className="w-4 h-4 text-zinc-600 dark:text-zinc-200" />
                                    <h3 className="text-zinc-950 dark:text-white font-medium text-[15px]">Surface Defense</h3>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed flex-grow mb-2 line-clamp-3">
                                    Map your external footprint and eliminate blind spots in your cloud perimeter.
                                </p>
                            </div>
                        </Tilt>
                    </div>

                    {/* Module 3: Autonomous Discovery (Small) */}
                    <div className="md:col-span-1 lg:col-span-1">
                        <Tilt rotationFactor={4} isRevese springOptions={{ stiffness: 40, damping: 30, mass: 1 }} className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-700 flex flex-col h-full hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 transition-all duration-300">
                            <div className="h-32 relative overflow-hidden flex items-center justify-center border-b border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-100/50 dark:bg-zinc-900/20">
                            </div>
                            <div className="p-5 flex flex-col flex-grow bg-zinc-100/50 dark:bg-zinc-900/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Database className="w-4 h-4 text-zinc-600 dark:text-zinc-200" />
                                    <h3 className="text-zinc-950 dark:text-white font-medium text-[15px]">Autonomous Discovery</h3>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed flex-grow mb-2 line-clamp-3">
                                    Automatic asset tracking that discovers services as soon as they are deployed.
                                </p>
                            </div>
                        </Tilt>
                    </div>

                    {/* Module 5: Predictive Scanning (Small) */}
                    <div className="md:col-span-1 lg:col-span-1">
                        <Tilt rotationFactor={4} isRevese springOptions={{ stiffness: 40, damping: 30, mass: 1 }} className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-700 flex flex-col h-full hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 transition-all duration-300">
                            <div className="h-32 relative overflow-hidden flex items-center justify-center border-b border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-100/50 dark:bg-zinc-900/20">
                            </div>
                            <div className="p-5 flex flex-col flex-grow bg-zinc-100/50 dark:bg-zinc-900/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Scan className="w-4 h-4 text-zinc-950 dark:text-white" />
                                    <h3 className="text-zinc-950 dark:text-white font-medium text-[15px]">Predictive Scanning</h3>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed flex-grow mb-2 line-clamp-3">
                                    High-fidelity, low-noise scanning that validates vulnerabilities with evidence.
                                </p>
                            </div>
                        </Tilt>
                    </div>

                    {/* Module 6: Deep API Protection (Small) */}
                    <div className="md:col-span-1 lg:col-span-1">
                        <Tilt rotationFactor={4} isRevese springOptions={{ stiffness: 40, damping: 30, mass: 1 }} className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-700 flex flex-col h-full hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 transition-all duration-300">
                            <div className="h-32 relative overflow-hidden flex items-center justify-center border-b border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-100/50 dark:bg-zinc-900/20">
                            </div>
                            <div className="p-5 flex flex-col flex-grow bg-zinc-100/50 dark:bg-zinc-900/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Lock className="w-4 h-4 text-zinc-600 dark:text-zinc-200" />
                                    <h3 className="text-zinc-950 dark:text-white font-medium text-[15px]">API Defense</h3>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed flex-grow mb-2 line-clamp-3">
                                    Protect your entire API ecosystem with continuous schema validation and traffic analysis.
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