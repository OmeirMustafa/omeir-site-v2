"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative min-h-[85vh] flex flex-col justify-center px-6 pt-24 bg-[#030504]">

            {/* Grid - Barely Visible foundation */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.95] mb-8">
                        I prevent expensive <br />
                        <span className="text-emerald-500">technical mistakes</span>.
                    </h1>

                    <div className="h-px w-24 bg-white/20 mb-8" />

                    <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed mb-10">
                        Principal Architecture for Founders & VC. <br />
                        I audit, structure, and govern high-performance web systems.
                    </p>

                    <div>
                        <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-200 text-black font-bold tracking-tight text-sm rounded-sm transition-colors min-w-[220px]">
                            Request Architecture Review
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
