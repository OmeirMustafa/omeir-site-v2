"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { HoloPanel } from "@/components/ui/HoloPanel";

export function PortfolioGridHUD() {
    return (
        <HoloPanel className="w-full h-[600px] flex flex-col items-center justify-center relative cursor-wait">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full opacity-20" />

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                {/* Spinner */}
                <div className="relative">
                    <div className="absolute inset-0 bg-cyan-400/30 blur-xl animate-pulse rounded-full" />
                    <Loader2 className="w-16 h-16 text-cyan-400 animate-spin relative z-10 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                </div>

                <div className="space-y-2">
                    <h3 className="text-3xl font-mono font-bold text-white tracking-widest uppercase">
                        SYSTEM UPGRADE IN PROGRESS
                    </h3>

                    <div className="flex items-center justify-center gap-3">
                        <div className="h-[1px] w-12 bg-cyan-500/50" />
                        <p className="text-sm text-cyan-400 font-mono uppercase tracking-[0.2em]">
                            ARCHIVING CLASSIFIED BLUEPRINTS
                        </p>
                        <div className="h-[1px] w-12 bg-cyan-500/50" />
                    </div>
                </div>

                {/* Terminal Loader Text */}
                <div className="mt-8 p-4 bg-black/60 border border-white/10 rounded font-mono text-xs text-left text-slate-400 w-64">
                    <div className="flex justify-between">
                        <span>{'>'} MIGRATING_DB...</span>
                        <span className="text-green-400">DONE</span>
                    </div>
                    <div className="flex justify-between">
                        <span>{'>'} ENCRYPTING_ASSETS...</span>
                        <span className="text-green-400">DONE</span>
                    </div>
                    <div className="flex justify-between">
                        <span>{'>'} RECOMPILING_HUD...</span>
                        <span className="animate-pulse text-cyan-400">PROCESSING</span>
                    </div>
                </div>
            </div>
        </HoloPanel>
    );
}
