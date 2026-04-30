"use client";

import React from 'react';
import AnnouncementBanner from '@/components/AnnouncementBanner';
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
import Logos from '@/components/Logos';
import InteractiveDitherObject from '@/components/ui/interactive-dither-object';

export default function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-zinc-950 dark:text-white selection:bg-zinc-950 dark:selection:bg-white selection:text-white dark:selection:text-black">
            <AnnouncementBanner />
            <Navbar />

            <main>
                <Hero />
                <Logos />
                <ProblemSection />
                <LifecycleSection />
                <FeatureList />
                <GuardrailsSection />

                {/* Full Cloud Inventory Strip */}
                <section className="border-t border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <h3 className="text-[22px] md:text-[28px] font-medium tracking-tight">See Aether Sentinel map your full cloud inventory.</h3>
                        <div className="h-[1px] bg-zinc-200 dark:bg-zinc-800 flex-grow mx-8 hidden md:block"></div>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <span className="text-zinc-500 text-base">Schedule a demo, today.</span>
                            <button className="bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                                Request a demo
                            </button>
                        </div>
                    </div>
                </section>

                <StatsSection />
                <Testimonials />
                <IntegrationsSection />

                {/* Pre-Footer CTA */}
                <section className="py-24 border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 dark:from-zinc-900/40 via-white dark:via-black to-white dark:to-black pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-end justify-between gap-10 bg-zinc-50/50 dark:bg-zinc-900/20 backdrop-blur-sm relative overflow-hidden">
                            {/* Interactive Dither Background Object */}
                            <InteractiveDitherObject className="z-0 opacity-60" gridSize={6} color="#52525b" />

                            <div className="max-w-2xl relative z-10">
                                <h2 className="text-[44px] md:text-[54px] font-medium tracking-tight text-zinc-950 dark:text-white mb-2">See Aether Sentinel run complex security tasks.</h2>
                                <h2 className="text-[44px] md:text-[54px] font-medium tracking-tight text-zinc-400 dark:text-zinc-500">Secure your stack.</h2>
                            </div>
                            <button className="bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors whitespace-nowrap relative z-10">
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
