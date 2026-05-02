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
import CTADitherObject from '@/components/ui/cta-dither-object';
import Button from '@/components/ui/Button';

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
                <section className="border-t border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 py-10 md:py-12">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 text-center md:text-left">
                        <h3 className="text-[20px] md:text-[28px] font-medium tracking-tight leading-tight">See Aether Sentinel map your full cloud inventory.</h3>
                        <div className="h-[1px] bg-zinc-200 dark:bg-zinc-800 flex-grow mx-8 hidden md:block"></div>
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                            <span className="text-zinc-500 text-sm md:text-base">Schedule a demo, today.</span>
                            <Button size="md" className="w-full sm:w-auto">Request a demo</Button>
                        </div>
                    </div>
                </section>

                <StatsSection />
                <Testimonials />
                <IntegrationsSection />

                {/* Pre-Footer CTA */}
                <section className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 dark:from-zinc-900/40 via-white dark:via-black to-white dark:to-black pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                        <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-10 md:p-20 flex flex-col md:flex-row items-center md:items-end justify-between gap-10 bg-zinc-50/50 dark:bg-zinc-900/20 backdrop-blur-sm relative overflow-hidden text-center md:text-left">
                            {/* Dedicated CTA Dither Background */}
                            <CTADitherObject className="z-0 opacity-60" gridSize={7} color="#52525b" />

                            <div className="max-w-2xl relative z-10">
                                <h2 className="text-[32px] md:text-[54px] font-medium tracking-tight text-zinc-950 dark:text-white mb-2 leading-tight">See Aether Sentinel run complex security tasks.</h2>
                                <h2 className="text-[32px] md:text-[54px] font-medium tracking-tight bg-gradient-to-br from-blue-600 to-white dark:from-blue-400 dark:to-white bg-clip-text text-transparent leading-tight">Secure your stack.</h2>
                            </div>
                            <div className="relative z-10 whitespace-nowrap w-full md:w-auto">
                                <Button size="lg" className="w-full md:w-auto">Request a demo</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
