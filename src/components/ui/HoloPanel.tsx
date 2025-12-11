"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoloPanelProps {
    children: React.ReactNode;
    className?: string;
    withBrackets?: boolean;
}

export function HoloPanel({ children, className, withBrackets = true }: HoloPanelProps) {
    return (
        <div
            className={cn(
                "relative rounded-xl bg-black/40 backdrop-blur-2xl border border-cyan-400/30",
                "shadow-[0_0_40px_rgba(34,211,238,0.1)]",
                "overflow-hidden group",
                className
            )}
        >
            {/* Scanline Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-0" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Tech Brackets */}
            {withBrackets && (
                <>
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-400/60" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-400/60" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyan-400/60" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-400/60" />
                </>
            )}

            {/* Hover Glow Sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />
        </div>
    );
}
