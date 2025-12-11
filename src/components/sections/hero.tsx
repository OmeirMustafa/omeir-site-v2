"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { MasterPanel } from "@/components/ui/MasterPanel"; // Using the new Master Component
import { ArrowRight, ChevronRight, Terminal as TerminalIcon } from "lucide-react";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { MOTION, VARIANTS } from "@/config/motion";

export function HeroSection() {
    // Parallax Logic
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const moveX = useTransform(springX, [-0.5, 0.5], ["-15px", "15px"]);
    const moveY = useTransform(springY, [-0.5, 0.5], ["-15px", "15px"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height } = currentTarget.getBoundingClientRect();
        const xPct = clientX / width - 0.5;
        const yPct = clientY / height - 0.5;
        mouseX.set(xPct);
        mouseY.set(yPct);
    };

    return (
        <section
            ref={ref}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-20 overflow-hidden max-w-7xl mx-auto"
        >
            {/* 0. GLOBAL ENVIRONMENT */}
            <ParticleCanvas />

            {/* MAIN CONTENT WRAPPED IN MASTER PANEL */}
            <motion.div
                style={{ x: moveX, y: moveY }}
                variants={VARIANTS.container}
                initial="hidden"
                animate="visible"
                className="w-full max-w-5xl relative z-10"
            >
                <MasterPanel className="flex flex-col md:flex-row items-center gap-12 md:gap-24" title="MAIN_CORE // ONLINE">

                    {/* Left Column: Typography */}
                    <div className="flex-1 space-y-8 text-left">
                        {/* Status Pill */}
                        <motion.div variants={VARIANTS.item}>
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[var(--bg-deep)] border border-[var(--hairline)] rounded-full shadow-[0_0_15px_var(--halo)]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-green)]"></span>
                                </span>
                                <span className="text-xs font-mono text-[var(--accent-green)] tracking-[0.2em] uppercase">
                                    OMEIR OS v3.1
                                </span>
                            </div>
                        </motion.div>

                        {/* H1 Title */}
                        <motion.h1 variants={VARIANTS.item} className="relative text-5xl md:text-7xl font-bold tracking-tight leading-[1] text-[var(--text-primary)]">
                            DIGITAL <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-dim)] filter drop-shadow-[0_0_20px_var(--halo)]">
                                PRODUCT ARCHITECT
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p variants={VARIANTS.item} className="text-lg text-[var(--text-muted)] max-w-md leading-relaxed font-light">
                            Engineering AI-native systems with secure pipelines and enterprise-grade architecture. Precision is the only standard.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div variants={VARIANTS.item} className="flex flex-wrap gap-4">
                            <Link href="#contact" scroll={true}>
                                <button className="group relative px-8 py-4 bg-[var(--accent-green)]/5 hover:bg-[var(--accent-green)]/10 text-[var(--accent-green)] font-bold font-mono text-sm tracking-widest uppercase border border-[var(--accent-green)] hover:shadow-[0_0_30px_var(--halo)] transition-all duration-300 flex items-center gap-3">
                                    <span className="relative z-10">INITIALIZE PROTOCOL</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>

                            <Link href="#portfolio" scroll={true}>
                                <button className="group px-8 py-4 bg-transparent border border-[var(--hairline)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-green)]/50 font-mono text-sm tracking-widest uppercase transition-all duration-300">
                                    BLUEPRINT ARCHIVES
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Reticle / Visual */}
                    <motion.div variants={VARIANTS.item} className="hidden md:flex flex-col items-center justify-center relative w-64 h-64">
                        {/* Spinning Reticle Rings */}
                        <div className="absolute inset-0 border border-[var(--accent-green)]/30 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 border border-dashed border-[var(--accent-green)]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-1/4 border-2 border-[var(--accent-green)]/10 rounded-full animate-pulse" />

                        {/* Center Core */}
                        <div className="w-2 h-2 bg-[var(--accent-green)] rounded-full shadow-[0_0_20px_var(--accent-green)] animate-ping" />
                    </motion.div>

                </MasterPanel>
            </motion.div>

        </section>
    );
}
