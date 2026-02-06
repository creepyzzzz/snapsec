"use client";

import React, { useState } from 'react';
import { CodeBlock, CodeBlockCode } from '@/components/ui/code-block';
import { VulnerabilityDashboard } from './visualizations/VulnerabilityDashboard';
import { AssetInventoryDashboard } from './visualizations/AssetInventoryDashboard';
import { ThreatManagementDashboard } from './visualizations/ThreatManagementDashboard';
import { VulnerabilityScanningDashboard } from './visualizations/VulnerabilityScanningDashboard';
import { ApiSecurityDashboard } from './visualizations/ApiSecurityDashboard';

import { AttackSurfaceDashboard } from './visualizations/AttackSurfaceDashboard';

const tabs = [
    "Vulnerability Management",
    "Attack Surface Management",
    "Asset Inventory Management",
    "Threat Management",
    "Vulnerability Scanning",
    "API Security"
];

const tabContent = [
    {
        title: "Vulnerability Management",
        description: "Prioritize and remediate risks across your entire stack with intelligent scoring and automated patching workflows.",
        benefits: [
            "AI-driven risk scoring based on real exploitability",
            "Automated patch generation and validation",
            "SLA tracking and remediation orchestration"
        ],
        outcome: "Vulnerability management shifts from a backlog of thousands to a streamlined remediation pipeline.",
        visual: <VulnerabilityDashboard />
    },
    {
        title: "Attack Surface Management",
        description: "Continuously map your external perimeter and identify exposed services before they become targets for attackers.",
        benefits: [
            "Discovery of shadow IT and forgotten cloud assets",
            "Real-time monitoring of port exposures and DNS changes",
            "Subsidiary and vendor perimeter analysis"
        ],
        outcome: "Maintain a complete, real-time map of every entry point into your organization.",
        visual: <AttackSurfaceDashboard />
    },
    {
        title: "Asset Inventory Management",
        description: "Maintain a real-time, comprehensive view of every service, database, and cloud resource across your organization.",
        benefits: [
            "Unified visibility across multi-cloud and on-prem",
            "Automated classification of sensitive data stores",
            "Dependency mapping and service ownership tracking"
        ],
        outcome: "Stop securing what you don't know exists. Get 100% coverage of your digital estate.",
        visual: <AssetInventoryDashboard />
    },
    {
        title: "Threat Management",
        description: "Proactively hunt and defend against advanced persistent threats with automated detection and incident response.",
        benefits: [
            "Behavioral analysis of anomalous system activity",
            "Automated containment of compromised workloads",
            "Continuous threat hunting based on latest TI"
        ],
        outcome: "Detect and neutralize threats in minutes, not months, with autonomous response agents.",
        visual: <ThreatManagementDashboard />
    },
    {
        title: "Vulnerability Scanning",
        description: "Continuous automated scanning to identify misconfigurations and known CVEs in your applications and infrastructure.",
        benefits: [
            "Dast/Sast integration within CI/CD pipelines",
            "Agentless scanning for cloud infra and buckets",
            "Validation of security controls and guardrails"
        ],
        outcome: "Catch vulnerabilities early in the dev cycle, reducing the cost of security fixes.",
        visual: <VulnerabilityScanningDashboard />
    },
    {
        title: "API Security",
        description: "Deep inspection of API traffic to discover shadow endpoints, validate auth flows, and prevent sensitive data leakage.",
        benefits: [
            "Automatic OpenAPI/Swagger doc generation",
            "Detection of BOLA and other logic vulnerabilities",
            "PII Leakage prevention in headers and bodies"
        ],
        outcome: "Secure your APIs from the inside out with continuous schema validation and traffic analysis.",
        visual: <ApiSecurityDashboard />
    }
];

const LifecycleSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const content = tabContent[activeTab];

    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h3 className="text-lg font-medium text-white mb-2">Security lifecycle, end to end</h3>
                    <p className="text-zinc-500 text-sm">Snapsec connects inventory, modeling, testing, triage, and remediation into one continuous workflow—so teams ship faster with confidence.</p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-12 border-b border-zinc-900 pb-4">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${activeTab === index
                                ? 'bg-white text-black border-white'
                                : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-700 hover:text-zinc-300'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 md:p-12 min-h-[500px] flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/3 flex flex-col justify-center">
                        <h3 className="text-2xl font-medium text-white mb-6 tracking-tight">{content.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                            {content.description}
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white text-sm font-medium mb-2 uppercase tracking-wider text-[10px]">How Snapsec Helps</h4>
                                <ul className="space-y-2">
                                    {content.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-2 text-xs text-zinc-500">
                                            <span className="text-zinc-400">•</span> {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-white text-sm font-medium mb-2 uppercase tracking-wider text-[10px]">Outcome Signal</h4>
                                <p className="text-xs text-zinc-500 leading-relaxed">
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
        </section>
    );
};

export default LifecycleSection;