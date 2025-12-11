"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ReactorCoreHUDProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    tagline?: string;
    systemId?: string;
}

export function ReactorCoreHUD({
    children,
    className,
    title,
    tagline,
    systemId = "SYS_ID: #884"
}: ReactorCoreHUDProps) {
    return (
        <section className={cn("relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 py-24 px-6", className)}>

            {/* 1. THE ENVIRONMENT */}
            {/* Technical Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Reactor Glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)]" />

            {/* System Diagnostics Text - Corners */}
            <div className="absolute top-6 left-6 text-[10px] font-mono text-cyan-500/40 tracking-widest">{systemId}</div>
            <div className="absolute top-6 right-6 text-[10px] font-mono text-cyan-500/40 tracking-widest">SECURE_CHANNEL</div>
            <div className="absolute bottom-6 left-6 text-[10px] font-mono text-cyan-500/40 tracking-widest">LATENCY: 12ms</div>
            <div className="absolute bottom-6 right-6 text-[10px] font-mono text-cyan-500/40 tracking-widest">VERSION 3.2</div>

            {/* 2. THE HUD PANEL */}
            <div className="relative z-10 w-full max-w-7xl mx-auto">

                {/* Header Content (Optional) */}
                {(title || tagline) && (
                    <div className="mb-12 text-center">
                        {tagline && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/30 border border-cyan-500/20 rounded-full backdrop-blur-md mb-6">
                                <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                                    {tagline}
                                </span>
                            </div>
                        )}
                        {title && (
                            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono tracking-tight drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                {title}
                            </h2>
                        )}
                    </div>
                )}

                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] rounded-xl p-8 md:p-12 overflow-hidden">

                    {/* 3. THE DECORATIONS (Tech Corner Brackets) */}
                    {/* Top Left */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 rounded-tl-lg" />
                    {/* Top Right */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500 rounded-tr-lg" />
                    {/* Bottom Left */}
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500 rounded-bl-lg" />
                    {/* Bottom Right */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500 rounded-br-lg" />

                    {/* Content Slot */}
                    <div className="relative z-20">
                        {children}
                    </div>

                </div>
            </div>

        </section>
    );
}
