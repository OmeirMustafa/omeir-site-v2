"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Building2, Globe, TrendingUp, Layers } from "lucide-react";

const LOGOS = [
    { name: "FinTech Global", icon: TrendingUp },
    { name: "Enterprise SaaS", icon: Building2 },
    { name: "HealthTech Systems", icon: Layers },
    { name: "Global Logistics", icon: Globe },
];

const TESTIMONIALS = [
    {
        quote: "Omeir didn't just redesign our site; he restructured our entire conversion logic. Our qualified leads doubled in 30 days.",
        author: "Sarah Jenkins",
        role: "Founder, SaaS Analytics",
    },
    {
        quote: "The level of strategic clarity Omeir brings is rare. He serves as a true partner in product architecture, not just a designer.",
        author: "David Chen",
        role: "CTO, FinFlow",
    },
    {
        quote: "We were losing 60% of traffic at the demo funnel. Omeir's 'Revenue Protocol' fixed the leak and stabilized our pipeline.",
        author: "Elena Rodriguez",
        role: "VP Marketing, LogisticsCore",
    },
];

export function SocialProof() {
    const [currentInitial, setCurrentInitial] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentInitial((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const nextSlide = () => setCurrentInitial((prev) => (prev + 1) % TESTIMONIALS.length);
    const prevSlide = () => setCurrentInitial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    return (
        <section className="py-20 border-b border-slate-100/50 bg-[#F5F7FA]">
            <div className="container-width">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: Trusted By Grid */}
                    <div className="space-y-6">
                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider text-center lg:text-left">
                            Trusted by innovative teams
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {LOGOS.map((Logo, idx) => (
                                <div key={idx} className="flex flex-col items-center justify-center gap-2 group cursor-default">
                                    <Logo.icon size={28} className="text-slate-900 group-hover:text-[#0A58FF] transition-colors" />
                                    <span className="text-xs font-semibold text-slate-700">{Logo.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Testimonial Carousel */}
                    <div
                        className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onFocus={() => setIsPaused(true)}
                        onBlur={() => setIsPaused(false)}
                        role="region"
                        aria-label="Client Testimonials"
                    >
                        <div className="overflow-hidden min-h-[140px] flex items-center">
                            <div className="transition-opacity duration-300 w-full animate-fade-in key={currentInitial}">
                                <p className="text-lg text-slate-800 leading-relaxed font-medium mb-4">
                                    "{TESTIMONIALS[currentInitial].quote}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-[1px] bg-[#0A58FF]/40" />
                                    <p className="text-sm text-slate-500">
                                        <span className="font-semibold text-slate-900">{TESTIMONIALS[currentInitial].author}</span>
                                        <span className="mx-1">•</span>
                                        {TESTIMONIALS[currentInitial].role}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="absolute top-6 right-6 flex gap-2">
                            <button
                                onClick={prevSlide}
                                className="p-3 rounded-full bg-slate-100 hover:bg-[#0A58FF] hover:text-white transition-colors group"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft size={20} className="text-slate-600 group-hover:text-white" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-3 rounded-full bg-slate-100 hover:bg-[#0A58FF] hover:text-white transition-colors group"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight size={20} className="text-slate-600 group-hover:text-white" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
