"use client";

import React from "react";
import { Database, Cpu, Eye } from "lucide-react";
import { motion } from "framer-motion";

const modules = [
    {
        title: "The Architect",
        icon: <Database className="w-6 h-6 text-cyan-400" />,
        desc: "Translating abstract expertise into structured digital systems: value ladders, product logic, and strategic design."
    },
    {
        title: "The Builder",
        icon: <Cpu className="w-6 h-6 text-cyan-400" />,
        desc: "Next.js engineering, secure SSR, vector database design, RAG integration, and enterprise-grade component architecture."
    },
    {
        title: "The Visionary",
        icon: <Eye className="w-6 h-6 text-cyan-400" />,
        desc: "AI-native product invention: predictive workflows, intelligent dashboards, multi-agent interfaces, and future-forward UX."
    }
];

export function ComponentArchitecture() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
                        Component <span className="text-cyan-400">Architecture</span>
                    </h2>
                    <p className="text-slate-400">My operating system consists of three core modules.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {modules.length > 0 ? (
                        modules.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="hud-panel bg-black/40 backdrop-blur-xl border border-cyan-500/20 p-8 rounded-xl group hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300"
                            >
                                <div className="mb-6 p-4 rounded-full bg-cyan-500/10 w-fit group-hover:bg-cyan-500/20 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 font-mono">{item.title}</h3>
                                <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-3 text-center text-red-500 font-mono">
                            MODULE DATA FAILURE — RELOADING…
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
