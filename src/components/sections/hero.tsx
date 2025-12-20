"use client";

import Link from "next/link";
import React from "react";

export function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">

            {/* Noise Overlay */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

            {/* Subtle Orb */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-50 animate-pulse delay-1000 duration-[10s]" />

            <div className="container-width relative z-10">
                <div className="max-w-4xl">

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-8 animate-fade-up opacity-0">
                        I design digital systems that turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">clarify into momentum.</span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed mb-8 font-medium animate-fade-up delay-100 opacity-0">
                        I help founders and growing teams replace fragile websites with focused systems that attract attention, earn trust, and convert consistently.
                    </p>

                    {/* Supporting Line */}
                    <p className="text-sm md:text-base text-slate-400 font-medium tracking-wide uppercase mb-12 animate-fade-up delay-200 opacity-0">
                        Every decision is intentional. Every element earns its place.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-5 animate-fade-up delay-300 opacity-0">
                        <button
                            onClick={() => (document.querySelector('[href="mailto:omeirmustafa.work@gmail.com"]') as HTMLElement)?.click()}
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-all hover:-translate-y-1 active:scale-95 min-w-[180px]"
                        >
                            Contact Now
                        </button>

                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold text-lg shadow-sm hover:border-slate-300 hover:shadow-md transition-all hover:-translate-y-1 active:scale-95 min-w-[180px]"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
