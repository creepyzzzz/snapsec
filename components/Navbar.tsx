"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Shield, Globe, Database, AlertTriangle, Scan, Lock, FileCode, Cloud, Server, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const NavButton = ({ children }: { children: string }) => {
  return (
    <button
      className="bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 duration-200 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
    >
      {children}
    </button>
  )
}

const products = [
  {
    title: "Vulnerability Management",
    description: "Track, prioritize, and remediate vulnerabilities across your entire application portfolio.",
    icon: Shield
  },
  {
    title: "Attack Surface Management",
    description: "Continuously discover and monitor your external attack surface.",
    icon: Globe
  },
  {
    title: "Asset Inventory Management",
    description: "Maintain complete visibility of all digital assets with automated discovery.",
    icon: Database
  },
  {
    title: "Threat Management",
    description: "Detect, analyze, and respond to security threats with advanced intelligence.",
    icon: AlertTriangle
  },
  {
    title: "Vulnerability Scanning",
    description: "Comprehensive automated scanning for web applications, APIs, and infrastructure.",
    icon: Scan
  },
  {
    title: "API Security",
    description: "Protect your APIs with runtime protection and automated testing.",
    icon: Lock
  }
];

const useCases = [
  {
    title: "AppSec Program",
    description: "Build and scale a modern Application Security program from scratch.",
    icon: FileCode
  },
  {
    title: "Cloud Security",
    description: "Secure your cloud infrastructure across AWS, Azure, and GCP.",
    icon: Cloud
  },
  {
    title: "Compliance",
    description: "Achieve and maintain compliance with SOC2, ISO 27001, and HIPAA.",
    icon: Shield
  },
  {
    title: "DevSecOps",
    description: "Seamlessly integrate security into your CI/CD pipelines.",
    icon: Server
  }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out border-b
        ${isScrolled
          ? 'bg-white/50 dark:bg-black/50 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800/50 shadow-sm'
          : 'bg-transparent border-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <img src="/apple-touch-icon.png" alt="Snapsec Logo" className="w-full h-full object-contain invert dark:invert-0" />
            </div>
            <span className="font-semibold text-lg tracking-tight text-zinc-950 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
              Snapsec
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu('products')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeMenu === 'products'
                    ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900'
                  }`}
              >
                Products <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeMenu === 'products' ? 'rotate-180' : ''}`} />
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
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeMenu === 'usecases'
                    ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900'
                  }`}
              >
                Use Cases <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeMenu === 'usecases' ? 'rotate-180' : ''}`} />
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

            <Link href="#" className="px-4 py-2 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200">
              Features
            </Link>
            <Link href="/blog" className="px-4 py-2 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200">
              Blog
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">
              Sign in
            </button>
            <NavButton>Request demo</NavButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;