"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICES = [
    {
        id: "audit",
        tier: "Entry Offer",
        title: "Technical Audit",
        price: "$3,500 – $5,000",
        bestFor: "SaaS founders, VC portfolios, stalled products",
        deliverables: [
            "Codebase quality assessment",
            "Architecture risk map",
            "UX heuristics report",
            "RAG readiness evaluation",
            "“Red/Amber/Green” priority roadmap",
            "1-week turnaround"
        ]
    },
    {
        id: "sprint",
        tier: "Core Product",
        title: "Build Sprint",
        price: "$15,000 – $60,000",
        bestFor: "Non-technical founders, professional firms, SaaS teams",
        mainFeatures: [
            "Next.js product architecture",
            "UI/UX design systems",
            "Secure SSR flows & Local RAG tools",
            "Operational dashboards"
        ],
        outcome: "A scalable, investor-ready digital product with intelligent automation."
    },
    {
        id: "retainer",
        tier: "Retainer",
        title: "Fractional Product Leadership",
        price: "$6,000 – $12,000/mo",
        bestFor: "Scale-ups, professional services, high-growth teams",
        deliverables: [
            "Product strategy & Architecture ownership",
            "Vendor + dev team oversight",
            "Technical hiring",
            "KPI / OKR roadmap leadership",
            "Founder advisory"
        ],
        outcome: "You get CPO/CTO-level guidance without the $250k salary or equity requirement."
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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className={cn(
                                "relative p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-white/10 transition-all flex flex-col min-h-[550px]",
                                index === 1 && "border-neon-cyan/20 bg-[#0a0a0a]/80 shadow-[0_0_30px_rgba(0,243,255,0.05)]"
                            )}
                            whileHover={{ y: -5 }}
                        >
                            {index === 1 && (
                                <div className="absolute top-0 right-0 px-3 py-1 bg-neon-cyan text-black text-xs font-bold uppercase rounded-bl-xl rounded-tr-xl">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <span className="text-xs font-mono uppercase tracking-wider text-neon-cyan mb-2 block">
                                    {service.tier}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                <div className="text-3xl font-light text-white/90 mb-1">{service.price}</div>
                                <div className="text-sm text-white/40 mb-6">Best for: {service.bestFor}</div>
                            </div>

                            <div className="flex-grow space-y-4 mb-8">
                                {service.deliverables && service.deliverables.map((item) => (
                                    <div key={item} className="flex items-start gap-3 text-sm text-white/70">
                                        <Check className="w-4 h-4 text-neon-cyan mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}

                                {service.mainFeatures && (
                                    <>
                                        <div className="text-xs uppercase text-white/30 font-bold tracking-widest mb-2 mt-4">Includes:</div>
                                        {service.mainFeatures.map((item) => (
                                            <div key={item} className="flex items-start gap-3 text-sm text-white/70">
                                                <Check className="w-4 h-4 text-neon-cyan mt-0.5 shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>

                            {service.outcome && (
                                <div className="mt-auto pt-6 border-t border-white/10">
                                    <p className="text-sm text-white/50 italic">
                                        "{service.outcome}"
                                    </p>
                                </div>
                            )}

                            <Button variant="outline" className="w-full mt-8 group h-12 border-white/10 hover:bg-white/5">
                                Select Protocol <ArrowRight className="w-4 h-4 ml-2 opacity-50 group-hover:translate-x-1 transition-transform" />
                            </Button>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
