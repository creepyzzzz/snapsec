import React from 'react';
import { Github, Twitter, Linkedin, Youtube, Disc } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10 text-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/apple-touch-icon.png" alt="Snapsec Logo" className="w-8 h-8 object-contain" />
                            <span className="font-semibold text-white tracking-tight text-lg uppercase">Snapsec</span>
                        </div>
                        <p className="text-zinc-500 mb-6 max-w-[200px] leading-relaxed">
                            Unified application security platform for modern enterprises.
                        </p>
                        <div className="flex items-center gap-4">
                            <Twitter className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer" />
                            <Linkedin className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer" />
                            <Youtube className="w-4 h-4 text-zinc-500 hover:text-white cursor-pointer" />
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-zinc-500 font-semibold mb-6 uppercase tracking-wider text-[10px]">Product</h4>
                        <ul className="space-y-4 text-zinc-300">
                            <li className="hover:text-white cursor-pointer">Vulnerability Management</li>
                            <li className="hover:text-white cursor-pointer">Attack Surface Management</li>
                            <li className="hover:text-white cursor-pointer">Asset Inventory Management</li>
                            <li className="hover:text-white cursor-pointer">Threat Management</li>
                            <li className="hover:text-white cursor-pointer">Vulnerability Scanning</li>
                            <li className="hover:text-white cursor-pointer">API Security</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-zinc-500 font-semibold mb-6 uppercase tracking-wider text-[10px]">Resources</h4>
                        <ul className="space-y-4 text-zinc-300">
                            <li className="hover:text-white cursor-pointer">Documentation</li>
                            <li className="hover:text-white cursor-pointer">Features</li>
                            <li className="hover:text-white cursor-pointer">Blog</li>
                            <li className="hover:text-white cursor-pointer">YouTube</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-zinc-500 font-semibold mb-6 uppercase tracking-wider text-[10px]">Company</h4>
                        <ul className="space-y-4 text-zinc-300">
                            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer">Terms of Service</li>
                            <li className="hover:text-white cursor-pointer">About</li>
                            <li className="hover:text-white cursor-pointer">Contact</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-zinc-600 text-[10px]">
                        ©2026 Snapsec, Inc.
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;