"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { MOTION, VARIANTS } from "@/config/motion";

export function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-20 overflow-hidden"
        >
            {/* 0. GLOBAL ENVIRONMENT */}
            <ParticleCanvas />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={VARIANTS.container}
                className="relative z-10 w-full max-w-4xl mx-auto flex items-center justify-center"
            >
                {/* Concentric Circles Background (The "Circle Element") */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Outer Ring */}
                    <div className="w-[600px] h-[600px] border border-[var(--accent-green)]/10 rounded-full animate-[spin_60s_linear_infinite]" />
                    {/* Middle Ring */}
                    <div className="absolute w-[450px] h-[450px] border border-dashed border-[var(--accent-green)]/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                    {/* Inner Ring */}
                    <div className="absolute w-[300px] h-[300px] border border-[var(--hairline)] rounded-full opacity-50" />
                    {/* Pulse Ring */}
                    <div className="absolute w-[500px] h-[500px] border-2 border-[var(--accent-green)]/5 rounded-full animate-pulse" />
                </div>

                {/* Centered Content */}
                <div className="relative text-center flex flex-col items-center gap-8 py-24">

                    {/* Blinking Dot (Centered Top) */}
                    <motion.div variants={VARIANTS.item} className="mb-4">
                        <div className="w-3 h-3 bg-[var(--accent-green)] rounded-full shadow-[0_0_15px_var(--accent-green)] animate-ping" />
                    </motion.div>

                    {/* Version Text */}
                    <motion.div variants={VARIANTS.item} className="text-xs font-mono text-[var(--accent-green)] tracking-[0.2em] uppercase bg-[var(--bg-deep)]/80 backdrop-blur px-3 py-1 rounded border border-[var(--hairline)]">
                        OMEIR OS v3.2
                    </motion.div>

                    {/* H1 Title */}
                    <motion.h1 variants={VARIANTS.item} className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-[var(--text-primary)] uppercase max-w-5xl">
                        DIGITAL PRODUCT & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-dim)] filter drop-shadow-[0_0_20px_var(--halo)]">
                            WEB ARCHITECT
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p variants={VARIANTS.item} className="text-lg md:text-xl text-[var(--text-muted)] max-w-3xl leading-relaxed font-light px-4 bg-[var(--bg-deep)]/60 backdrop-blur-sm rounded-xl py-2">
                        Designing premium brand systems and intelligent websites for modern businesses.<br className="hidden md:block" />
                        From strategy to execution — every build is engineered with precision, clarity, and long-term scalability.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={VARIANTS.item} className="flex flex-wrap justify-center gap-4 mt-4">
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
            </motion.div>
        </section>
    );
}
