import React from 'react';
import { ArrowRight } from 'lucide-react';
import RotatingEarth from './RotatingEarth';

const StatsSection: React.FC = () => {
    return (
        <section className="py-32 bg-black text-center relative overflow-hidden">
            {/* Wireframe Globe Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                <div className="w-[800px] h-[800px] flex items-center justify-center">
                    <RotatingEarth width={800} height={800} />
                </div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4">
                <h3 className="text-lg text-white font-medium mb-1">From Open Source to Enterprise:</h3>
                <h3 className="text-lg text-zinc-400 font-normal mb-8">security velocity, autonomous control</h3>

                <p className="text-zinc-500 text-sm max-w-2xl mx-auto mb-16 leading-relaxed">
                    Our open-source heritage delivers attacker-realistic coverage at scale, finding and validating what's actually out there. Sentinel turns that momentum into governed AI security workflows, so results are consistent, repeatable, and auditable.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div>
                        <div className="text-4xl md:text-5xl font-semibold text-white mb-2">20+</div>
                        <div className="text-[10px] uppercase tracking-wider text-zinc-500">Open Source Tools</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-semibold text-white mb-2">12k+</div>
                        <div className="text-[10px] uppercase tracking-wider text-zinc-500">Nuclei Templates</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-semibold text-white mb-2">117k+</div>
                        <div className="text-[10px] uppercase tracking-wider text-zinc-500">Github Stars</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-semibold text-white mb-2">100k+</div>
                        <div className="text-[10px] uppercase tracking-wider text-zinc-500">Global Community</div>
                    </div>
                </div>

                <button className="inline-flex items-center gap-2 border border-zinc-700 px-6 py-2.5 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors bg-zinc-900/50 backdrop-blur-sm">
                    Learn more on GitHub <ArrowRight className="w-3 h-3" />
                </button>
            </div>
        </section>
    );
};

export default StatsSection;