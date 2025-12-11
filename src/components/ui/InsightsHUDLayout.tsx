"use client";

import React from "react";
import { motion } from "framer-motion";
import { HoloPanel } from "@/components/ui/HoloPanel";
import Link from "next/link";

const INSIGHTS = [
    { title: "The State of Next.js 15", slug: "state-of-nextjs-15", date: "Dec 10, 2025", readTime: "5 min" },
    { title: "Building RAG Pipelines", slug: "building-rag-pipelines", date: "Nov 28, 2025", readTime: "8 min" },
    { title: "Dark UX Principles", slug: "dark-ux-principles", date: "Nov 15, 2025", readTime: "6 min" },
];

export function InsightsHUDLayout() {
    return (
        <div className="space-y-6">
            {INSIGHTS.map((post, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                >
                    <Link href={`/insights/${post.slug}`}>
                        <HoloPanel className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all duration-300 hover:bg-cyan-950/20">
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-mono tracking-tight">{post.title}</h3>
                                <div className="flex gap-4 text-xs text-slate-400 mt-2 font-mono uppercase tracking-wider">
                                    <span>{post.date}</span>
                                    <span className="text-cyan-600">// {post.readTime} READ</span>
                                </div>
                            </div>
                            <div className="px-4 py-2 rounded bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all font-mono font-bold tracking-widest">
                                ACCESS_FILE
                            </div>
                        </HoloPanel>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
