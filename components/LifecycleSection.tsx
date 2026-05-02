"use client";

import React, { useState } from 'react';
import { CodeBlock, CodeBlockCode } from '@/components/ui/code-block';
import { VulnerabilityDashboard } from './visualizations/VulnerabilityDashboard';
import { AssetInventoryDashboard } from './visualizations/AssetInventoryDashboard';
import { ThreatManagementDashboard } from './visualizations/ThreatManagementDashboard';
import { VulnerabilityScanningDashboard } from './visualizations/VulnerabilityScanningDashboard';
import { ApiSecurityDashboard } from './visualizations/ApiSecurityDashboard';
import { AttackSurfaceDashboard } from './visualizations/AttackSurfaceDashboard';
import Button from '@/components/ui/Button';

const tabs = [
    "Vulnerability Intelligence",
    "Active Surface Defense",
    "Autonomous Discovery",
    "Threat Hunting",
    "Predictive Scanning",
    "Deep API Defense"
];

const tabContent = [
    {
        title: "Vulnerability Intelligence",
        description: "Focus your team on what matters. Aether correlates vulnerability data with real-world exploitability to build a prioritized remediation roadmap.",
        benefits: [
            "Context-aware risk scoring based on actual exploitability",
            "Automatic correlation of DAST, SAST, and SCA findings",
            "Remediation prioritization centered on business impact"
        ],
        outcome: "Move from a backlog of thousands to a streamlined pipeline of critical, actionable fixes.",
        visual: <VulnerabilityDashboard />
    },
    {
        title: "Active Surface Defense",
        description: "Map your external perimeter in real-time. Identify exposed services and shadow IT before they become entry points for attackers.",
        benefits: [
            "Continuous discovery of forgotten or unauthorized cloud assets",
            "Real-time monitoring of port exposures and DNS mutations",
            "Actionable intelligence on your true attack surface"
        ],
        outcome: "Maintain a complete, living map of every potential entry point into your organization.",
        visual: <AttackSurfaceDashboard />
    },
    {
        title: "Autonomous Discovery",
        description: "You can't protect what you don't know exists. Aether provides zero-config visibility into every service and resource.",
        benefits: [
            "Unified visibility across multi-cloud and hybrid environments",
            "Automated classification of databases and sensitive storage",
            "Dependency mapping that reveals hidden service relationships"
        ],
        outcome: "Gain 100% coverage of your digital estate without the manual inventory overhead.",
        visual: <AssetInventoryDashboard />
    },
    {
        title: "Proactive Threat Hunting",
        description: "Detect sophisticated adversaries in minutes. Aether uses behavioral analysis to neutralize threats before they escalate.",
        benefits: [
            "AI-driven detection of anomalous system and user activity",
            "Automated containment of potentially compromised workloads",
            "Continuous hunting based on the latest global threat intel"
        ],
        outcome: "Neutralize threats at the point of origin with autonomous response agents.",
        visual: <ThreatManagementDashboard />
    },
    {
        title: "Predictive Scanning",
        description: "High-fidelity protection testing integrated into your dev cycle. Catch misconfigurations before they reach production.",
        benefits: [
            "Seamless CI/CD integration for proactive risk identification",
            "Agentless scanning that covers every corner of your cloud",
            "Continuous validation of protection guardrails and policies"
        ],
        outcome: "Reduce the cost of protection fixes by catching vulnerabilities early in the lifecycle.",
        visual: <VulnerabilityScanningDashboard />
    },
    {
        title: "Deep API Defense",
        description: "Protect your APIs from the inside out. Validate schema, prevent data leakage, and stop logic-based attacks in real-time.",
        benefits: [
            "Automated discovery of shadow and undocumented endpoints",
            "Real-time detection of BOLA and broken authentication flows",
            "Deep traffic analysis to prevent PII and sensitive data leaks"
        ],
        outcome: "Protect your most critical data pathways with continuous API schema validation.",
        visual: <ApiSecurityDashboard />
    }
];

const LifecycleSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const content = tabContent[activeTab];

    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h3 className="text-xl font-medium text-zinc-950 dark:text-white mb-2">Protection lifecycle, end to end</h3>
                    <p className="text-zinc-600 dark:text-zinc-500 text-base">Aether connects inventory, modeling, testing, triage, and remediation into one continuous workflow—so teams ship faster with confidence.</p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-3 mb-12 border-b border-zinc-200 dark:border-zinc-900 pb-4">
                    {tabs.map((tab, index) => {
                        if (activeTab === index) {
                            return (
                                <Button
                                    key={index}
                                    size="sm"
                                    className="!px-5 !py-2.5 !text-sm cursor-default"
                                >
                                    {tab}
                                </Button>
                            );
                        }
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border bg-transparent text-zinc-600 dark:text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md"
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="relative rounded-3xl p-1.5 md:p-2 bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
                    <div className="relative z-10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md rounded-2xl overflow-hidden p-6 md:p-12 min-h-[500px] flex flex-col md:flex-row gap-12 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)]">
                        <div className="md:w-1/3 flex flex-col justify-center">
                            <h3 className="text-3xl font-medium text-zinc-950 dark:text-white mb-6 tracking-tight">{content.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-8">
                                {content.description}
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-blue-600 dark:text-blue-400 text-base font-medium mb-2 uppercase tracking-wider text-[11px]">How Aether Helps</h4>
                                    <ul className="space-y-2">
                                        {content.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-2 text-[13px] text-zinc-600 dark:text-zinc-500">
                                                <span className="text-blue-500">•</span> {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-blue-600 dark:text-blue-400 text-base font-medium mb-2 uppercase tracking-wider text-[11px]">Outcome Signal</h4>
                                    <p className="text-[13px] text-zinc-600 dark:text-zinc-500 leading-relaxed">
                                        {content.outcome}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-2/3 h-[400px] md:h-auto flex items-center justify-center">
                            {content.visual}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LifecycleSection;