import React from 'react';
import { Shield, Target, Database, Siren, Scan, Lock, ArrowRight } from 'lucide-react';



const ProblemSection: React.FC = () => {
    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 wireframe-grid pointer-events-none opacity-20 dark:opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-[40px] md:text-[52px] font-medium text-zinc-950 dark:text-white mb-4 tracking-tight">
                        Six modules. <span className="bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-500 dark:to-cyan-400 bg-clip-text text-transparent">One platform.</span>
                    </h2>
                    <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto">
                        Everything you need to protect your applications in one unified solution
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,1fr)] lg:auto-rows-[240px]">

                    {/* Module 1: Vulnerability Intelligence (Large Square) */}
                    <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 group">
                        <div className="relative h-full rounded-3xl p-1.5 md:p-2 bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_8px_32px_rgba(31,38,135,0.15),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
                            <div className="relative z-10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col h-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
                                <div className="relative overflow-hidden flex items-center justify-center border-transparent dark:border-transparent bg-zinc-100/50 dark:bg-zinc-900/20 flex-1 min-h-[160px] lg:min-h-[200px]">
                                </div>
                                <div className="p-5 flex flex-col shrink-0 bg-gradient-to-b from-zinc-100/50 to-blue-300 dark:from-zinc-900/20 dark:to-blue-900/20">
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
                            </div>
                        </div>
                    </div>

                    {/* Module 4: Proactive Threat Hunting (Wide Top-Right) */}
                    <div className="md:col-span-2 lg:col-span-2 lg:row-span-1 group">
                        <div className="relative h-full rounded-3xl p-1.5 md:p-2 bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_8px_32px_rgba(31,38,135,0.15),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
                            <div className="relative z-10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col h-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
                                <div className="relative overflow-hidden flex items-center justify-center border-transparent dark:border-transparent bg-zinc-100/50 dark:bg-zinc-900/20 flex-1 min-h-[120px]">
                                </div>
                                <div className="p-5 flex flex-col shrink-0 bg-gradient-to-b from-zinc-100/50 to-blue-300 dark:from-zinc-900/20 dark:to-blue-900/20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Siren className="w-4 h-4 text-zinc-950 dark:text-white" />
                                        <h3 className="text-zinc-950 dark:text-white font-medium text-lg">Proactive Threat Hunting</h3>
                                    </div>
                                    <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed flex-grow line-clamp-2">
                                        Identify sophisticated adversaries before they strike with behavioral analysis, anomaly detection, and real-time threat intelligence.
                                    </p>
                                    <div className="mt-4 flex items-center text-sm font-medium text-zinc-500 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors cursor-pointer">
                                        Learn more <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Module 2: Active Surface Defense (Tall) */}
                    <div className="md:col-span-1 lg:col-span-1 lg:row-span-2 group">
                        <div className="relative h-full rounded-3xl p-1.5 md:p-2 bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_8px_32px_rgba(31,38,135,0.15),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
                            <div className="relative z-10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col h-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
                                <div className="relative overflow-hidden flex items-center justify-center border-transparent dark:border-transparent bg-zinc-100/50 dark:bg-zinc-900/20 flex-1 min-h-[120px]">
                                </div>
                                <div className="p-5 flex flex-col shrink-0 bg-gradient-to-b from-zinc-100/50 to-blue-300 dark:from-zinc-900/20 dark:to-blue-900/20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Target className="w-4 h-4 text-zinc-600 dark:text-zinc-200" />
                                        <h3 className="text-zinc-950 dark:text-white font-medium text-[15px]">Surface Defense</h3>
                                    </div>
                                    <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed mb-2 line-clamp-3">
                                        Map your external footprint and eliminate blind spots in your cloud perimeter.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Module 3: Autonomous Discovery (Small) */}
                    <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 group">
                        <div className="relative h-full rounded-3xl p-1.5 md:p-2 bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_8px_32px_rgba(31,38,135,0.15),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
                            <div className="relative z-10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col h-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
                                <div className="relative overflow-hidden flex items-center justify-center border-transparent dark:border-transparent bg-zinc-100/50 dark:bg-zinc-900/20 flex-1 min-h-[100px]">
                                </div>
                                <div className="p-5 flex flex-col shrink-0 bg-gradient-to-b from-zinc-100/50 to-blue-300 dark:from-zinc-900/20 dark:to-blue-900/20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Database className="w-4 h-4 text-zinc-600 dark:text-zinc-200" />
                                        <h3 className="text-zinc-950 dark:text-white font-medium text-[15px]">Autonomous Discovery</h3>
                                    </div>
                                    <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed mb-2 line-clamp-3">
                                        Automatic asset tracking that discovers services as soon as they are deployed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Module 5: Predictive Scanning (Wide Bottom) */}
                    <div className="md:col-span-2 lg:col-span-2 lg:row-span-1 group">
                        <div className="relative h-full rounded-3xl p-1.5 md:p-2 bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_8px_32px_rgba(31,38,135,0.15),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
                            <div className="relative z-10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col h-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
                                <div className="relative overflow-hidden flex items-center justify-center border-transparent dark:border-transparent bg-zinc-100/50 dark:bg-zinc-900/20 flex-1 min-h-[120px]">
                                </div>
                                <div className="p-5 flex flex-col shrink-0 bg-gradient-to-b from-zinc-100/50 to-blue-300 dark:from-zinc-900/20 dark:to-blue-900/20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Scan className="w-4 h-4 text-zinc-950 dark:text-white" />
                                        <h3 className="text-zinc-950 dark:text-white font-medium text-[15px]">Predictive Scanning</h3>
                                    </div>
                                    <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed mb-2 line-clamp-2">
                                        High-fidelity, low-noise scanning that validates vulnerabilities with evidence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Module 6: Deep API Protection (Small Bottom Right) */}
                    <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 group">
                        <div className="relative h-full rounded-3xl p-1.5 md:p-2 bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_8px_32px_rgba(31,38,135,0.15),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
                            <div className="relative z-10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col h-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
                                <div className="relative overflow-hidden flex items-center justify-center border-transparent dark:border-transparent bg-zinc-100/50 dark:bg-zinc-900/20 flex-1 min-h-[100px]">
                                </div>
                                <div className="p-5 flex flex-col shrink-0 bg-gradient-to-b from-zinc-100/50 to-blue-300 dark:from-zinc-900/20 dark:to-blue-900/20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Lock className="w-4 h-4 text-zinc-600 dark:text-zinc-200" />
                                        <h3 className="text-zinc-950 dark:text-white font-medium text-[15px]">API Defense</h3>
                                    </div>
                                    <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed mb-2 line-clamp-3">
                                        Protect your entire API ecosystem with continuous schema validation and traffic analysis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProblemSection;