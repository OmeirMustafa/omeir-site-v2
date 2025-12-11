"use client";

import React from "react";
import { motion } from "framer-motion";
import { MasterPanel } from "@/components/ui/MasterPanel";
import { Database, Cpu, Eye, ArrowRight } from "lucide-react";
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
        desc: "High-Velocity Engineering. Next.js 15, React Server Components, and Type-Safe production code.",
        details: ["Next.js 15", "TypeScript", "RAG Pipelines"]
    },
    {
        title: "VISIONARY",
        icon: <Eye className="w-8 h-8 text-[var(--accent-green)]" />,
        desc: "User Experience & Motion. Interactive data visualization, fluid interfaces, and reactor-grade aesthetics.",
        details: ["Framer Motion", "UI Systems", "Data Viz"]
    }
];

export function ServicesSection() {
    return (
        <section id="services" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <MasterPanel title="CORE_MODULES // V.3.1">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[var(--text-primary)]">
                            OPERATING <span className="text-[var(--accent-green)] text-glow">MODULES</span>
                        </h2>
                        <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg font-light">
                            Deploying advanced capability across the entire digital stack.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
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
                        <Link href="#contact">
                            <button className="text-[var(--accent-green)] font-mono text-sm tracking-widest uppercase hover:underline underline-offset-4 decoration-[var(--accent-green)] decoration-2">
                                VIEW FULL CAPABILITY MATRIX -&gt;
                            </button>
                        </Link>
                    </div>

                </MasterPanel>
            </div>
        </section>
    );
}
