"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-zinc-950 dark:text-white selection:bg-zinc-950 dark:selection:bg-white selection:text-white dark:selection:text-black">
            <Navbar />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <BackButton />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Privacy Policy</h1>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg">Last updated: February 14, 2026</p>
                    </div>

                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">1. Introduction</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                                At Snapsec ("we", "our", or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website or use our services.
                            </p>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">2. Information We Collect</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                                We collect information that you provide directly to us when you register for an account, create or modify your profile, set preferences, sign-up for newsletters, or make a purchase.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 marker:text-zinc-300 dark:marker:text-zinc-700">
                                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                                <li>Business information (Company name, job title, etc.)</li>
                                <li>Payment information (Credit card numbers, billing address)</li>
                                <li>Usage data and technical information about your device and connection</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">3. How We Use Your Information</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                                We use the information we collect to provide, maintain, and improve our services, including to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 marker:text-zinc-300 dark:marker:text-zinc-700">
                                <li>Process transactions and send related information</li>
                                <li>Send you technical notices, updates, security alerts, and support messages</li>
                                <li>Respond to your comments, questions, and requests</li>
                                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">4. Data Security</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure. Meantime, we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">5. Contact Us</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                If you have questions or comments about this policy, you may email us at privacy@snapsec.com or by post to:
                            </p>
                            <address className="mt-4 not-italic text-zinc-600 dark:text-zinc-400">
                                Snapsec, Inc.<br />
                                123 Security Way<br />
                                San Francisco, CA 94105<br />
                                United States
                            </address>
                        </section>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
