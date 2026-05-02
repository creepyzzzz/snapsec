import React from 'react';

const GuardrailsSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white dark:bg-black relative">
            {/* Background Grid Accent */}
            <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden opacity-10 dark:opacity-20 pointer-events-none">
                <div className="w-[800px] h-[800px] border border-blue-500/30 rounded-full absolute -right-64 top-1/2 -translate-y-1/2 transform rotate-12 text-blue-500"
                    style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-medium text-zinc-950 dark:text-white mb-4 md:mb-6 leading-tight">Engineered With Guardrails From Day One</h2>
                    <p className="text-zinc-600 dark:text-zinc-500 text-sm md:text-base max-w-3xl leading-relaxed">
                        Aether Sentinel runs against the same sensitive assets you're protecting—source code, configs, and protection findings—so it's engineered with privacy and defense-in-depth as a top priority.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Box 1 */}
                    <div className="relative rounded-3xl p-1.5 md:p-2 bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
                        <div className="relative z-10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md rounded-2xl overflow-hidden p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] h-full">
                            <h3 className="text-zinc-950 dark:text-white font-medium mb-3 text-base">Privacy-First by Design</h3>
                            <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed">
                                Aether Sentinel does not train or fine-tune on your data, and we use LLM providers under zero-retention / no-training agreements. Tenant data is isolated, with configurable retention and auto-deletion controls.
                            </p>
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div className="relative rounded-3xl p-1.5 md:p-2 bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
                        <div className="relative z-10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md rounded-2xl overflow-hidden p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] h-full">
                            <h3 className="text-zinc-950 dark:text-white font-medium mb-3 text-base">Least-Privilege Access</h3>
                            <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed">
                                Agents only use the secrets and endpoints you explicitly grant. Credentials are injected at runtime, scoped to the task, and are not written to disk or logged. Workflow boundaries prevent accidental cross-task data access.
                            </p>
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div className="relative rounded-3xl p-1.5 md:p-2 bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
                        <div className="relative z-10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md rounded-2xl overflow-hidden p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] h-full">
                            <h3 className="text-zinc-950 dark:text-white font-medium mb-3 text-base">Isolated Execution Sandboxes</h3>
                            <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed">
                                When Aether Sentinel needs to run commands, test payloads, or fetch URLs, it executes in isolated sandboxes. Each task spins up a fresh environment, enforces strict controls around network/system access and resource usage, captures logs and artifacts as evidence, and destroys the environment after completion.
                            </p>
                        </div>
                    </div>

                    {/* Box 4 */}
                    <div className="relative rounded-3xl p-1.5 md:p-2 bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
                        <div className="relative z-10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md rounded-2xl overflow-hidden p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] h-full">
                            <h3 className="text-zinc-950 dark:text-white font-medium mb-3 text-base">Audit-Grade Governance</h3>
                            <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed">
                                Enterprise features include SAML/OIDC SSO, RBAC with custom permission policies, comprehensive audit trails, and network controls (e.g., private connectivity and IP allowlisting). Dedicated infrastructure and data residency options are available for enterprise deployments, with SOC 2 Type II and Data Privacy Framework alignment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuardrailsSection;