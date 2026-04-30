import React from 'react';

const GuardrailsSection: React.FC = () => {
    return (
        <section className="py-24 bg-white dark:bg-black relative">
            {/* Background Grid Accent */}
            <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="w-[800px] h-[800px] border border-zinc-200 dark:border-zinc-700 rounded-full absolute -right-64 top-1/2 -translate-y-1/2 transform rotate-12"
                    style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl font-medium text-zinc-950 dark:text-white mb-6">Engineered With Guardrails From Day One</h2>
                    <p className="text-zinc-600 dark:text-zinc-500 text-base max-w-3xl leading-relaxed">
                        Aether Sentinel runs against the same sensitive assets you're protecting—source code, configs, and protection findings—so it's engineered with privacy and defense-in-depth as a top priority. Users get granular guardrails over what Aether Sentinel can access and execute, plus audit-grade visibility into every action. This is the "hard part" of production protection AI that DIY stacks rarely get right.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Box 1 */}
                    <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 p-8 rounded-lg">
                        <h3 className="text-zinc-950 dark:text-white font-medium mb-3 text-base">Privacy-First by Design</h3>
                        <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed">
                            Aether Sentinel does not train or fine-tune on your data, and we use LLM providers under zero-retention / no-training agreements. Tenant data is isolated, with configurable retention and auto-deletion controls.
                        </p>
                    </div>

                    {/* Box 2 */}
                    <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 p-8 rounded-lg">
                        <h3 className="text-zinc-950 dark:text-white font-medium mb-3 text-base">Least-Privilege Access</h3>
                        <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed">
                            Agents only use the secrets and endpoints you explicitly grant. Credentials are injected at runtime, scoped to the task, and are not written to disk or logged. Workflow boundaries prevent accidental cross-task data access.
                        </p>
                    </div>

                    {/* Box 3 */}
                    <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 p-8 rounded-lg">
                        <h3 className="text-zinc-950 dark:text-white font-medium mb-3 text-base">Isolated Execution Sandboxes</h3>
                        <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed">
                            When Aether Sentinel needs to run commands, test payloads, or fetch URLs, it executes in isolated sandboxes. Each task spins up a fresh environment, enforces strict controls around network/system access and resource usage, captures logs and artifacts as evidence, and destroys the environment after completion.
                        </p>
                    </div>

                    {/* Box 4 */}
                    <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 p-8 rounded-lg">
                        <h3 className="text-zinc-950 dark:text-white font-medium mb-3 text-base">Audit-Grade Governance</h3>
                        <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed">
                            Enterprise features include SAML/OIDC SSO, RBAC with custom permission policies, comprehensive audit trails, and network controls (e.g., private connectivity and IP allowlisting). Dedicated infrastructure and data residency options are available for enterprise deployments, with SOC 2 Type II and Data Privacy Framework alignment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuardrailsSection;