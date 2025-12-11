"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { VectorDBVisual } from "@/components/ui/VectorDBVisual";
import { MasterPanel } from "@/components/ui/MasterPanel";

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
                >
                    <MasterPanel className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" title="SYS // SECURITY_LAYER">

                        {/* Left Column: Copy */}
                        <div className="relative z-10 space-y-8 text-left">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1] text-[var(--text-primary)] uppercase">
                                SECURE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-dim)]">
                                    AI SYSTEMS
                                </span>
                            </h2>

                            <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-md">
                                Enterprise-grade architectures built for scale, security, and precision. Deployed on your infrastructure with zero compromise.
                            </p>

                            <button
                                className="group flex items-center gap-3 px-6 py-4 border border-[var(--hairline)] text-[var(--accent-green)] font-mono text-sm tracking-wide hover:bg-[var(--accent-green)]/10 hover:shadow-[0_0_20px_var(--halo)] transition-all uppercase"
                            >
                                <span>Initialize Audit</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Right Column: Visual */}
                        <div className="relative z-10 flex justify-center items-center min-h-[300px]">
                            <VectorDBVisual />
                        </div>

                    </MasterPanel>
                </motion.div>

            </div>
        </section>
    );
}
