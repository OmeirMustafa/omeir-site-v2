"use client";

import Link from "next/link";
import React from "react";
import { ArrowDown } from "lucide-react";

export function Hero() {
    const handleScrollProjects = () => {
        const section = document.getElementById('projects');
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center pt-32 md:pt-48 relative overflow-hidden">
            {/* Minimalist ambient tint */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] opacity-30 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[100px] opacity-20 pointer-events-none" />

            <div className="container-width relative z-10 w-full flex flex-col items-center text-center">

                <div className="max-w-[900px]">
                    <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold tracking-tight text-slate-900 leading-[1.05] mb-8 animate-fade-up opacity-0">
                        Turn your leaking website into a <span className="gradient-text">predictable revenue engine</span>.
                    </h1>

                    <h2 className="text-[16px] md:text-[18px] text-slate-500 max-w-[70ch] mx-auto leading-[1.6] mb-12 font-regular animate-fade-up delay-100 opacity-0">
                        I help founders and scaling teams rebuild fragile web presences into high-trust, conversion-first systems that increase qualified inquiries and predictable revenue.
                    </h2>

                    <div className="flex flex-col items-center gap-6 animate-fade-up delay-200 opacity-0">
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            {/* Primary CTA: Book Audit (Scrolls to Contact) */}
                            <button
                                onClick={() => {
                                    const contactSection = document.getElementById('contact-section');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-slate-900 text-white font-medium text-xl shadow-lg hover:shadow-[#0A58FF]/40 hover:bg-[#0A58FF] transition-all duration-300 hover:-translate-y-1 active:scale-95 min-w-[220px] group relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Book an Audit
                                </span>
                                {/* Pulse Entry & Steady Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0A58FF] to-[#5FA8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]" />
                            </button>

                            {/* Secondary CTA: Strategic Work */}
                            <button
                                onClick={handleScrollProjects}
                                className="inline-flex items-center justify-center px-6 py-4 rounded-2xl border border-slate-300 text-slate-900 font-medium text-xl shadow-sm hover:shadow-[0_0_20px_rgba(10,88,255,0.15)] hover:border-[#0A58FF]/50 transition-all hover:-translate-y-1 active:scale-95 min-w-[220px] bg-transparent group relative"
                            >
                                <span className="relative z-10 flex items-center gap-2 group-hover:text-[#0A58FF] transition-colors">
                                    Explore Strategic Work
                                </span>
                            </button>
                        </div>

                        {/* Microcopy - Clearer & Aligned */}
                        <p className="text-[17px] text-slate-500 font-medium tracking-wide text-center">
                            30-min site & product audit — <span className="text-[#0A58FF] font-semibold">free</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
