"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICES = [
    {
        id: "starter",
        tier: "Diagnostic",
        title: "Founder Diagnostic Audit",
        originalPrice: "$750",
        price: "$249",
        bestFor: "Solo founders, Pre-Seed to Seed",
        deliverables: [
            "48-Hour Code Health Check",
            "UX Friction Report",
            "Technical Debt Map",
            "Immediate Remediation Plan"
        ],
        isSpecial: true
    },
    {
        id: "audit",
        tier: "Entry Offer",
        title: "Technical Audit",
        price: "$3,500 – $5,000",
        bestFor: "SaaS founders, VC portfolios",
        deliverables: [
            "Codebase quality assessment",
            "Architecture risk map",
            "UX heuristics report",
            "RAG readiness evaluation",
            "“Red/Amber/Green” priority roadmap"
        ]
    },
    {
        id: "sprint",
        tier: "Core Product",
        title: "Build Sprint",
        price: "$15,000 – $60,000",
        bestFor: "Non-technical founders, SaaS teams",
        mainFeatures: [
            "Next.js product architecture",
            "UI/UX design systems",
            "Secure SSR flows & Local RAG tools",
            "Operational dashboards"
        ],
        outcome: "A scalable, investor-ready digital product."
    },
    {
        id: "retainer",
        tier: "Retainer",
        title: "Fractional Product Leadership",
        price: "$6,000 – $12,000/mo",
        bestFor: "Scale-ups, high-growth teams",
        deliverables: [
            "Product strategy ownership",
            "Vendor + dev team oversight",
            "Technical hiring",
            "KPI / OKR roadmap leadership"
        ],
        outcome: "CPO/CTO-level guidance."
    }
];

export function ServicesSection() {
    return (
        <section className="py-24 px-6 bg-[#0c0c0c] border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-voltage-purple">
                            Value Ladder
                        </span>
                    </h2>
                    <p className="text-white/60 max-w-2xl text-lg">
                        From technical due diligence to full-scale digital product architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className={cn(
                                "relative p-6 rounded-2xl border bg-[#0a0a0a] transition-all flex flex-col min-h-[500px] group",
                                service.isSpecial
                                    ? "border-amber-500/50 hover:border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.1)]"
                                    : "border-white/5 hover:border-white/10"
                            )}
                            whileHover={{ y: -5 }}
                        >
                            {service.isSpecial && (
                                <div className="absolute top-0 right-0 px-3 py-1 bg-amber-500 text-black text-[10px] font-bold uppercase rounded-bl-xl rounded-tr-xl flex items-center gap-1">
                                    <Zap size={12} fill="currentColor" /> Limited Offer
                                </div>
                            )}

                            <div className="mb-6">
                                <span className={cn(
                                    "text-xs font-mono uppercase tracking-wider mb-2 block",
                                    service.isSpecial ? "text-amber-500" : "text-neon-cyan"
                                )}>
                                    {service.tier}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>

                                <div className="flex items-baseline gap-2 mb-1">
                                    <div className="text-2xl font-light text-white/90">{service.price}</div>
                                    {service.originalPrice && (
                                        <div className="text-sm text-white/40 line-through decoration-white/30">{service.originalPrice}</div>
                                    )}
                                </div>
                                <div className="text-xs text-white/40 mb-4 h-8">Best for: {service.bestFor}</div>
                            </div>

                            <div className="flex-grow space-y-3 mb-6">
                                {((service.deliverables || service.mainFeatures) || []).map((item) => (
                                    <div key={item} className="flex items-start gap-2 text-xs text-white/70">
                                        <Check className={cn("w-3.5 h-3.5 mt-0.5 shrink-0", service.isSpecial ? "text-amber-500" : "text-neon-cyan")} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                                {service.mainFeatures && (
                                    <div className="text-[10px] uppercase text-white/30 font-bold tracking-widest mt-2">Includes above</div>
                                )}
                            </div>

                            {service.outcome && (
                                <div className="mt-auto pt-4 border-t border-white/10 mb-6">
                                    <p className="text-xs text-white/50 italic">
                                        "{service.outcome}"
                                    </p>
                                </div>
                            )}

                            <Button
                                variant="outline"
                                className={cn(
                                    "w-full mt-auto h-10 border-white/10 hover:bg-white/5 text-xs uppercase tracking-wide",
                                    service.isSpecial && "bg-amber-500/10 border-amber-500/50 hover:bg-amber-500/20 text-amber-500"
                                )}
                            >
                                {service.isSpecial ? "Claim Audit" : "Select Protocol"} <ArrowRight className="w-3 h-3 ml-2 opacity-50 group-hover:translate-x-1 transition-transform" />
                            </Button>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
