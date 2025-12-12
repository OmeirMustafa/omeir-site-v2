"use client";

import React from "react";
import Link from "next/link";
import { Linkedin } from "lucide-react";

export function HUDFooter() {
    return (
        <footer className="relative border-t border-[rgba(0,255,160,0.1)] bg-[var(--bg-deep)] py-12 px-6 overflow-hidden">

            {/* Radial Glow Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,160,0.08),transparent_70%)] pointer-events-none" />

            {/* Grid & Scanlines (Subtle) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,160,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,160,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Left Side */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h4 className="text-xl font-bold font-mono text-[var(--text-primary)] tracking-tight relative group cursor-default mb-2 shadow-[0_0_15px_rgba(0,255,160,0.1)] rounded px-2" style={{ textShadow: "0 0 12px rgba(0,255,160,0.6)" }}>
                        OMEIR<span className="text-[#00ffa0]">.MUSTAFA</span>
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00ffa0] blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-[var(--text-muted)] text-sm max-w-lg font-light leading-relaxed">
                        Omeir Mustafa Uddin is a Digital Product & Web Architect specializing in premium brand systems and intelligent websites. Every build is engineered with strategy, precision, and long-term scalability.
                    </p>
                    <div className="mt-4 text-[10px] font-mono text-[var(--accent-green)]/40 tracking-widest uppercase">
                        SYSTEM STATUS: ONLINE
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-6">
                    <Link
                        href="https://www.linkedin.com/in/omeir-mustafa-uddin/"
                        target="_blank"
                        className="p-3 rounded-lg bg-[var(--bg-deep)] border border-[rgba(0,255,160,0.22)] hover:bg-[rgba(0,255,160,0.1)] hover:border-[#00ffa0] hover:text-[#00ffa0] hover:shadow-[0_0_18px_rgba(0,255,160,0.3)] transition-all text-[var(--text-muted)] group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00ffa0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Linkedin size={20} className="relative z-10 group-hover:drop-shadow-[0_0_5px_rgba(0,255,160,0.8)]" />
                    </Link>
                </div>
            </div>

            {/* Copyright / Version */}
            <div className="relative z-10 mt-12 text-center border-t border-[rgba(0,255,160,0.1)] pt-8">
                <p className="text-[10px] text-[var(--text-muted)] font-mono opacity-60">
                    © 2025 OMEIR MUSTAFA // OMEIR OS v3.2
                </p>
            </div>
        </footer>
    );
}
