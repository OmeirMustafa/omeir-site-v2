"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const MODELS = [
    {
        title: "Strategic Audit",
        scope: "Fixed Price",
        desc: "Surgical review of codebase & deployment pipeline.",
        output: "Risk Assessment, Remediation Roadmap",
        cta: "Request Audit"
    },
    {
        title: "Build Sprint",
        scope: "Project Basis",
        desc: "Interim Architect for MVP / v2.0 foundation.",
        output: "Production Architecture, Security Hardening",
        cta: "Start Build"
    },
    {
        title: "Fractional Retainer",
        scope: "Monthly",
        desc: "Ongoing technical leadership & team governance.",
        output: "Roadmap Ownership, Vendor Management",
        cta: "Discuss Retainer"
    }
];

export function EngagementModels() {
    return (
        <section id="engagement" className="py-32 px-6 bg-[#030504]">
            <div className="max-w-7xl mx-auto">

                <div className="mb-12 border-b border-white/10 pb-6">
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                        Engagement Protocols
                    </h2>
                </div>

                <div className="grid grid-cols-1">
                    {MODELS.map((model, idx) => (
                        <div
                            key={idx}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-white/5 items-baseline hover:bg-white/[0.02] transition-colors"
                        >
                            {/* Title */}
                            <div className="md:col-span-3">
                                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                                    {model.title}
                                </h3>
                                <div className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">
                                    {model.scope}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="md:col-span-4">
                                <p className="text-sm text-slate-400 font-light leading-relaxed">
                                    {model.desc}
                                </p>
                            </div>

                            {/* Output/Deliverables */}
                            <div className="md:col-span-3">
                                <span className="text-xs text-slate-500 block mb-1 font-mono uppercase">Key Deliverables</span>
                                <span className="text-sm text-slate-300">{model.output}</span>
                            </div>

                            {/* Action */}
                            <div className="md:col-span-2 flex justify-end">
                                <Link
                                    href="#contact"
                                    className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                                >
                                    {model.cta} <ArrowUpRight size={14} className="text-emerald-500" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
