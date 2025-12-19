"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { LuminaCaseStudy } from "@/components/case-studies/LuminaCaseStudy";

const PROJECTS = [
    {
        id: "lumina",
        title: "Lumina Law",
        tag: "Legal / Trust",
        desc: "High-trust identity for a corporate law firm. Focused on typography and authority.",
        size: "md:col-span-2", // Bento span
    },
    {
        id: "kuro",
        title: "Kuro Coffee",
        tag: "Retail / Experience",
        desc: "Mobile-first brand and e-commerce experience.",
        size: "md:col-span-1",
    },
    {
        id: "apex",
        title: "Apex SaaS",
        tag: "Software / Dashboard",
        desc: "Data visualization and user management system for enterprise teams.",
        size: "md:col-span-3", // Full width span
    }
];

export function WorkGrid() {
    const [isLuminaOpen, setIsLuminaOpen] = useState(false);

    const handleProjectClick = (id: string) => {
        if (id === "lumina") {
            setIsLuminaOpen(true);
        }
    };

    return (
        <section id="work" className="section-spacing bg-[#0F172A] border-t border-slate-800">
            <div className="container-width">

                <div className="mb-16 md:flex justify-between items-end">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                        Selected Work
                    </h2>
                    <p className="text-slate-400 mt-4 md:mt-0 font-medium tracking-wide text-sm uppercase">
                        Commercial & Conceptual
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in delay-300 opacity-0">
                    {PROJECTS.map((project, idx) => (
                        <div
                            key={project.id}
                            onClick={() => handleProjectClick(project.id)}
                            className={`group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 ease-out cursor-pointer ${project.size}`}
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-[16/9] md:aspect-auto md:h-64 lg:h-80 w-full bg-slate-700/30 group-hover:bg-slate-700/50 transition-colors flex items-center justify-center">
                                <span className="text-slate-500 font-medium text-sm uppercase tracking-widest">
                                    {project.title} Preview
                                </span>
                            </div>

                            {/* Content Over (Bottom) */}
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-900 to-transparent">

                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2">
                                            {project.tag}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm max-w-md hidden md:block">
                                            {project.desc}
                                        </p>
                                    </div>

                                    <div className="bg-slate-900/50 p-3 rounded-full border border-slate-600 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white text-slate-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                                        <ArrowUpRight size={20} />
                                    </div>
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
