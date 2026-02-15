import React from 'react';
import { Cloud, Github, GitBranch, Slack, Trello, Server } from 'lucide-react';

const IntegrationsSection: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h3 className="text-lg text-zinc-950 dark:text-white font-medium mb-2">Fits into your stack on day one; No rip-and-replace</h3>
          <p className="text-zinc-600 dark:text-zinc-500 text-sm">Synapse Suite plugs into the tools you already run and turns scattered signals into workflows you can execute.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cloud */}
          <div className="bg-white dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8">
            <h4 className="text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-500 mb-6 font-semibold">Cloud & Runtime</h4>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px]"><Cloud className="w-5 h-5" /> Azure</div>
              <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px]"><Server className="w-5 h-5" /> aws</div>
              <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px] col-span-2"><Cloud className="w-5 h-5" /> Google Cloud</div>
            </div>
          </div>

          {/* Source Control */}
          <div className="bg-white dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8">
            <h4 className="text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-500 mb-6 font-semibold">Source Control</h4>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px]"><Github className="w-5 h-5" /> GitHub</div>
              <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px]"><GitBranch className="w-5 h-5" /> GitLab</div>
              <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px] col-span-2"><GitBranch className="w-5 h-5" /> Bitbucket</div>
            </div>
          </div>

          {/* Issue Tracking */}
          <div className="bg-white dark:bg-zinc-900/20 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8">
            <h4 className="text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-500 mb-6 font-semibold">Issue Tracking</h4>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px]"><Trello className="w-5 h-5" /> Jira</div>
              <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px]"><Server className="w-5 h-5" /> Linear</div>
              <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-medium text-[15px] col-span-2"><Slack className="w-5 h-5" /> slack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;