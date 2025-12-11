"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { TiltCard } from "@/components/ui/TiltCard";

interface QuantumCardProps {
    children: React.ReactNode;
    className?: string;
    noHover?: boolean;
}

export function QuantumCard({ children, className, noHover = false }: QuantumCardProps) {
    const Content = (
        <div className={cn("relative group h-full rounded-xl p-[1px] overflow-hidden", className)}>
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-blue-500 to-voltage-purple animate-spin-slow opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Inner Content Container */}
            <div className={cn(
                "relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl rounded-xl p-6 border border-white/5 transition-all duration-300",
                !noHover && "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            )}>
                {children}
            </div>
        </div>
    );

    if (noHover) return Content;

    return (
        <TiltCard className="h-full">
            {Content}
        </TiltCard>
    );
}
