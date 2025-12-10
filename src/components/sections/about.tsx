"use client";

import React from 'react';
import { Database, Cpu, Eye } from 'lucide-react';

const modules = [
    {
        title: "The Architect",
        icon: <Database className="w-6 h-6 text-cyan-400" />,
        desc: "Translating abstract expertise into structured digital systems. Value ladders, product logic, and high-level product thinking."
    },
    {
        title: "The Builder",
        icon: <Cpu className="w-6 h-6 text-cyan-400" />,
        desc: "Next.js engineering, secure SSR, vector database design, RAG integration, and component-driven architecture."
    },
    {
        title: "The Visionary",
        icon: <Eye className="w-6 h-6 text-cyan-400" />,
        desc: "AI-native product invention: predictive workflows, intelligent dashboards, and next-generation interfaces."
    }
];

export default function ComponentArchitecture() {
    return (
        <section className="py-24 bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                        Component Architecture
                    </h2>
                    <p className="text-slate-400">My operating system consists of three core modules.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {modules.map((item, index) => (
                        <div key={index} className="group p-6 rounded-lg bg-slate-900/50 border border-cyan-500/30 hover:border-cyan-400/70 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                            <div className="mb-6 p-4 rounded-full bg-cyan-500/10 w-fit group-hover:bg-cyan-500/20 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-100 mb-3 font-mono">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
