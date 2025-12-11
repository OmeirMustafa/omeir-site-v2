"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MOTION } from "@/config/motion";

interface HoloPanelProps {
    children: React.ReactNode;
    className?: string;
    withBrackets?: boolean;
}

export function HoloPanel({ children, className, withBrackets = true }: HoloPanelProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.995, y: 18 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={MOTION.spring}
            className={cn(
                "relative rounded-xl bg-black/40 backdrop-blur-2xl border border-cyan-400/30",
                "shadow-[0_0_40px_rgba(34,211,238,0.1)]",
                "overflow-hidden group",
                className
            )}
            style={{
                boxShadow: "0 0 40px var(--halo)",
            }}
        >
            {/* Scanline Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,194,138,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-0 animate-scanline" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Tech Brackets - Deep Green */}
            {withBrackets && (
                <>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[var(--accent-green)] opacity-60"
                    />
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.28 }}
                        className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[var(--accent-green)] opacity-60"
                    />
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.36 }}
                        className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[var(--accent-green)] opacity-60"
                    />
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.44 }}
                        className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[var(--accent-green)] opacity-60"
                    />
                </>
            )}

            {/* Hover Glow Sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

            {/* Ambient Pulse */}
            <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
}
