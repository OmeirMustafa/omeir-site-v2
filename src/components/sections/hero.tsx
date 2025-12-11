"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Terminal } from "@/components/Terminal";
import { ArrowRight, ChevronRight } from "lucide-react";
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
    const moveXReverse = useTransform(springX, [-0.5, 0.5], ["15px", "-15px"]);
    const moveYReverse = useTransform(springY, [-0.5, 0.5], ["15px", "-15px"]);

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
            className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 pt-20 pb-20 overflow-hidden max-w-7xl mx-auto gap-12"
        >
            {/* 0. GLOBAL ENVIRONMENT */}
            <ParticleCanvas />

            {/* Left Column: Command Console */}
            <motion.div
                style={{ x: moveX, y: moveY }}
                variants={VARIANTS.container}
                initial="hidden"
                animate="visible"
                className="flex-1 space-y-8 flex flex-col items-start text-left z-10"
            >
                <motion.div variants={VARIANTS.item}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 border border-cyan-400/30 rounded-full backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                        </span>
                        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                            SYSTEM ONLINE
                        </span>
                    </div>
                </motion.div>

                {/* H1 with Holo Sweep Mask */}
                <motion.h1 variants={VARIANTS.item} className="relative text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white overflow-hidden p-1">
                    <span className="relative z-10">DIGITAL PRODUCT</span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 filter drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                        ARCHITECT
                    </span>

                    {/* Gradient Wipe Animation */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent skew-x-12 z-20 pointer-events-none"
                    />
                </motion.h1>

                <motion.p variants={VARIANTS.item} className="text-lg text-slate-300 max-w-xl leading-relaxed font-light">
                    I design and architect AI-native, secure digital systems using Next.js, RAG pipelines, and enterprise-grade component architecture.
                </motion.p>

                <motion.div variants={VARIANTS.item} className="flex flex-col w-full sm:w-auto gap-4">
                    <Link href="#contact" scroll={true} className="w-full sm:w-auto">
                        <button className="group relative w-full sm:w-auto px-8 py-4 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 font-bold font-mono rounded border border-cyan-400/50 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2 tracking-widest uppercase text-sm">
                                INITIATE AUDIT PROTOCOL <ArrowRight className="w-4 h-4" />
                            </span>
                            {/* Scanline sweep */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                        </button>
                    </Link>

                    <Link href="#portfolio" scroll={true} className="w-full sm:w-auto">
                        <button className="group w-full sm:w-auto px-8 py-4 bg-black/40 hover:bg-black/60 text-slate-300 font-mono rounded border border-white/10 hover:border-cyan-400/30 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                            <span className="tracking-widest uppercase text-sm">
                                VIEW BLUEPRINT ARCHIVES
                            </span>
                            <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Right Column: AI Terminal + Parallax Reverse */}
            <motion.div
                style={{ x: moveXReverse, y: moveYReverse }}
                variants={VARIANTS.item}
                initial="hidden"
                animate="visible"
                className="flex-1 w-full max-w-lg relative min-h-[400px] hidden lg:block"
            >
                <div className="absolute -inset-10 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                >
                    {/* Holographic Platform */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-cyan-500/20 blur-xl rounded-[100%]" />
                    <Terminal />
                </motion.div>
            </motion.div>
        </section>
    );
}
