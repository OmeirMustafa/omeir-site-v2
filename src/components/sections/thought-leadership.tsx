"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

const ARTICLES = [
    "Why Most SaaS Products Fail at Series A",
    "The Role of Architecture in Modern Product Development",
    "What Non-Technical CEOs Need to Know About AI & RAG",
    "The Dark-Mode Psychology Behind High-Trust Design",
    "The Future State Journey Map Every Company Needs"
];

export function ThoughtLeadershipSection() {
    return (
        <section className="py-24 px-6 bg-[#0c0c0c]">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                    Intelligence Briefs
                </h2>

                <div className="space-y-4">
                    {ARTICLES.map((article, idx) => (
                        <motion.a
                            key={idx}
                            href="#"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group block p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-neon-cyan/50 font-mono text-xs">0{idx + 1}</span>
                                <h3 className="text-lg md:text-xl font-medium text-white group-hover:text-neon-cyan transition-colors">
                                    {article}
                                </h3>
                            </div>
                            <ArrowRight className="text-white/20 group-hover:text-neon-cyan group-hover:translate-x-2 transition-all" size={20} />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
