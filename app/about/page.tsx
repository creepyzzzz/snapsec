"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { motion } from 'framer-motion';
import { Shield, Lock, Users, Globe } from 'lucide-react';

export default function About() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black text-zinc-950 dark:text-white selection:bg-zinc-950 dark:selection:bg-white selection:text-white dark:selection:text-black">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <BackButton />
                </div>
                {/* Hero Section */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 md:mb-32">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="max-w-3xl"
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-[1.1]"
                        >
                            Securing the future of digital innovation.
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light"
                        >
                            Aether was founded on the belief that security shouldn't be a bottleneck to innovation. We're building the first autonomous application security platform to help companies move fast without breaking things.
                        </motion.p>
                    </motion.div>
                </section>

                {/* Values Grid */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 md:mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "Security First",
                                description: "We believe security is foundational, not an afterthought. Every line of code matters."
                            },
                            {
                                icon: Users,
                                title: "Customer Obsessed",
                                description: "We build for the developers and security engineers who use our tools every day."
                            },
                            {
                                icon: Lock,
                                title: "Privacy by Design",
                                description: "Your data is yours. We implement the strictest privacy controls in the industry."
                            },
                            {
                                icon: Globe,
                                title: "Global Scale",
                                description: "Built to handle the scale of the world's largest enterprises from day one."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                            >
                                <item.icon className="w-8 h-8 mb-4 text-zinc-900 dark:text-white" />
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Story Section */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 md:mb-32 bg-zinc-50 dark:bg-zinc-950/30 rounded-3xl p-8 md:p-16 border border-zinc-200 dark:border-zinc-900">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Story</h2>
                            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                <p>
                                    Started in 2024 by a team of security veterans and ethical hackers, Aether emerged from a simple observation: modern cloud environments were becoming too complex for traditional security tools to handle.
                                </p>
                                <p>
                                    We set out to build a platform that could think like an attacker but work like a defender. Our autonomous security engine identifies vulnerabilities before they can be exploited, giving teams peace of mind.
                                </p>
                                <p>
                                    Today, we protect millions of assets for forward-thinking companies around the globe, from early-stage startups to Fortune 500 enterprises.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-full min-h-[300px] bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden flex items-center justify-center">
                            {/* Placeholder for About Image/Visual */}
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 opacity-50" />
                            <div className="relative z-10 text-center p-6">
                                <span className="text-4xl md:text-5xl font-bold text-zinc-300 dark:text-zinc-700 select-none">2024</span>
                                <p className="text-zinc-400 dark:text-zinc-600 font-medium">ESTABLISHED</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section Placeholder */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-medium mb-12">Join the mission</h2>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10">
                        We're always looking for brilliant minds to help us secure the digital world.
                    </p>
                    <button className="bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-full text-base font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95">
                        View Open Positions
                    </button>
                </section>

            </main>

            <Footer />
        </div>
    );
}
