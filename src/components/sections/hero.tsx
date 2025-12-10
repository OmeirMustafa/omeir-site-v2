"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "@/components/Terminal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, ChevronRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-24 overflow-hidden gap-12">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-voltage-purple/5 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center z-10 max-w-7xl">

                {/* Left Column: Copy */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-mono text-neon-cyan/80">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                        </span>
                        SYSTEM STATUS: ONLINE
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                        Digital Product <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-voltage-purple">
                            Architect
                        </span>
                    </h1>

                    <p className="text-lg text-white/60 max-w-xl leading-relaxed">
                        I design and architect investor-ready, AI-powered digital products using Next.js, secure SSR, component-driven design systems, and enterprise-grade dark UX.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <MagneticButton className="bg-white text-black hover:bg-gray-200 rounded-lg">
                            Book Strategy Call <ArrowRight className="w-4 h-4" />
                        </MagneticButton>

                        <MagneticButton className="bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-lg backdrop-blur-sm">
                            View Portfolio <ChevronRight className="w-4 h-4 ml-1 opacity-50" />
                        </MagneticButton>
                    </div>
                </motion.div>

                {/* Right Column: Terminal */}
                {/* Fixed min-height to prevent jumping */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                    className="relative w-full min-h-[300px]"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-voltage-purple rounded-xl blur opacity-20" />
                    <Terminal />
                </motion.div>
            </div>
        </section>
    );
}
