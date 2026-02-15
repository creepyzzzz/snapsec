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
    id: "state-of-security-2026", // Change this ID to show a new banner after a previous one was dismissed
    text: "Modern security infrastructure breaks at scale. See the 2026 State of Autonomous Security.",
    link: "/reports/state-of-security",
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
        <div
            className="w-full bg-zinc-100 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800 py-2 px-4 text-[14px] font-medium text-zinc-600 dark:text-zinc-400 flex justify-center items-center gap-2 hover:text-black dark:hover:text-white transition-colors cursor-pointer group relative"
            onClick={() => window.location.href = BANNER_CONFIG.link}
            role="alert"
            aria-live="polite"
        >
            <div className="flex items-center gap-2 max-w-[90%] text-center">
                <span>{BANNER_CONFIG.text}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
            </div>

            <button
                onClick={handleDismiss}
                className="absolute right-4 p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors text-zinc-500 hover:text-black dark:hover:text-white"
                aria-label="Close banner"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};

export default AnnouncementBanner;
