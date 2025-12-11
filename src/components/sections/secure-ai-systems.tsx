"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { VectorDBVisual } from "@/components/ui/VectorDBVisual";

export function SecureAISystems() {
    return (
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Wrapper */}
            <div className="max-w-[980px] mx-auto relative">

                {/* Master Panel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="master-panel relative overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    {/* Inner Micro Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,194,138,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,194,138,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                    {/* SYS Label */}
                    <div className="absolute top-6 right-6 font-mono text-xs text-cyan-100/40 tracking-widest">
                        SYS // ACTIVE
                    </div>

                    {/* Corner Brackets */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--accent-green)] opacity-70" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[var(--accent-green)] opacity-70" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[var(--accent-green)] opacity-70" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--accent-green)] opacity-70" />

                    {/* Left Column: Copy */}
                    <div className="relative z-10 space-y-8 text-left">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-[var(--text-primary)] uppercase">
                            Secure <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-deep)]">
                                AI Systems
                            </span> <br />
                            for Modern Business
                        </h2>

                        <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-md">
                            Enterprise-grade architectures built for scale, security, and precision. Deployed on your infrastructure with zero compromise.
                        </p>

                        <button
                            className="group flex items-center gap-3 px-6 py-4 border border-[rgba(0,194,138,0.22)] text-[var(--accent-green)] font-mono text-sm tracking-wide hover:bg-[rgba(0,194,138,0.05)] hover:shadow-[0_0_20px_rgba(0,194,138,0.1)] transition-all uppercase"
                        >
                            <span>Initialize Audit</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative z-10 flex justify-center items-center min-h-[300px]">
                        <VectorDBVisual />
                    </div>
                </motion.div>

                {/* Reticle - Right side */}
                <div className="absolute top-1/2 -right-12 -translate-y-1/2 hidden xl:block opacity-50">
                    <div className="w-6 h-6 border border-[var(--accent-green)] rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-0.5 h-2 bg-[var(--accent-green)]" />
                        <div className="w-2 h-0.5 bg-[var(--accent-green)] absolute" />
                    </div>
                </div>
            </div>
        </section>
    );
}
