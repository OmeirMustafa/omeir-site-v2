"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MasterPanel } from "@/components/ui/MasterPanel";
import { IntelligenceBriefModal } from "@/components/ui/IntelligenceBriefModal";

const VISUAL_MAPPING = [
    {
        title: "Why Most SaaS Products Fail at Series A", tag: "STRATEGY",
        content: "Startups often fail at Series A not because of poor engineering, but due to a mismatch between product velocity and architectural scalability. Founders accumulate technical debt in the MVP phase that becomes paralyzing when user growth demands reliability. \n\nThe solution is 'Just-in-Time Architecture'—building modular systems that can digest scale without needing a total rewrite. This bridge between MVP chaos and Series A structure is where Technical Product Architecture provides the highest ROI."
    },

    {
        title: "The Role of Architecture in Modern Product Development", tag: "ENGINEERING",
        content: "Architecture is no longer just about database schemas; it's about the flow of data value. Modern product development requires architects who understand 'Inference Economics'—how to build systems where AI costs don’t scale linearly with users.\n\nBy decoupling the frontend from the backend using edge-ready frameworks like Next.js, and implementing intelligent caching layers, we create products that feel instant and cost significantly less to run at scale."
    },

    {
        title: "What Non-Technical CEOs Need to Know About AI & RAG", tag: "AI SYSTEMS",
        content: "RAG (Retrieval Augmented Generation) is the only viable path for enterprise AI today because it solves the hallucination problem. Unlike a raw chatbot, RAG 'reads' your company's live data before answering.\n\nFor CEOs, this means your IP is safe. You aren't training a public model; you are simply indexing your own files into a secure vault (Vector DB) and asking an LLM to summarize them. It is secure, private, and highly accurate."
    },

    {
        title: "The Dark-Mode Psychology Behind High-Trust Design", tag: "UX DESIGN",
        content: "Dark mode isn't just an aesthetic choice; it's a trust signal in developer tools and crypto. It reduces eye strain during long session times, which is critical for complex dashboards.\n\nMore importantly, deep charcoal and obsidian palettes (like #040506) combined with neon accents create a 'Terminal Aesthetic' that subconsciously signals precision and engineering rigor to technical buyers."
    },

    {
        title: "The Future State Journey Map Every Company Needs", tag: "PRODUCT",
        content: "Most roadmaps fail because they are feature lists, not state transitions. A Future State Journey Map defines where the data lives today versus where it needs to live tomorrow.\n\nIt forces you to answer hard questions: 'When we hit 10k users, does our manual onboarding break?' Mapping this out reveals the necessary architectural breakpoints before they become emergencies."
    }
];

export function ThoughtLeadershipSection() {
    const [selectedSummary, setSelectedSummary] = useState<{ title: string; content: string } | null>(null);

    return (
        <section id="insights" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-5xl">
                <MasterPanel title="INTELLIGENCE // DATABASE">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[var(--text-primary)] tracking-tight">
                        INTELLIGENCE <span className="text-[var(--accent-green)] text-glow">BRIEFS</span>
                    </h2>

                    <div className="grid gap-4">
                        {VISUAL_MAPPING.map((article, idx) => (
                            <motion.button
                                key={idx}
                                onClick={() => setSelectedSummary({ title: article.title, content: article.content })}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group w-full text-left relative flex items-center justify-between p-6 rounded-lg border border-[var(--hairline)] bg-[var(--bg-deep)] hover:border-[var(--accent-green)] hover:bg-[var(--accent-green)]/5 transition-all duration-300"
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
                            </motion.button>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button className="px-6 py-3 border border-[var(--hairline)] text-[var(--text-muted)] hover:text-[var(--accent-green)] hover:border-[var(--accent-green)] font-mono text-xs tracking-widest uppercase transition-all">
                            ACCESS FULL DATABASE
                        </button>
                    </div>
                </MasterPanel>
            </div>

            <IntelligenceBriefModal
                isOpen={!!selectedSummary}
                onClose={() => setSelectedSummary(null)}
                data={selectedSummary || { title: "", content: "" }}
            />
        </section>
    );
}
