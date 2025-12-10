"use client";

import React from "react";
import { Loader } from "lucide-react";
import { motion } from "framer-motion";

export function PortfolioGridHUD() {
    return (
        <div className="w-full h-[400px] rounded-xl border border-cyan-500/20 bg-[#0b0c10] relative overflow-hidden flex flex-col items-center justify-center group cursor-wait">
            {/* Hologram Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Scanline Sweep */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent translate-y-[-100%] animate-[scan_4s_ease-in-out_infinite] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-cyan-400/20 blur-xl animate-pulse" />
                    <Loader className="w-12 h-12 text-cyan-400 animate-spin relative z-10" />
                </div>

                <h3 className="text-xl font-mono font-bold text-cyan-300 tracking-wider mb-2 animate-pulse group-hover:translate-x-[2px] transition-transform">
                    SYSTEM UPGRADE IN PROGRESS...
                </h3>
                <p className="text-sm text-cyan-600 font-mono uppercase tracking-widest group-hover:text-cyan-500 transition-colors">
                    ARCHIVING CLASSIFIED PROJECTS
                </p>

                {/* Glitch Overlay Text (Hidden by default, visible on hover/glitch) */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-10 pointer-events-none mix-blend-screen animation-delay-100">
                    <h3 className="text-xl font-mono font-bold text-red-500 tracking-wider mb-2 translate-x-[-2px] blur-[1px]">
                        SYSTEM UPGRADE IN PROGRESS...
                    </h3>
                </div>
            </div>
        </div>
    );
}
