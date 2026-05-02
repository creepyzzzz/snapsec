"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

/**
 * BEST PRACTICE: Content Management
 * For a code-based approach, keeping the banner configuration in a central object
 * allows for easy updates without hunting through the TSX structure.
 * 
 * In a more advanced setup, this could be fetched from a JSON file or a CMS API.
 */
const BANNER_CONFIG = {
    id: "state-of-protection-2026", // Change this ID to show a new banner after a previous one was dismissed
    text: "Modern protection infrastructure breaks at scale. As autonomous threats evolve, traditional defenses fall short. Discover how Aether Sentinel is redefining enterprise security. See the 2026 State of Autonomous Protection.",
    link: "/reports/state-of-protection",
    isActive: true, // Master toggle to enable/disable the banner
};

const AnnouncementBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Check localStorage on mount to see if user has dismissed this specific banner
    useEffect(() => {
        if (!BANNER_CONFIG.isActive) return;

        const dismissedBannerId = localStorage.getItem('dismissed_banner_id');
        if (dismissedBannerId !== BANNER_CONFIG.id) {
            setIsVisible(true);
        }
    }, []);

    const handleDismiss = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsVisible(false);
        // Persist dismissal so it doesn't show again on refresh
        localStorage.setItem('dismissed_banner_id', BANNER_CONFIG.id);
    };

    if (!isVisible || !BANNER_CONFIG.isActive) return null;

    return (
        <div className="w-full flex justify-center pt-2 pb-1 relative z-[60] bg-white dark:bg-black">
            <div
                className="w-[95%] md:w-auto max-w-6xl bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-indigo-600/10 dark:from-blue-900/25 dark:via-blue-800/15 dark:to-indigo-900/25 backdrop-blur-2xl border border-blue-500/15 dark:border-blue-400/15 rounded-full py-1 px-4 md:px-10 text-[11px] md:text-[13px] font-medium text-zinc-700 dark:text-blue-100 flex items-center justify-center gap-3 md:gap-6 transition-all duration-500 cursor-pointer group relative overflow-hidden shadow-[0_4px_20px_-10px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_30px_-10px_rgba(37,99,235,0.25)] hover:border-blue-500/30"
                onClick={() => window.location.href = BANNER_CONFIG.link}
                role="alert"
                aria-live="polite"
            >
                {/* Premium Voxel/Pixel Texture - Clustered micro-pixels */}
                <div 
                    className="absolute inset-0 opacity-[0.15] dark:opacity-[0.3] pointer-events-none mix-blend-overlay"
                    style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='3' height='3' viewBox='0 0 3 3' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
                        backgroundSize: '3px 3px',
                        maskImage: 'radial-gradient(circle at 10% 50%, black, transparent 40%), radial-gradient(circle at 90% 50%, black, transparent 40%)',
                        WebkitMaskImage: 'radial-gradient(circle at 10% 50%, black, transparent 40%), radial-gradient(circle at 90% 50%, black, transparent 40%)'
                    }} 
                />

                {/* Subtle Animated Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                <div className="flex items-center gap-2 md:gap-3 relative z-10 flex-grow justify-center overflow-hidden">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.4)] flex-shrink-0" />
                    <span className="tracking-tight truncate max-w-[200px] sm:max-w-none">
                        <span className="hidden sm:inline">{BANNER_CONFIG.text.split("See the")[0]}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-bold sm:ml-1">See the 2026 State of Autonomous Protection.</span>
                    </span>
                    <ArrowRight className="w-3 md:w-3.5 h-3 md:h-3.5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </div>

                <div className="w-[1px] h-3 bg-blue-500/10 relative z-10 hidden md:block" />

                <button
                    onClick={handleDismiss}
                    className="p-1 hover:bg-blue-500/10 dark:hover:bg-blue-400/20 rounded-full transition-colors text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 relative z-20 flex-shrink-0"
                    aria-label="Close banner"
                >
                    <X className="w-3 md:w-3.5 h-3 md:h-3.5" />
                </button>
            </div>
        </div>
    );
};

export default AnnouncementBanner;
