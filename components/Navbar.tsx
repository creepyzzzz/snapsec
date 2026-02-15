"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
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

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center gap-1 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white cursor-pointer transition-colors duration-200">
              Platform <ChevronDown className="w-3 h-3" />
            </div>
            <a href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-200">
              Solutions
            </a>
            <a href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-200">
              Resources
            </a>
            <Link href="/about" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-200">
              Company
            </Link>
            <a href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-200">
              Pricing
            </a>
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