"use client";

import React from "react";
import { motion } from "framer-motion";
import { QuantumCard } from "@/components/ui/QuantumCard";
import { Code2, PenTool, Rocket } from "lucide-react";

export function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center items-center py-24 px-6 relative overflow-hidden bg-black">
            {/* Background Context */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-voltage-purple">
                            Core Architecture
                        </span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                        I operate at the intersection of technical engineering and product strategy.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <QuantumCard className="h-full">
                            <div className="mb-4 w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                                <Code2 className="text-neon-cyan w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">The Architect</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                Designing scalable, secure, and high-performance system architectures. Specializing in Next.js ecosystems and server-less infrastructure.
                            </p>
                        </QuantumCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <QuantumCard className="h-full">
                            <div className="mb-4 w-12 h-12 rounded-lg bg-voltage-purple/10 flex items-center justify-center">
                                <Rocket className="text-voltage-purple w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">The Builder</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                Rapid prototyping and mvp development. Transforming abstract requirements into functional, deployed software in record time.
                            </p>
                        </QuantumCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <QuantumCard className="h-full">
                            <div className="mb-4 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                <PenTool className="text-blue-500 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">The Visionary</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                Bridging the gap between code and business goals. Focusing on ROI, user retention, and long-term product viability.
                            </p>
                        </QuantumCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
