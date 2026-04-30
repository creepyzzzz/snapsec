import React from 'react';
import { Twitter, Linkedin, Youtube } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 pt-20 pb-10 text-sm overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/apple-touch-icon.png" alt="Aether Logo" className="w-8 h-8 object-contain invert dark:invert-0" />
                            <span className="font-semibold text-zinc-950 dark:text-white tracking-tight text-xl uppercase">Aether</span>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-500 mb-6 max-w-[200px] leading-relaxed text-sm">
                            The Intelligence Layer for Modern Application Protection.
                        </p>
                        <div className="flex items-center gap-4">
                            <Twitter className="w-4 h-4 text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
                            <Linkedin className="w-4 h-4 text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
                            <Youtube className="w-4 h-4 text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-zinc-500 dark:text-zinc-500 font-semibold mb-6 uppercase tracking-wider text-[11px]">Product</h4>
                        <ul className="space-y-4 text-zinc-800 dark:text-zinc-300">
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Vulnerability Intelligence</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Active Surface Defense</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Autonomous Discovery</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Proactive Threat Hunting</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Predictive Scanning</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Deep API Protection</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-zinc-500 dark:text-zinc-500 font-semibold mb-6 uppercase tracking-wider text-[11px]">Resources</h4>
                        <ul className="space-y-4 text-zinc-800 dark:text-zinc-300">
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Documentation</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Pricing</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Technology</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">YouTube</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-zinc-500 dark:text-zinc-500 font-semibold mb-6 uppercase tracking-wider text-[11px]">Company</h4>
                        <ul className="space-y-4 text-zinc-800 dark:text-zinc-300">
                            <li><Link href="/privacy-policy" className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Terms of Service</Link></li>
                            <li><Link href="/about" className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">About</Link></li>
                            <li><Link href="/contact" className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-zinc-200 dark:border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-zinc-500 dark:text-zinc-600 text-[11px]">
                        ©2026 Aether Protection, Inc.
                    </div>
                    <ThemeToggle />
                </div>

            </div>
        </footer>
    );
};

export default Footer;