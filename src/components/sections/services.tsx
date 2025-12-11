"use client";

import React from "react";
import { motion } from "framer-motion";
import { QuantumCard } from "@/components/ui/QuantumCard";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactorCoreHUD } from "@/components/ui/ReactorCoreHUD";

const OFFERS = [
    {
        tier: "LIMITED ENTRY",
        title: "FOUNDER DIAGNOSTIC",
        price: "$249",
        desc: "48-Hour UX & Code Scan.",
        features: ["Technical Health Check", "UX Friction Audit", "Report in 48h"],
        isSpecial: true
    },
    {
        tier: "AUDIT",
        title: "TECHNICAL AUDIT",
        price: "$3,500",
        desc: "Architecture, Security & Performance Roadmap.",
        features: ["Deep Code Analysis", "Security Risk Map", "Scale Roadmap"],
    },
    {
        tier: "EXECUTION",
        title: "BUILD SPRINT",
        price: "$15k+",
        desc: "AI-powered MVP Architecture & Execution.",
        features: ["Next.js Architecture", "RAG Integration", "Production Launch"],
    },
    {
        tier: "PARTNER",
        title: "FRACTIONAL CPO",
        price: "$6k/mo",
        desc: "Long-term architecture ownership.",
        features: ["Strategy Leadership", "Vendor Management", "Team Hiring"],
    },
];

export function ServicesSection() {
    return (
        <ReactorCoreHUD
            title="VALUE LADDER"
            tagline="ENGAGEMENT MODELS"
            systemId="SYS_OFFER: #404"
            className="py-24"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {OFFERS.map((offer, index) => (
                    <motion.div
                        key={offer.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full"
                    >
                        <QuantumCard className={cn("h-full flex flex-col p-6", offer.isSpecial && "border-neon-cyan/50")}>
                            {offer.isSpecial && (
                                <div className="absolute top-0 right-0 px-2 py-1 bg-neon-cyan text-black text-[10px] font-bold uppercase rounded-bl-lg">
                                    Limited
                                </div>
                            )}

                            <div className="mb-6">
                                <div className={cn("text-xs font-mono uppercase tracking-widest mb-2", offer.isSpecial ? "text-neon-cyan" : "text-white/40")}>{offer.tier}</div>
                                <h3 className="text-xl font-bold text-white mb-1">{offer.title}</h3>
                                <div className="text-2xl font-light text-white mb-2">{offer.price}</div>
                                <p className="text-xs text-white/60 h-10">{offer.desc}</p>
                            </div>

                            <div className="space-y-3 mb-8 flex-grow">
                                {offer.features.map((f) => (
                                    <div key={f} className="flex items-start gap-2 text-xs text-white/50">
                                        <Check className="w-3 h-3 text-neon-cyan shrink-0 mt-0.5" />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={cn(
                                "w-full py-3 text-xs uppercase font-bold tracking-wide rounded border transition-all flex items-center justify-center gap-2",
                                offer.isSpecial
                                    ? "bg-neon-cyan text-black border-neon-cyan hover:bg-white hover:border-white"
                                    : "bg-transparent border-white/10 text-white hover:bg-white/5 hover:border-neon-cyan"
                            )}>
                                Select <ArrowRight size={14} />
                            </button>
                        </QuantumCard>
                    </motion.div>
                ))}
            </div>
        </ReactorCoreHUD>
    );
}
