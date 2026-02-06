import React from 'react';

const GuardrailsSection: React.FC = () => {
    return (
        <section className="py-24 bg-black relative">
            {/* Background Grid Accent */}
            <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="w-[800px] h-[800px] border border-zinc-700 rounded-full absolute -right-64 top-1/2 -translate-y-1/2 transform rotate-12"
                    style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16">
                    <h2 className="text-2xl font-medium text-white mb-6">Engineered With Guardrails From Day One</h2>
                    <p className="text-zinc-500 text-sm max-w-3xl leading-relaxed">
                        Synapse Suite runs against the same sensitive assets you're protecting—source code, configs, and security findings—so it's engineered with privacy and defense-in-depth as a top priority. Users get granular guardrails over what Synapse Suite can access and execute, plus audit-grade visibility into every action. This is the "hard part" of production security AI that DIY stacks rarely get right.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Box 1 */}
                    <div className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-lg">
                        <h3 className="text-white font-medium mb-3 text-sm">Privacy-first by design</h3>
                        <p className="text-zinc-500 text-xs leading-relaxed">
                            Synapse Suite does not train or fine-tune on your data, and we use LLM providers under zero-retention / no-training agreements. Tenant data is isolated, with configurable retention and auto-deletion controls.
                        </p>
                    </div>

                    {/* Box 2 */}
                    <div className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-lg">
                        <h3 className="text-white font-medium mb-3 text-sm">Least-privilege access</h3>
                        <p className="text-zinc-500 text-xs leading-relaxed">
                            Agents only use the secrets and endpoints you explicitly grant. Credentials are injected at runtime, scoped to the task, and are not written to disk or logged. Workflow boundaries prevent accidental cross-task data access.
                        </p>
                    </div>

                    {/* Box 3 */}
                    <div className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-lg">
                        <h3 className="text-white font-medium mb-3 text-sm">Isolated execution with real guardrails</h3>
                        <p className="text-zinc-500 text-xs leading-relaxed">
                            When Synapse Suite needs to run commands, test payloads, or fetch URLs, it executes in isolated sandboxes. Each task spins up a fresh environment, enforces strict controls around network/system access and resource usage, captures logs and artifacts as evidence, and destroys the environment after completion.
                        </p>
                    </div>

                    {/* Box 4 */}
                    <div className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-lg">
                        <h3 className="text-white font-medium mb-3 text-sm">Governance that holds up in audit</h3>
                        <p className="text-zinc-500 text-xs leading-relaxed">
                            Enterprise features include SAML/OIDC SSO, RBAC with custom permission policies, comprehensive audit trails, and network controls (e.g., private connectivity and IP allowlisting). Dedicated infrastructure and data residency options are available for enterprise deployments, with SOC 2 Type II and Data Privacy Framework alignment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuardrailsSection;