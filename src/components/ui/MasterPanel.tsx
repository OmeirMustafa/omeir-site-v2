"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MasterPanelProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

export function MasterPanel({ children, className, title = "SYS // ACTIVE" }: MasterPanelProps) {
    return (
        <div className={cn("master-panel p-8 md:p-12 relative group", className)}>

            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t font-mono border-l border-[var(--accent-green)] opacity-80" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[var(--accent-green)] opacity-80" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[var(--accent-green)] opacity-80" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[var(--accent-green)] opacity-80" />

            {/* SYS Label */}
            <div className="absolute top-4 right-6 text-[10px] font-mono tracking-[0.2em] text-[var(--accent-green)] opacity-60 select-none">
                {title}
            </div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-[var(--accent-green)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>
    );
}
