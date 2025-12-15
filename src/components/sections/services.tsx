"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MasterPanel } from "@/components/ui/MasterPanel";
import { Database, Cpu, Eye, CheckCircle2, ArrowRight } from "lucide-react";
import { CapabilityMatrixModal } from "@/components/ui/CapabilityMatrixModal";
import Link from "next/link";

const MODULES = [
    {
        title: "ARCHITECT",
        icon: <Database className="w-8 h-8 text-[var(--accent-green)]" />,
        desc: "Strategic System Design. Blueprinting scalable digital ecosystems and data pipelines for enterprise growth.",
        details: ["System Design", "Database Schema", "Security Ops"]
    },
    {
        title: "BUILDER",
        icon: <Cpu className="w-8 h-8 text-[var(--accent-green)]" />,
        desc: "High-Velocity Engineering. Next.js 16.0.8, React Server Components, and Type-Safe production code.",
        details: ["Next.js 16.0.8", "TypeScript", "RAG Pipelines"]
    },
    {
        title: "VISIONARY",
        icon: <Eye className="w-8 h-8 text-[var(--accent-green)]" />,
        desc: "User Experience & Motion. Interactive data visualization, fluid interfaces, and reactor-grade aesthetics.",
        details: ["Framer Motion 12", "UI Systems", "Data Viz"]
    }
];

const TIERS = [
    {
        title: "TIER 1",
        name: "Brand & Strategy Blueprint",
        price: "Starting at USD 3,500+",
        desc: "A deep-dive into your brand, audience, and strategic direction.",
        features: [
            "Brand positioning",
            "Visual identity direction",
            "Website architecture plan",
            "Competitive mapping",
            "Strategic execution roadmap"
        ]
    },
    {
        title: "TIER 2",
        name: "Premium Web Architecture Build",
        price: "Starting at USD 7,500+",
        desc: "A fully custom, high-performance website engineered for trust and conversion.",
        features: [
            "Custom Next.js interface",
            "High-fidelity dark-mode design",
            "Modern motion system",
            "SEO engineering",
            "Responsive layouts",
            "Scalable site architecture"
        ]
    },
    {
        title: "TIER 3",
        name: "Intelligent Systems Integration",
        price: "Starting at USD 9,500+",
        desc: "Enhance your website with automation, structure, and intelligent systems.",
        features: [
            "Smart content systems",
            "Automated flows",
            "Operational UX improvements",
            "Component architecture",
            "Foundations for future AI adoption"
        ]
    }
];

export function ServicesSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="services" className="py-12 md:py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-12 md:space-y-24">

                {/* PART 1: OPERATING MODULES */}
                <MasterPanel title="CORE_MODULES // V.4.0">
                    <div className="text-center mb-8 md:mb-16 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[var(--text-primary)]">
                            OPERATING <span className="text-[var(--accent-green)] text-glow">MODULES</span>
                        </h2>

                        {/* Stack Integrity Subline */}
                        <div className="font-mono text-[10px] md:text-xs text-[var(--accent-green)]/60 tracking-widest uppercase max-w-4xl mx-auto py-3 px-4 border-y border-[var(--hairline)]/30 bg-[var(--bg-deep)]/50">
                            <strong>Stack Integrity:</strong> Powered by: Next.js 16.0.8, Tailwind CSS v4, Framer Motion 12<br />
                            Engineered for maximum performance, cleaner bundling, and enterprise-grade UI flow.
                        </div>

                        <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg font-light">
                            Deploying advanced capability across the entire digital stack.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative z-10">
                        {MODULES.map((mod, i) => (
                            <motion.div
                                key={mod.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="group relative p-8 rounded-xl border border-[var(--hairline)] bg-[var(--bg-deep)] hover:border-[var(--accent-green)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,160,0.15)] flex flex-col items-center text-center overflow-hidden"
                            >
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-green)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Icon Ring */}
                                <div className="mb-6 relative">
                                    <div className="w-16 h-16 rounded-full border border-[var(--hairline)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 bg-[var(--bg-deep)] z-10 relative">
                                        {mod.icon}
                                    </div>
                                    <div className="absolute inset-0 rounded-full border border-dashed border-[var(--accent-green)]/30 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 font-mono tracking-wider">{mod.title}</h3>
                                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                                    {mod.desc}
                                </p>

                                {/* Tag List */}
                                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                                    {mod.details.map(tag => (
                                        <span key={tag} className="text-[10px] font-mono uppercase px-2 py-1 rounded bg-[var(--accent-green)]/5 text-[var(--accent-green)] border border-[var(--accent-green)]/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-4 border border-green-500/30 text-green-400 font-mono text-sm tracking-widest uppercase rounded hover:bg-green-500/10 hover:border-green-500 transition-all duration-300 flex items-center gap-2 mx-auto"
                        >
                            VIEW FULL CAPABILITY MATRIX <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </MasterPanel>

                {/* PART 2: PRODUCTIZED ENGAGEMENT MODELS */}
                <MasterPanel title="ENGAGEMENT_PROTOCOLS // BLUEPRINTS">
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[var(--text-primary)]">
                            PROJECT <span className="text-[var(--accent-green)] text-glow">BLUEPRINTS</span>
                        </h2>
                        <p className="mt-4 text-[var(--text-muted)] max-w-2xl mx-auto text-lg font-light">
                            Select the engagement tier that matches your system requirements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 relative z-10">
                        {TIERS.map((tier, i) => (
                            <motion.div
                                key={tier.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.15) }}
                                className="relative flex flex-col p-8 rounded-xl border border-[var(--hairline)] transition-all duration-300 group animate-[greenBurn_3s_infinite_alternate] overflow-hidden"
                            >
                                {/* Plasma Background Layer */}
                                <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a3315] to-black bg-[length:400%_400%] animate-[plasmaFlow_15s_ease_infinite] opacity-40 z-0" />

                                <div className="relative z-10 mb-6 pb-6 border-b border-[var(--hairline)]/50">
                                    <div className="text-[var(--accent-green)] font-mono text-xs tracking-widest mb-2 opacity-70">
                                        // {tier.title}
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{tier.name}</h3>
                                    <div className="text-xl font-mono text-[var(--accent-green)]">{tier.price}</div>
                                </div>

                                <p className="relative z-10 text-[var(--text-muted)] text-sm mb-8 leading-relaxed">
                                    {tier.desc}
                                </p>

                                <ul className="relative z-10 space-y-3 mb-8 flex-1">
                                    {tier.features.map((feat) => (
                                        <li key={feat} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                                            <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="#contact" scroll={true} className="relative z-10 mt-auto">
                                    <button className="w-full py-3 px-4 bg-[var(--accent-green)]/10 text-[var(--accent-green)] border border-[var(--accent-green)]/30 hover:bg-[var(--accent-green)] hover:text-black font-mono text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(0,255,160,0.2)]">
                                        <span>INITIATE {tier.title}</span>
                                        <ArrowRight className="w-3 h-3" />
                                    </button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </MasterPanel>

            </div>

            <CapabilityMatrixModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
