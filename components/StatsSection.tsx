import React from 'react';
import { ArrowRight } from 'lucide-react';
import RotatingEarth from './RotatingEarth';

const StatsSection: React.FC = () => {
    return (
        <section className="py-32 bg-white dark:bg-black text-center relative overflow-hidden">
            {/* Wireframe Globe Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 dark:opacity-30">
                <div className="absolute inset-0 bg-blue-500/30 blur-[120px] rounded-full"></div>
                <div className="w-[800px] h-[800px] flex items-center justify-center relative z-10">
                    <RotatingEarth width={800} height={800} />
                </div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4">
                <h3 className="text-xl text-zinc-950 dark:text-white font-medium mb-1">Open Source Heritage.</h3>
                <h3 className="text-xl text-zinc-600 dark:text-zinc-400 font-normal mb-8">Enterprise-grade velocity and autonomous control.</h3>

                <p className="text-zinc-600 dark:text-zinc-500 text-base max-w-2xl mx-auto mb-16 leading-relaxed">
                    Our open-source foundation delivers industry-standard coverage at scale, identifying and validating exposures with precision. Aether Sentinel transforms this technical momentum into governed, autonomous protection workflows—ensuring every result is consistent, repeatable, and audit-ready.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div>
                        <div className="text-4xl md:text-[54px] font-semibold bg-gradient-to-br from-blue-600 to-white bg-clip-text text-transparent mb-2">20+</div>
                        <div className="text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-500">Open Source Tools</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-[54px] font-semibold bg-gradient-to-br from-blue-600 to-white bg-clip-text text-transparent mb-2">12k+</div>
                        <div className="text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-500">Nuclei Templates</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-[54px] font-semibold bg-gradient-to-br from-blue-600 to-white bg-clip-text text-transparent mb-2">117k+</div>
                        <div className="text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-500">Github Stars</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-[54px] font-semibold bg-gradient-to-br from-blue-600 to-white bg-clip-text text-transparent mb-2">100k+</div>
                        <div className="text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-500">Global Community</div>
                    </div>
                </div>

                <button className="relative group inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden 
                    bg-blue-600/90 dark:bg-blue-500/90 
                    text-white
                    border border-white/20
                    shadow-[0_4px_12px_-2px_rgba(59,130,246,0.3)]
                    backdrop-blur-md">
                    
                    {/* 3D Specular Reflection (Shine Effect) */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.6),rgba(255,255,255,0.1)_15%,transparent_25%)] pointer-events-none transition-all duration-500 group-hover:scale-110"></div>
                    
                    {/* Secondary Soft Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.15),transparent_40%)] pointer-events-none"></div>
                    
                    {/* Inner Edge Highlight */}
                    <div className="absolute inset-0 rounded-full border-t-[1.5px] border-l-[1.5px] border-white/30 pointer-events-none"></div>
                    
                    <span className="relative z-10 flex items-center gap-2">
                        Learn more on GitHub <ArrowRight className="w-4 h-4" />
                    </span>
                </button>
            </div>
        </section>
    );
};

export default StatsSection;