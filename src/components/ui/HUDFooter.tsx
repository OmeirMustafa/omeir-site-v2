"use client";

import React from "react";
import Link from "next/link";
import { Linkedin } from "lucide-react";

export function HUDFooter() {
    return (
        <footer className="border-t border-cyan-500/20 bg-black/90 backdrop-blur-xl py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Left Side */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h4 className="text-xl font-bold font-mono text-white tracking-tight relative group cursor-default mb-2">
                        OMEIR<span className="text-cyan-400">.MUSTAFA</span>
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400/50 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-slate-400 text-sm max-w-md">
                        Digital Product Architect specializing in AI-native systems.
                    </p>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-6">
                    <Link
                        href="https://linkedin.com"
                        target="_blank"
                        className="p-3 rounded-lg bg-black/40 border border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all text-slate-400 group"
                    >
                        <Linkedin size={20} className="group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
