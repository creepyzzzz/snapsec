"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Shield, Globe, Database, AlertTriangle, Scan, Lock, FileCode, Cloud, Server, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    title: "Vulnerability Intelligence",
    description: "Go beyond scanners. Correlate findings with real-world exploitability and business context.",
    icon: Shield
  },
  {
    title: "Active Surface Defense",
    description: "Continuously map and monitor your external perimeter for shadow IT and exposures.",
    icon: Globe
  },
  {
    title: "Autonomous Discovery",
    description: "Zero-config asset inventory that stays current as your infrastructure evolves.",
    icon: Database
  },
  {
    title: "Proactive Threat Hunting",
    description: "Detect and neutralize sophisticated attackers with behavioral analysis and TI.",
    icon: AlertTriangle
  },
  {
    title: "Predictive Scanning",
    description: "High-fidelity automated testing for web apps and APIs that eliminates false positives.",
    icon: Scan
  },
  {
    title: "Deep API Protection",
    description: "Protect your entire API ecosystem with runtime traffic analysis and schema validation.",
    icon: Lock
  }
];

const useCases = [
  {
    title: "Perimeter Defense",
    description: "Continuously monitor and protect your external cloud boundaries and shadow IT.",
    icon: Globe
  },
  {
    title: "Runtime Protection",
    description: "Active defense for live applications and API ecosystems against emerging threats.",
    icon: Shield
  },
  {
    title: "Automated Governance",
    description: "Streamline compliance audits and policy enforcement across your entire organization.",
    icon: Layers
  },
  {
    title: "DevOps Integration",
    description: "Embed high-fidelity protection directly into your development and CI/CD cycles.",
    icon: Server
  }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out border-b
        ${isScrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-blue-500/10 dark:border-blue-400/10 shadow-[0_4px_20px_-10px_rgba(37,99,235,0.15)]'
          : 'bg-transparent border-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group z-[60]">
            <div 
              className="w-6 h-6 bg-blue-600 dark:bg-blue-400 relative z-10 transition-all duration-500"
              style={{
                maskImage: 'url(/apple-touch-icon.png)',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskImage: 'url(/apple-touch-icon.png)',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
              }}
            />
            <span className="font-bold text-lg md:text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-white dark:from-blue-500 dark:to-white transition-all duration-500 uppercase">
              Aether
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu('products')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeMenu === 'products'
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 bg-transparent'
                  }`}
              >
                Products <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMenu === 'products' ? 'rotate-180 text-blue-500' : ''}`} />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-[500px] origin-top-left transition-all duration-200 ease-out ${activeMenu === 'products'
                    ? 'opacity-100 translate-y-0 scale-100 visible'
                    : 'opacity-0 -translate-y-2 scale-95 invisible'
                  }`}
              >
                <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-lg rounded-xl overflow-hidden p-2">
                  <div className="grid grid-cols-2 gap-2">
                    {products.map((item) => (
                      <Link
                        key={item.title}
                        href="#"
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors group"
                      >
                        <div className="flex-shrink-0 p-1.5 rounded-md text-zinc-500 group-hover:text-blue-600 dark:text-zinc-400 dark:group-hover:text-blue-400 bg-zinc-50 dark:bg-zinc-900/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white mb-0.5">
                            {item.title}
                          </span>
                          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveMenu('usecases')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeMenu === 'usecases'
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 bg-transparent'
                  }`}
              >
                Use Cases <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMenu === 'usecases' ? 'rotate-180 text-blue-500' : ''}`} />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-[500px] origin-top-left transition-all duration-200 ease-out ${activeMenu === 'usecases'
                    ? 'opacity-100 translate-y-0 scale-100 visible'
                    : 'opacity-0 -translate-y-2 scale-95 invisible'
                  }`}
              >
                <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-lg rounded-xl overflow-hidden p-2">
                  <div className="grid grid-cols-2 gap-2">
                    {useCases.map((item) => (
                      <Link
                        key={item.title}
                        href="#"
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors group"
                      >
                        <div className="flex-shrink-0 p-1.5 rounded-md text-zinc-500 group-hover:text-blue-600 dark:text-zinc-400 dark:group-hover:text-blue-400 bg-zinc-50 dark:bg-zinc-900/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white mb-0.5">
                            {item.title}
                          </span>
                          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="#" className="px-4 py-2 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-300 bg-transparent">
              Documentation
            </Link>
            <Link href="#" className="px-4 py-2 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-300 bg-transparent">
              Pricing
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="px-2 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 active:scale-[0.98] active:translate-y-[2px]">
              Sign in
            </button>
            <Button size="sm">Request demo</Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3 relative z-[60]">
            <button className="px-4 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 active:scale-[0.98] md:block hidden">
              Sign in
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 active:scale-90"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-white/95 dark:bg-zinc-950/98 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <div className="relative h-full flex flex-col pt-24 px-6 pb-10 overflow-y-auto">
              <div className="space-y-8">
                {/* Products Section */}
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-500 font-semibold mb-4">Products</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {products.slice(0, 4).map((item) => (
                      <Link
                        key={item.title}
                        href="#"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-4 group"
                      >
                        <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-zinc-900 dark:text-white">{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Use Cases Section */}
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-500 font-semibold mb-4">Use Cases</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {useCases.slice(0, 3).map((item) => (
                      <Link
                        key={item.title}
                        href="#"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-4"
                      >
                        <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-zinc-900 dark:text-white">{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Company Section */}
                <div>
                  <h4 className="text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-500 font-semibold mb-4">Resources</h4>
                  <div className="flex flex-col gap-4">
                    <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-zinc-900 dark:text-white">Documentation</Link>
                    <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-zinc-900 dark:text-white">Pricing</Link>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-10 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-4">
                <Button size="lg" className="w-full">Request demo</Button>
                <button className="w-full py-4 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Sign in to your account
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;