import React from 'react';
import { Settings, Brain, Zap, Edit3, ShieldCheck } from 'lucide-react';
import { BorderTrail } from '@/components/ui/border-trail';

const FeatureList: React.FC = () => {
    return (
        <section className="py-24 bg-black overflow-hidden border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">

                {/* Left Side - 3D Tunnel Effect & Text */}
                <div className="lg:w-1/3 relative">
                    <div className="sticky top-32">
                        {/* Abstract 3D Tunnel CSS simulation */}
                        <div className="absolute -left-20 top-20 w-[600px] h-[600px] pointer-events-none opacity-30">
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
                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 2L3 7v5c0 5 4 9 9 11 5-2 9-6 9-11V7l-9-5z" fill="currentColor" fillOpacity="0.1" />
                                <path d="M12 6L6 9v3c0 3 2.5 5.5 6 7 3.5-1.5 6-4 6-7V9l-6-3z" fill="currentColor" fillOpacity="0.2" />
                                <path d="M12 10l-3 1.5v1.5c0 1.5 1.25 2.75 3 3.5 1.75-.75 3-2 3-3.5v-1.5l-3-1.5z" fill="currentColor" fillOpacity="0.4" />
                            </svg>
                            <span className="font-semibold text-sm">Snapsec</span>
                        </div>

                        <h2 className="text-3xl font-medium text-white mb-2 relative z-10">Better decisions.</h2>
                        <h2 className="text-3xl font-medium text-white mb-2 relative z-10">Faster outcomes.</h2>
                        <h2 className="text-3xl font-medium text-zinc-500 mb-8 relative z-10">Not more findings.</h2>

                        <p className="text-zinc-500 text-xs leading-relaxed max-w-xs relative z-10">
                            Synapse Suite is built to run security AI in production: long-running agents with memory, sandboxed execution, and deterministic workflows you can audit.
                        </p>
                    </div>
                </div>

                {/* Right Side - Stack */}
                <div className="lg:w-2/3 flex flex-col gap-4 relative z-10">
                    {/* Card 1 */}
                    <div className="bg-zinc-900/20 border border-zinc-800 rounded-xl p-8 hover:bg-zinc-900/40 transition-colors relative">
                        <BorderTrail
                            style={{
                                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.3))',
                            }}
                            size={100}
                        />
                        <Settings className="w-5 h-5 text-zinc-400 mb-4" />
                        <h3 className="text-white font-medium mb-2">Autonomous execution</h3>
                        <p className="text-zinc-500 text-sm">Synapse Suite adapts as systems change. The model and test techniques update, and the work continues; without restarting from scratch.</p>
                    </div>

                    {/* Card 2 - Active looking */}
                    <div className="bg-zinc-900/40 border border-zinc-700 rounded-xl p-8 relative">
                        <BorderTrail
                            style={{
                                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.3))',
                            }}
                            size={100}
                        />
                        <div className="flex justify-between items-start mb-4">
                            <Brain className="w-5 h-5 text-white" />
                            <div className="flex gap-2">
                                <span className="text-xs text-zinc-400 font-medium px-2 py-1 rounded bg-zinc-800">Sign in</span>
                                <button className="text-xs text-black font-medium px-3 py-1 rounded-full bg-white hover:bg-gray-200">Request demo</button>
                            </div>
                        </div>
                        <h3 className="text-white font-medium mb-2">Security reasoning grounded in system behavior</h3>
                        <p className="text-zinc-500 text-sm">Synapse Suite models how applications authenticate, authorize, and behave from real inputs (API docs, creds, responses), then tests hypotheses like a security engineer would.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-zinc-900/20 border border-zinc-800 rounded-xl p-8 hover:bg-zinc-900/40 transition-colors relative">
                        <BorderTrail
                            style={{
                                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.3))',
                            }}
                            size={100}
                        />
                        <Zap className="w-5 h-5 text-zinc-400 mb-4" />
                        <h3 className="text-white font-medium mb-2">Persistent memory across runs</h3>
                        <p className="text-zinc-500 text-sm">Architecture decisions, prior findings, validation results, accepted risk, and outcomes persist across workflows, so new work builds on what's already known instead of repeating discovery, setup, and reasoning.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-zinc-900/20 border border-zinc-800 rounded-xl p-8 hover:bg-zinc-900/40 transition-colors relative">
                        <BorderTrail
                            style={{
                                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.3))',
                            }}
                            size={100}
                        />
                        <Edit3 className="w-5 h-5 text-zinc-400 mb-4" />
                        <h3 className="text-white font-medium mb-2">Research-informed security testing</h3>
                        <p className="text-zinc-500 text-sm">Synapse Suite incorporates current security research and emerging attack techniques into its testing and analysis, so teams evaluate systems against real, contemporary threats rather than relying on static assumptions or outdated test cases.</p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-zinc-900/20 border border-zinc-800 rounded-xl p-8 hover:bg-zinc-900/40 transition-colors relative">
                        <BorderTrail
                            style={{
                                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.3))',
                            }}
                            size={100}
                        />
                        <ShieldCheck className="w-5 h-5 text-zinc-400 mb-4" />
                        <h3 className="text-white font-medium mb-2">Output quality</h3>
                        <p className="text-zinc-500 text-sm">Actual security checks-sandboxed execution with evidence you can verify, plus execution context, repro paths, and fix guidance-not speculative output.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeatureList;