"use client";

import React from "react";
import { Search, PenTool, Layout, Rocket } from "lucide-react";

const STEPS = [
    {
        icon: Search,
        title: "Discovery & Diagnosis",
        desc: "We don't guess. We audit your current position, identify friction points, and define clear success metrics before a single pixel is placed."
    },
    {
        icon: PenTool,
        title: "Strategic Definition",
        desc: "Structure precedes style. I architect the user journey, ensuring every click moves the user closer to your business goal."
    },
    {
        icon: Layout,
        title: "Visual Architecture",
        desc: "I design systems, not just pages. High-fidelity UI that communicates trust, authority, and value at a glance."
    },
    {
        icon: Rocket,
        title: "Production & Scale",
        desc: "Clean code. Fast load times. SEO optimization. I deliver a production-ready asset that performs on all devices."
    }
];

export function Approach() {
    return (
        <section id="approach" className="section-spacing bg-white">
            <div className="container-width">

                <div className="max-w-3xl mb-16">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                        My Approach
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Design that reduces risk.
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        Most projects fail because they skip the strategy. I follow a rigorous process to ensure your investment yields a return.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {STEPS.map((step, idx) => (
                        <div key={idx} className="group relative">
                            {/* Connector Line */}
                            {idx < STEPS.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-16 right-0 h-px bg-slate-100 group-hover:bg-blue-100 transition-colors" />
                            )}

                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                                <step.icon size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
