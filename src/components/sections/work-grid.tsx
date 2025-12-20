"use client";

import React, { useState } from "react";
import { ArrowUpRight, Lock } from "lucide-react";
import { LuminaCaseStudy } from "@/components/case-studies/LuminaCaseStudy";

const PROJECTS = [
    {
        id: "lumina",
        title: "Lumina Law",
        category: "Rebuild Case Study",
        desc: "Transforming a legacy legal site into a high-trust digital asset.",
        status: "available"
    },
    {
        id: "kuro",
        title: "Kuro Coffee",
        category: "E-Commerce Experience",
        desc: "Mobile-first retail brand focused on speed and aesthetic.",
        status: "coming_soon"
    },
    {
        id: "apex",
        title: "Apex SaaS",
        category: "Enterprise Dashboard",
        desc: "Data visualization system for complex team management.",
        status: "coming_soon"
    }
];

export function WorkGrid() {
    const [isLuminaOpen, setIsLuminaOpen] = useState(false);

    const handleProjectClick = (id: string, status: string) => {
        if (id === "lumina" && status === "available") {
            setIsLuminaOpen(true);
        }
    };

    return (
        <section id="work" className="section-spacing bg-[#0F172A] border-t border-slate-800">
            <div className="container-width">

                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Selected Work
                    </h2>
                    <p className="text-slate-400 font-normal text-lg max-w-xl leading-relaxed">
                        A curated selection of digital architecture projects. Each case study represents a specific challenge in clarity, trust, and system design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in delay-300 opacity-0">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => handleProjectClick(project.id, project.status)}
                            className={`group relative flex flex-col justify-end min-h-[400px] p-8 rounded-2xl border border-white/5 bg-slate-800/20 hover:bg-slate-800/40 hover:border-blue-500/20 transition-all duration-500 ease-out overflow-hidden ${project.status === 'available' ? 'cursor-pointer' : 'cursor-not-allowed opacity-75'}`}
                        >
                            {/* Abstract Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-700 ${project.id === 'lumina' ? 'from-blue-900/10 to-transparent opacity-100 group-hover:opacity-80' : 'from-slate-800/20 to-transparent opacity-50'}`} />

                            {/* Content */}
                            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="mb-auto">
                                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-500 mb-3">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                                    {project.desc}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-medium">
                                    {project.status === 'available' ? (
                                        <>
                                            <span className="text-white group-hover:text-blue-400 transition-colors">View Case Study</span>
                                            <ArrowUpRight size={16} className="text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </>
                                    ) : (
                                        <span className="text-slate-500 flex items-center gap-2">
                                            <Lock size={14} /> Coming Soon
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-500" />

                        </div>
                    ))}
                </div>

            </div>

            <LuminaCaseStudy isOpen={isLuminaOpen} onClose={() => setIsLuminaOpen(false)} />
        </section>
    );
}
