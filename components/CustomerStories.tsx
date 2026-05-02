import React from 'react';

const CustomerStories: React.FC = () => {
    return (
        <section className="py-24 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h3 className="text-sm text-zinc-500 dark:text-zinc-400">Customer stories:</h3>
                    <h3 className="text-sm text-zinc-950 dark:text-white font-medium">Protect APIs and ship faster</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Story 1 */}
                    <div className="group relative h-[400px] rounded-3xl p-1.5 md:p-2 bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden">
                        <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] bg-white/90 dark:bg-zinc-950/80">
                            <img
                                src="https://picsum.photos/id/4/800/600"
                                alt="Office"
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-zinc-950 dark:via-zinc-950/80 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-8">
                                <p className="text-zinc-950 dark:text-white text-sm font-medium leading-relaxed mb-6">
                                    "The biggest win was speed to certainty: Sentinel surfaced real race-condition and payment-bypass scenarios with step-by-step reproduction, so we didn't have to spend days recreating timing-sensitive bugs manually."
                                </p>
                                <div>
                                    <div className="text-[10px] text-blue-600 dark:text-blue-400 font-medium">Protection Engineering Lead.</div>
                                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Application Protection Team at a global fintech organization</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Story 2 */}
                    <div className="group relative h-[400px] rounded-3xl p-1.5 md:p-2 bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden">
                        <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] bg-white/90 dark:bg-zinc-950/80">
                            <img
                                src="https://picsum.photos/id/60/800/600"
                                alt="Tech"
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:from-zinc-950 dark:via-zinc-950/80 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-8">
                                <p className="text-zinc-950 dark:text-white text-sm font-medium leading-relaxed mb-6">
                                    "The standout value was confidence at scale: Sentinel validated cross-account authorization across roles with actionable PoCs and repro steps, so App Defense kept PR reviews and new-feature testing moving."
                                </p>
                                <div>
                                    <div className="text-[10px] text-blue-600 dark:text-blue-400 font-medium">Senior Protection Engineering Manager.</div>
                                    <div className="text-[10px] text-zinc-500 dark:text-zinc-400">Application Protection Team at a leading Cryptocurrency Exchange Platform</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerStories;