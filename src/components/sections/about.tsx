"use client";

import React from 'react';
import { Database, Cpu, Eye } from 'lucide-react';
import { TiltCard } from "@/components/ui/TiltCard";

const modules = [
    {
        id: "MOD_01",
        title: "The Architect",
        icon: <Database className="w-6 h-6 text-cyan-400 group-hover:animate-pulse" />,
        desc: "Translating abstract expertise into structured digital systems. Value ladders, product logic, and high-level product thinking."
    },
    {
        id: "MOD_02",
        title: "The Builder",
        icon: <Cpu className="w-6 h-6 text-cyan-400 group-hover:animate-spin-slow" />,
        desc: "Next.js engineering, secure SSR, vector database design, RAG integration, and component-driven architecture."
    },
    {
        id: "MOD_03",
        title: "The Visionary",
        icon: <Eye className="w-6 h-6 text-cyan-400" />,
        desc: "AI-native product invention: predictive workflows, intelligent dashboards, and next-generation interfaces."
    }
];

export default function ComponentArchitecture() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* 1. THE ENVIRONMENT */}
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Reactor Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_60%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 relative">
                    {/* Decorative Data */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 text-[10px] font-mono text-cyan-500/30 tracking-[0.5em] uppercase hidden md:block">
                        System_Architecture_Visualization
                    </div>

                    <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-6 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                        Component <span className="text-cyan-400">Architecture</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        My operating system consists of three core modules.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {modules.map((item, index) => (
                        <TiltCard key={index} className="h-full">
                            <div className="relative h-full group p-8 rounded-lg bg-slate-900/60 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col">

                                {/* Tech Brackets */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors" />
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors" />

                                {/* Card Header */}
                                <div className="flex justify-between items-start mb-6 border-b border-cyan-500/20 pb-4">
                                    <div className="p-3 rounded bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all">
                                        {item.icon}
                                    </div>
                                    <div className="text-[10px] font-mono text-cyan-500/40 tracking-widest">{item.id}</div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3 font-mono group-hover:text-cyan-300 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed text-sm flex-grow">
                                    {item.desc}
                                </p>

                                {/* Hover Scanline */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
