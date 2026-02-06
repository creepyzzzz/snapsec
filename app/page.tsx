"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import LifecycleSection from '@/components/LifecycleSection';
import FeatureList from '@/components/FeatureList';
import GuardrailsSection from '@/components/GuardrailsSection';
import StatsSection from '@/components/StatsSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import InteractiveDitherObject from '@/components/ui/interactive-dither-object';
import { ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
    const [isBannerVisible, setIsBannerVisible] = useState(true);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            {/* Top Banner */}
            {isBannerVisible && (
                <div className="w-full bg-zinc-900/50 border-b border-zinc-800 py-2 px-4 text-[13px] font-medium text-zinc-400 flex justify-center items-center gap-2 hover:text-white transition-colors cursor-pointer group relative">
                    <span>Modern security infrastructure breaks at scale. See the 2026 State of Autonomous Security.</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsBannerVisible(false);
                        }}
                        className="absolute right-4 p-1 hover:bg-white/10 rounded-full transition-colors text-zinc-500 hover:text-white"
                        aria-label="Close banner"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            )}

            <Navbar />

            <main>
                <Hero />
                <ProblemSection />
                <LifecycleSection />
                <FeatureList />
                <GuardrailsSection />

                {/* Full Cloud Inventory Strip */}
                <section className="border-t border-b border-zinc-800 bg-zinc-950/50 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <h3 className="text-xl md:text-2xl font-medium tracking-tight">See Synapse Suite map your full cloud inventory.</h3>
                        <div className="h-[1px] bg-zinc-800 flex-grow mx-8 hidden md:block"></div>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <span className="text-zinc-500 text-sm">Schedule a demo, today.</span>
                            <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors">
                                Request a demo
                            </button>
                        </div>
                    </div>
                </section>

                <StatsSection />
                <Testimonials />
                <IntegrationsSection />

                {/* Pre-Footer CTA */}
                <section className="py-24 border-t border-zinc-900 bg-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="border border-zinc-800 rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-end justify-between gap-10 bg-zinc-900/20 backdrop-blur-sm relative overflow-hidden">
                            {/* Interactive Dither Background Object */}
                            <InteractiveDitherObject className="z-0 opacity-60" gridSize={6} color="#52525b" />

                            <div className="max-w-2xl relative z-10">
                                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-2">See Synapse Suite run complex security tasks.</h2>
                                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-500">Secure your stack.</h2>
                            </div>
                            <button className="bg-white text-black px-8 py-3 rounded-full text-base font-semibold hover:bg-zinc-200 transition-colors whitespace-nowrap relative z-10">
                                Request a demo
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
