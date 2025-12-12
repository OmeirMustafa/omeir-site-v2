"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MasterPanel } from "@/components/ui/MasterPanel";
import { InteractiveTerminal } from "@/components/ui/InteractiveTerminal";

export function SecureAISystems() {
    return (
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Wrapper */}
            <div className="max-w-7xl mx-auto relative">

                {/* Master Panel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <MasterPanel className="flex flex-col gap-12" title="SYS // SECURITY_LAYER">

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Left Column: Copy - Spanning 4 cols */}
                            <div className="lg:col-span-4 relative z-10 space-y-8 text-left">
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1] text-[var(--text-primary)] uppercase">
                                    SECURE <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-dim)]">
                                        AI SYSTEMS
                                    </span>
                                </h2>

                                <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                                    Enterprise-grade architectures built for scale, security, and precision. Deployed on your infrastructure with zero compromise.
                                </p>

                                <div className="p-4 rounded border border-[var(--hairline)] bg-[var(--bg-deep)]/50">
                                    <h4 className="text-[var(--accent-green)] font-mono text-xs tracking-widest mb-2">LIVE DEMO</h4>
                                    <p className="text-xs text-[var(--text-muted)]">
                                        Interact with the terminal to explore security protocols and architecture specs.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: Terminal - Spanning 8 cols */}
                            <div className="lg:col-span-8 relative z-10 min-h-[400px]">
                                <InteractiveTerminal />
                            </div>
                        </div>

                    </MasterPanel>
                </motion.div>

            </div>
        </section>
    );
}
