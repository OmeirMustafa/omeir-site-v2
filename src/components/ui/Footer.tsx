"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#0F172A] border-t border-slate-800 text-slate-400 py-20 relative overflow-hidden">

            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0A58FF]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="container-width relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-slate-800/50">

                    {/* COL 1: About (Brand) - Span 5 */}
                    <div className="md:col-span-5 space-y-6">
                        <button
                            onClick={scrollToTop}
                            className="text-2xl font-bold text-white tracking-tight hover:text-[#0A58FF] transition-colors"
                        >
                            Omeir Mustafa
                        </button>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                            Digital architect for high-growth challengers. I build systems that turn traffic into revenue.
                        </p>
                        <div className="pt-4">
                            <a href="#contact-section" className="inline-flex items-center gap-2 text-[#0A58FF] font-bold hover:text-white transition-colors">
                                Start a Conversation <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </div>

                    {/* COL 2: Services - Span 3 */}
                    <div className="md:col-span-3 space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs select-none">Services</h4>
                        <ul className="space-y-4 select-none">
                            <li><span className="hover:text-white transition-colors cursor-pointer block focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0A58FF] rounded-sm" tabIndex={0}>Revenue Architecture</span></li>
                            <li><span className="hover:text-white transition-colors cursor-pointer block focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0A58FF] rounded-sm" tabIndex={0}>UI/UX Audit</span></li>
                            <li><span className="hover:text-white transition-colors cursor-pointer block focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0A58FF] rounded-sm" tabIndex={0}>Web Development</span></li>
                            <li><span className="hover:text-white transition-colors cursor-pointer block focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0A58FF] rounded-sm" tabIndex={0}>Conversion Optimization</span></li>
                        </ul>
                    </div>

                    {/* COL 3: Contact - Span 4 */}
                    <div className="md:col-span-4 space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs select-none">Contact</h4>
                        <ul className="space-y-4 select-none">
                            <li>
                                <a href="mailto:omeirmustafa.work@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0A58FF] rounded-lg p-1 -ml-1">
                                    <div className="p-2 bg-slate-800 rounded-full group-hover:bg-[#0A58FF] transition-colors">
                                        <Mail size={16} className="text-slate-300 group-hover:text-white" />
                                    </div>
                                    omeirmustafa.work@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0A58FF] rounded-lg p-1 -ml-1">
                                    <div className="p-2 bg-slate-800 rounded-full group-hover:bg-[#0A58FF] transition-colors">
                                        <Linkedin size={16} className="text-slate-300 group-hover:text-white" />
                                    </div>
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Row: Compact */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-medium text-slate-500">
                    <p>© 2025 Omeir Mustafa. All rights reserved.</p>

                    <div className="flex items-center gap-8 select-none">
                        <Link href="/" className="hover:text-white transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0A58FF] rounded-sm">Home</Link>
                        <Link href="#projects" className="hover:text-white transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0A58FF] rounded-sm">Projects</Link>
                        <Link href="#approach" className="hover:text-white transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0A58FF] rounded-sm">Approach</Link>
                        <Link href="#contact-section" className="hover:text-white transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0A58FF] rounded-sm">Contact</Link>
                    </div>

                    <p className="flex items-center gap-2 hidden md:flex">
                        System Status: <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" /> Operational
                    </p>
                </div>
            </div>
        </footer>
    );
}
