"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { LuminaCaseStudy } from "@/components/case-studies/LuminaCaseStudy";

const PROJECTS = [
    {
        id: "lumina",
        title: "Lumina Law",
        category: "Legal Authority",
        desc: "Transforming a legacy firm into a high-trust digital brand.",
        image: "bg-slate-900", // placeholder class
        available: true
    },
    {
        id: "kuro",
        title: "Kuro Coffee",
        category: "E-Commerce",
        desc: "Speed-focused retail experience for modern consumers.",
        image: "bg-amber-900",
        available: false
    },
    {
        id: "apex",
        title: "Apex SaaS",
        category: "Enterprise Data",
        desc: "Complex dashboard visualization for decision support.",
        image: "bg-blue-900", // placeholder
        available: false
    }
];

export function Projects() {
    const [isLuminaOpen, setIsLuminaOpen] = useState(false);

    return (
        <section id="projects" className="section-spacing bg-[#F8FAFC]">
            <div className="container-width">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                            Select Projects
                        </h2>
                        <p className="text-slate-500 text-lg max-w-xl">
                            A curation of work that solves real business problems through design.
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => project.id === 'lumina' && setIsLuminaOpen(true)}
                            className={`group w-full glass-card rounded-2xl p-8 md:p-12 transition-all duration-500 ${project.available ? 'cursor-none hover:border-blue-200' : 'opacity-60 cursor-not-allowed'}`}
                        >
                            <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between">

                                {/* Info */}
                                <div className="space-y-4 max-w-2xl">
                                    <span className="text-xs font-bold tracking-widest uppercase text-blue-600">
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
                                        {project.desc}
                                    </p>
                                </div>

                                {/* Action */}
                                <div className="shrink-0">
                                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-all duration-500 ${project.available ? 'bg-slate-900 text-white border-slate-900 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:scale-110' : 'bg-slate-100 text-slate-300 border-slate-200'}`}>
                                        <ArrowUpRight size={24} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <span className="block text-center mt-2 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                        View Case
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <LuminaCaseStudy isOpen={isLuminaOpen} onClose={() => setIsLuminaOpen(false)} />
        </section>
    );
}
