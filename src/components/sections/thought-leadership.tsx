"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { MasterPanel } from "@/components/ui/MasterPanel";

const ARTICLES = [
    { title: "Why Most SaaS Products Fail at Series A", tag: "STRATEGY" },
    { title: "The Role of Architecture in Modern Product Development", tag: "ENGINEERING" },
    { title: "What Non-Technical CEOs Need to Know About AI & RAG", tag: "AI SYSTEMS" },
    { title: "The Dark-Mode Psychology Behind High-Trust Design", tag: "UX DESIGN" },
    { title: "The Future State Journey Map Every Company Needs", tag: "PRODUCT" }
];

export function ThoughtLeadershipSection() {
    return (
        <section id="insights" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-5xl">
                <MasterPanel title="INTELLIGENCE // DATABASE">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[var(--text-primary)] tracking-tight">
                        INTELLIGENCE <span className="text-[var(--accent-green)] text-glow">BRIEFS</span>
                    </h2>

                    <div className="grid gap-4">
                        {ARTICLES.map((article, idx) => (
                            <motion.a
                                key={idx}
                                href="#"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative flex items-center justify-between p-6 rounded-lg border border-[var(--hairline)] bg-[var(--bg-deep)] hover:border-[var(--accent-green)] hover:bg-[var(--accent-green)]/5 transition-all duration-300"
                            >
                                <div className="flex items-center gap-6">
                                    <span className="text-[var(--accent-green)]/40 font-mono text-xs tracking-widest">
                                        0{idx + 1}
                                    </span>
                                    <div>
                                        <div className="text-[10px] text-[var(--text-muted)] font-mono mb-1 tracking-widest opacity-60">
                                            // {article.tag}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-green)] transition-colors">
                                            {article.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="w-10 h-10 rounded-full border border-[var(--hairline)] flex items-center justify-center group-hover:border-[var(--accent-green)] group-hover:shadow-[0_0_15px_var(--halo)] transition-all">
                                    <ArrowRight className="text-[var(--text-muted)] w-4 h-4 group-hover:text-[var(--accent-green)] group-hover:-rotate-45 transition-all duration-300" />
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button className="px-6 py-3 border border-[var(--hairline)] text-[var(--text-muted)] hover:text-[var(--accent-green)] hover:border-[var(--accent-green)] font-mono text-xs tracking-widest uppercase transition-all">
                            ACCESS FULL DATABASE
                        </button>
                    </div>
                </MasterPanel>
            </div>
        </section>
    );
}
