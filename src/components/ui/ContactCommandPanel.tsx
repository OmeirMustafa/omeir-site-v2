"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { SmartContactModal } from "./SmartContactModal";
import { cn } from "@/lib/utils";

export function ContactCommandPanel() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-slate-950 relative overflow-hidden py-12 px-6 rounded-xl border border-cyan-500/20 w-full max-w-4xl mx-auto">
            {/* 1. THE ENVIRONMENT */}
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Reactor Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)] pointer-events-none" />

            {/* Decorative Data */}
            <div className="absolute top-4 left-4 text-[10px] sm:text-xs font-mono text-cyan-500/40 tracking-wider">
                SECURE_CHANNEL: ENCRYPTED
            </div>
            <div className="absolute top-4 right-4 text-[10px] sm:text-xs font-mono text-cyan-500/40 tracking-wider">
                LATENCY: 12ms
            </div>
            <div className="absolute bottom-4 left-4 text-[10px] sm:text-xs font-mono text-cyan-500/40 tracking-wider">
                SYS_ID: #884-X
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] sm:text-xs font-mono text-cyan-500/40 tracking-wider">
                V.2.0.4
            </div>

            {/* 2. THE CARD (HUD Window) */}
            <div className="relative z-10 bg-slate-900/60 backdrop-blur-xl border border-cyan-500/30 p-8 md:p-16 rounded-lg text-center shadow-[0_0_30px_rgba(6,182,212,0.1)] group">

                {/* Tech Brackets */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />

                {/* 3. CONTENT */}
                <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-6 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] leading-tight">
                    Ready to upgrade your<br />
                    <span className="text-cyan-400">digital architecture?</span>
                </h2>

                <p className="text-slate-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                    Book a 30-minute strategy call to assess your product timeline, roadmap feasibility, or RAG opportunity.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="relative px-8 py-4 bg-transparent border-2 border-cyan-400 rounded hover:bg-cyan-400/10 transition-all duration-300 group/btn overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-3 text-cyan-400 tracking-widest font-bold font-mono">
                            <Calendar size={18} />
                            INITIATE MISSION
                        </span>
                        {/* Scanline Effect on Hover */}
                        <div className="absolute inset-0 bg-cyan-400/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 pointer-events-none" />
                    </button>
                </div>
            </div>

            <SmartContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
