"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { motion } from 'framer-motion';

export default function TermsOfService() {
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
                        <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Terms of Service</h1>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg">Last updated: February 14, 2026</p>
                    </div>

                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">1. Acceptance of Terms</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                                By accessing and using the website and services provided by Snapsec ("we", "our", or "us"), you agree to accept and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">2. Description of Service</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                                Snapsec provides a unified application security platform. We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice. We shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the service.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">3. User Account</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                                To access certain features of our service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">4. Intellectual Property</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                                The service and its original content, features, and functionality are and will remain the exclusive property of Snapsec and its licensors. The service is protected by copyright, trademark, and other laws of the United States and foreign countries.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">5. Limitation of Liability</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                In no event shall Snapsec, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">6. Governing Law</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">7. Changes to Terms</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
