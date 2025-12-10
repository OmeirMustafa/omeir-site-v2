"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, ShieldCheck } from "lucide-react";
import { QuantumCard } from "@/components/ui/QuantumCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICES = [
    {
        id: "starter",
        tier: "Diagnostic",
        title: "Founder Diagnostic Audit",
        price: "$249",
        bestFor: "Solo founders, Pre-Seed",
        features: ["48-Hour Code Check", "UX Friction Report", "Tech Debt Map"],
        isSpecial: true
    },
    {
        id: "audit",
        tier: "Entry",
        title: "Technical Audit",
        price: "$3.5k+",
        bestFor: "SaaS founders",
        features: ["Codebase Assessment", "Architecture Risk", "Priority Roadmap"]
    },
    {
        id: "sprint",
        tier: "Core",
        title: "Build Sprint",
        price: "$15k+",
        bestFor: "Teams shipping fast",
        features: ["Next.js Architecture", "UI/UX Systems", "Secure SSR Flows"]
    },
    {
        id: "retainer",
        tier: "Retainer",
        title: "Fractional CPO",
        price: "$6k/mo",
        bestFor: "Scale-ups",
        features: ["Strategy Ownership", "Vendor Oversight", "Tech Hiring"]
    }
];

export function ServicesSection() {
    return (
        <section id="services" className="min-h-screen flex flex-col justify-center items-center py-12 px-4 bg-[#0c0c0c] border-t border-white/5 relative overflow-hidden">

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full z-10">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-voltage-purple">
                            Value Ladder
                        </span>
                    </h2>
                    <p className="text-white/60 text-sm md:text-base">
                        From technical due diligence to full-scale architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <QuantumCard className="h-full p-5 flex flex-col">
                                {service.isSpecial && (
                                    <div className="absolute top-0 right-0 px-2 py-0.5 bg-amber-500 text-black text-[9px] font-bold uppercase rounded-bl-lg flex items-center gap-1 z-20">
                                        <Zap size={10} fill="currentColor" /> LIMITED
                                    </div>
                                )}

                                <div className="mb-4">
                                    <span className={cn("text-[10px] font-mono uppercase tracking-wider mb-1 block font-bold", service.isSpecial ? "text-amber-500" : "text-neon-cyan")}>
                                        {service.tier}
                                    </span>
                                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{service.title}</h3>
                                    <div className="text-2xl font-light text-white">{service.price}</div>
                                    <div className="text-[10px] text-white/40 mb-3">Best for: {service.bestFor}</div>
                                </div>

                                <div className="space-y-2 mb-6 flex-grow">
                                    {service.features.map((item) => (
                                        <div key={item} className="flex items-start gap-2 text-[11px] text-white/70">
                                            <Check className={cn("w-3 h-3 mt-0.5 shrink-0", service.isSpecial ? "text-amber-500" : "text-neon-cyan")} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    className={cn(
                                        "w-full h-8 text-xs uppercase tracking-wide border",
                                        service.isSpecial
                                            ? "bg-amber-500/10 border-amber-500/50 text-amber-500 hover:bg-amber-500/20"
                                            : "bg-transparent border-white/10 hover:bg-white/5 text-white"
                                    )}
                                >
                                    Select
                                </Button>
                            </QuantumCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
