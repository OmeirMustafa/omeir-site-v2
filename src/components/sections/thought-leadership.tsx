"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MasterPanel } from "@/components/ui/MasterPanel";
import { IntelligenceBriefModal } from "@/components/ui/IntelligenceBriefModal";

const VISUAL_MAPPING = [
    {
        title: "What makes a website feel premium?", tag: "DESIGN",
        content: "Premium websites communicate clarity, structure, and trust. They use minimal noise, strong typography, balanced space, and clear brand signals."
    },

    {
        title: "Why dark mode for modern brands?", tag: "AESTHETICS",
        content: "Dark systems signal precision, focus, and professionalism. They make content feel more intentional and reduce visual fatigue."
    },

    {
        title: "How do you turn ideas into real products?", tag: "EXECUTION",
        content: "By combining research, strategy, prototyping, and a scalable architecture built with modern frameworks like Next.js 16."
    },

    {
        title: "What defines intelligent UI motion?", tag: "INTERACTION",
        content: "Smooth micro-interactions that guide the user, reduce confusion, and improve usability without distraction."
    },

    {
        title: "How do modern businesses differentiate online?", tag: "STRATEGY",
        content: "By creating a digital identity that feels engineered, not template-based. Custom systems always outperform generic website builders."
    }
];

export function ThoughtLeadershipSection() {
    const [selectedSummary, setSelectedSummary] = useState<{ title: string; content: string } | null>(null);

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

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
                        <button
                            onClick={scrollToContact}
                            className="px-6 py-3 border border-[var(--hairline)] text-[var(--text-muted)] hover:text-[var(--accent-green)] hover:border-[var(--accent-green)] font-mono text-xs tracking-widest uppercase transition-all"
                        >
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
