"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CASE_STUDIES = [
    {
        id: "infra-upgrade",
        project: "Digital Infrastructure Upgrade",
        clientType: "SaaS / Fintech / Consulting",
        problems: [
            "Outdated architecture",
            "Low credibility UX",
            "Manual workflows",
            "No AI automation"
        ],
        solutions: [
            "New Next.js architecture",
            "Dark-mode enterprise design",
            "Data layer & analytics",
            "RAG automation"
        ],
        outcome: [
            "Reduced risk",
            "Faster workflows",
            "Investor confidence",
            "Better conversion"
        ]
    }
];

export function CaseStudiesSection() {
    return (
        <section className="py-24 px-6 bg-[#0a0a0a] relative">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Operations Log
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-voltage-purple rounded-full" />
                    </div>
                    <button className="text-sm font-mono text-neon-cyan hover:underline flex items-center gap-2">
                        VIEW FULL DATABASE <ArrowUpRight size={14} />
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {CASE_STUDIES.map((study) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl overflow-hidden glass-panel border-white/5 bg-[#0c0c0c] hover:border-white/20 transition-all p-8 md:p-12"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-[120px] leading-none font-bold text-white">01</span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 relative z-10">

                                {/* Left: Info */}
                                <div>
                                    <div className="text-xs font-mono text-neon-cyan mb-2 uppercase tracking-widest">{study.clientType}</div>
                                    <h3 className="text-3xl font-bold text-white mb-8">{study.project}</h3>

                                    <div className="space-y-6">
                                        <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-lg">
                                            <span className="text-xs font-bold text-red-400 uppercase tracking-wide block mb-3">Problems Detected</span>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-white/70">
                                                {study.problems.map(p => <li key={p}>{p}</li>)}
                                            </ul>
                                        </div>

                                        <div className="bg-green-500/5 border border-green-500/10 p-5 rounded-lg">
                                            <span className="text-xs font-bold text-green-400 uppercase tracking-wide block mb-3">Protocol Executed</span>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-white/70">
                                                {study.solutions.map(s => <li key={s}>{s}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Outcome */}
                                <div className="flex flex-col justify-center">
                                    <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-xl">
                                        <h4 className="text-xl font-bold text-white mb-6">outcomes_report.json</h4>
                                        <div className="space-y-4">
                                            {study.outcome.map((out, idx) => (
                                                <div key={out} className="flex items-center gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xs font-mono border border-neon-cyan/30">
                                                        {idx + 1}
                                                    </div>
                                                    <span className="text-white/90 text-lg">{out}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
