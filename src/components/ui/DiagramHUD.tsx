"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface DiagramHUDProps {
    children: React.ReactNode;
    title?: string;
    caption?: string;
    className?: string;
}

export function DiagramHUD({ children, title, caption, className }: DiagramHUDProps) {
    return (
        <div className={cn("w-full mb-12", className)}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group rounded-xl bg-black/40 border border-cyan-500/30 backdrop-blur-sm overflow-hidden"
            >
                {/* Environment Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />
                <div className="absolute inset-0 bg-scanline opacity-[0.03] pointer-events-none mix-blend-screen" />

                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors" />

                {/* Content */}
                <div className="relative z-10 p-6 md:p-10 flex flex-col items-center justify-center min-h-[300px]">
                    {title && (
                        <div className="absolute top-4 left-6 text-xs font-mono text-cyan-500 uppercase tracking-widest border border-cyan-500/30 px-2 py-1 bg-cyan-950/30 rounded">
                            {title}
                        </div>
                    )}

                    <div className="w-full max-w-3xl overflow-x-auto py-8">
                        {children}
                    </div>
                </div>
            </motion.div>

            {caption && (
                <div className="mt-3 flex items-start gap-3 text-sm text-slate-400 font-mono max-w-3xl mx-auto border-l-2 border-cyan-500/30 pl-4">
                    <span className="text-cyan-500">FIG 01.</span>
                    {caption}
                </div>
            )}
        </div>
    );
}
