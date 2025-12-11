"use client";

import React from "react";
import { motion } from "framer-motion";
import { MasterPanel } from "@/components/ui/MasterPanel";
import { ArrowUpRight, Loader2 } from "lucide-react";

export function CaseStudiesSection() {
    return (
        <section id="portfolio" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <MasterPanel title="PROJECT_DB // ARCHIVES">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-[var(--text-primary)] mb-4">
                                BLUEPRINT <span className="text-[var(--accent-green)]">ARCHIVES</span>
                            </h2>
                            <p className="text-[var(--text-muted)] font-mono text-sm tracking-widest">
                                DECLASSIFIED PROJECT FILES
                            </p>
                        </div>

                        {/* Loader Ring */}
                        <div className="flex items-center gap-3 text-[var(--accent-green)] text-xs font-mono tracking-widest opacity-70">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>SYNCING DATABASE...</span>
                        </div>
                    </div>

                    {/* Content Placeholder */}
                    <div className="relative min-h-[400px] border border-dashed border-[var(--hairline)] rounded-lg flex flex-col items-center justify-center p-12 text-center bg-[var(--bg-deep)]/50">

                        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,255,160,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="bg-[var(--accent-green)]/10 border border-[var(--accent-green)] px-6 py-2 rounded-full mb-8 backdrop-blur-sm"
                        >
                            <span className="text-[var(--accent-green)] font-mono text-sm tracking-[0.2em] font-bold">
                                SYSTEM UPGRADE IN PROGRESS
                            </span>
                        </motion.div>

                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                            Recalibrating Portfolio Data
                        </h3>
                        <p className="text-[var(--text-muted)] max-w-md">
                            Detailed case studies for Enterprise RAG Systems and High-Scale SaaS Architectures are being indexed.
                        </p>

                        <div className="mt-12 grid grid-cols-2 gap-4 opacity-50">
                            <div className="h-32 w-48 bg-[var(--hairline)] rounded animate-pulse" />
                            <div className="h-32 w-48 bg-[var(--hairline)] rounded animate-pulse animation-delay-500" />
                        </div>

                    </div>

                </MasterPanel>
            </div>
        </section>
    );
}
