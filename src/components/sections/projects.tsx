"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { LuminaCaseStudy } from "@/components/case-studies/LuminaCaseStudy";

const PROJECTS = [
    {
        id: "lumina",
        title: "Lumina Law",
        category: "Legal Authority",
        desc: "Rebuilt a legacy law-firm website into a high-trust, conversion-optimized platform that produced measurable increases in qualified inquiries and new retained clients within weeks.",
        available: true
    },
    {
        id: "kuro",
        title: "Kuro Coffee",
        category: "E-Commerce Performance",
        desc: "Designed a fast, mobile-first storefront focused on speed, clarity, and repeat purchases.",
        available: false
    },
    {
        id: "apex",
        title: "Apex SaaS",
        category: "Enterprise Data",
        desc: "Structured complex information into a calm, decision-ready dashboard experience.",
        available: false
    }
];

export function Projects() {
    const [isLuminaOpen, setIsLuminaOpen] = useState(false);

    return (
        <section id="projects" className="section-spacing bg-[#F1F5F9]">
            <div className="container-width">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 animate-fade-up">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                            Curated Engagements
                        </h2>
                        <p className="text-slate-500 text-lg max-w-xl">
                            Strategic projects chosen for impact — focused on authority, conversion, and measurable client growth.
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    {PROJECTS.map((project, idx) => (
                        <div
                            key={project.id}
                            onClick={() => project.id === 'lumina' && setIsLuminaOpen(true)}
                            className={`group w-full glass-card rounded-[12px] p-8 md:p-12 transition-all duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${project.available ? 'cursor-none hover:-translate-y-[6px]' : 'opacity-60 cursor-not-allowed'}`}
                            style={{
                                boxShadow: "0 10px 30px rgba(10,12,18,0.06)",
                                animationDelay: `${idx * 100}ms`
                            }}
                        >
                            <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between">

                                {/* Info */}
                                <div className="space-y-4 max-w-3xl">
                                    <span className="text-xs font-bold tracking-widest uppercase text-blue-600">
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        {project.desc}
                                    </p>
                                </div>

                                {/* Action */}
                                <div className="shrink-0">
                                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-all duration-500 ${project.available ? 'bg-slate-900 text-white border-slate-900 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:scale-110' : 'bg-slate-100 text-slate-300 border-slate-200'}`}>
                                        <ArrowUpRight size={24} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <span className="block text-center mt-3 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                        View Case
                                    </span>
                                </div>
                            </div>

                            {/* Hover Highlight (CSS-based via style injection or just box-shadow change) */}
                            {/* Using inline style for the 'soft ring' on hover - actually done via class logic in globals ideally, but putting explicit hover style here for requirement compliance */}
                            <style jsx>{`
                                .glass-card:hover {
                                    box-shadow: 0 8px 26px rgba(10,88,255,0.06);
                                }
                            `}</style>
                        </div>
                    ))}
                </div>

            </div>

            <LuminaCaseStudy isOpen={isLuminaOpen} onClose={() => setIsLuminaOpen(false)} />
        </section>
    );
}
