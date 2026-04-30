"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, ArrowRight, Loader2 } from 'lucide-react';

export default function Contact() {
    const [activeField, setActiveField] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Message sent! (Simulation)");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black text-zinc-950 dark:text-white selection:bg-zinc-950 dark:selection:bg-white selection:text-white dark:selection:text-black">
            <Navbar />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <BackButton />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-zinc-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Get in touch</span>
                        <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-8">Let's start a conversation.</h1>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 font-light leading-relaxed">
                            Have a question about Aether? Interested in a partnership? We'd love to hear from you.
                        </p>

                        <div className="space-y-8">
                            <a href="mailto:hello@aether.security" className="flex items-start gap-4 group p-4 rounded-xl -ml-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                                <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white group-hover:scale-110 transition-transform">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Email us</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">hello@aether.security</p>
                                </div>
                            </a>

                            <div className="flex items-start gap-4 p-4 -ml-4">
                                <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Visit us</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">
                                        123 Security Way<br />
                                        San Francisco, CA 94105<br />
                                        United States
                                    </p>
                                </div>
                            </div>

                            <a href="#" className="flex items-start gap-4 group p-4 rounded-xl -ml-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                                <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white group-hover:scale-110 transition-transform">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Live Chat</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">Available Mon-Fri, 9am-5pm PST</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-zinc-50 dark:bg-zinc-900/30 p-8 md:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all"
                                    placeholder="john@company.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all appearance-none"
                                >
                                    <option>General Inquiry</option>
                                    <option>Sales</option>
                                    <option>Support</option>
                                    <option>Partnership</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-zinc-900 dark:bg-white text-white dark:text-black py-4 rounded-xl font-semibold text-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
