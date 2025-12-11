"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";
import { useState } from "react";
import { SmartContactModal } from "@/components/ui/SmartContactModal";

export function ContactSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-24 px-6 relative bg-[#050505] overflow-hidden border-t border-cyan-500/10 flex items-center justify-center">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
            </div>

            <div className="container mx-auto max-w-2xl relative z-10 text-center">

                {/* HUD PANEL */}
                <div className="relative rounded-xl bg-black/80 backdrop-blur-xl border border-cyan-500/40 p-8 md:p-16 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden group">

                    {/* Glow Effects */}
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_#06b6d4]" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                            NEED A PLATFORM BUILT WITH <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 shadow-cyan-500/50 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                                ENGINEERING PRECISION?
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-cyan-100/70 mb-10 font-light max-w-lg mx-auto leading-relaxed">
                            I build AI-native, enterprise-grade digital systems for consultants, operators & technical founders.
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold font-mono text-sm tracking-widest uppercase rounded hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Code size={18} /> INITIATE YOUR SYSTEM AUDIT <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </motion.div>

                    {/* Corner Brackets */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 opacity-50" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500 opacity-50" />
                    <div className="absolute top-4 right-4 text-[10px] font-mono text-cyan-500/30 uppercase tracking-widest">
                        SYS // ACTIVE
                    </div>
                </div>

            </div>

            <SmartContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
