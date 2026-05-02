import React from 'react';
import { Cloud, Github, GitBranch, Slack, Trello, Server } from 'lucide-react';

const IntegrationsSection: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h3 className="text-lg text-zinc-950 dark:text-white font-medium mb-2">Native ecosystem integrations. No architectural overhead.</h3>
          <p className="text-zinc-600 dark:text-zinc-500 text-sm">Aether Sentinel plugs into your existing infrastructure and turns fragmented signals into unified protection workflows.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cloud */}
          <div className="relative rounded-3xl p-1.5 md:p-2 bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
            <div className="relative z-10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md rounded-2xl p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] h-full">
                <h4 className="text-[11px] uppercase tracking-wider text-blue-600 dark:text-blue-500 mb-6 font-semibold">Cloud & Runtime</h4>
                <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                  <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px]"><Cloud className="w-5 h-5 text-blue-500" /> Azure</div>
                  <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px]"><Server className="w-5 h-5 text-blue-500" /> AWS</div>
                  <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px] col-span-2"><Cloud className="w-5 h-5 text-blue-500" /> Google Cloud</div>
                </div>
            </div>
          </div>

          {/* Source Control */}
          <div className="relative rounded-3xl p-1.5 md:p-2 bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
            <div className="relative z-10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md rounded-2xl p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] h-full">
                <h4 className="text-[11px] uppercase tracking-wider text-blue-600 dark:text-blue-500 mb-6 font-semibold">Source Control</h4>
                <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                  <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px]"><Github className="w-5 h-5 text-blue-500" /> GitHub</div>
                  <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px]"><GitBranch className="w-5 h-5 text-blue-500" /> GitLab</div>
                  <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px] col-span-2"><GitBranch className="w-5 h-5 text-blue-500" /> Bitbucket</div>
                </div>
            </div>
          </div>

          {/* Issue Tracking */}
          <div className="relative rounded-3xl p-1.5 md:p-2 bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
            <div className="relative z-10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md rounded-2xl p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] h-full">
                <h4 className="text-[11px] uppercase tracking-wider text-blue-600 dark:text-blue-500 mb-6 font-semibold">Issue Tracking</h4>
                <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                  <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px]"><Trello className="w-5 h-5 text-blue-500" /> Jira</div>
                  <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px]"><Server className="w-5 h-5 text-blue-500" /> Linear</div>
                  <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px] col-span-2"><Slack className="w-5 h-5 text-blue-500" /> Slack</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;