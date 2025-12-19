"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

interface LuminaCaseStudyProps {
    isOpen: boolean;
    onClose: () => void;
}

export function LuminaCaseStudy({ isOpen, onClose }: LuminaCaseStudyProps) {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Handle ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">

            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-md animate-fade-in"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-[#0F172A] border border-slate-700 rounded-2xl shadow-2xl animate-fade-up">

                {/* Close Button */}
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-0 left-0 z-50 p-3 bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white rounded-br-2xl transition-colors backdrop-blur-sm"
                >
                    <X size={24} />
                </button>

                <div className="p-8 md:p-12 space-y-16">

                    {/* 1. HEADER */}
                    <header className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-500/20">
                            Conceptual Case Study
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Lumina Law — Conceptual Website Rebuild
                        </h2>
                        <p className="text-slate-400 text-lg mb-8">
                            Reimagining a traditional legal website into a modern, conversion-focused digital platform.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://lumina-law-website-rebuilt.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors"
                            >
                                View Rebuilt Version <ExternalLink size={18} />
                            </a>
                            <span className="text-slate-500 text-sm font-medium">
                                (Not a Client Project)
                            </span>
                        </div>
                    </header>

                    {/* 2. HERO INTERACTION — BEFORE vs AFTER */}
                    <section className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                                Before — Legacy Website
                            </span>
                            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
                                After — Rebuilt Concept
                            </span>
                        </div>

                        <div className="aspect-[16/9] w-full relative group cursor-ew-resize">
                            <ReactCompareSlider
                                itemOne={<ReactCompareSliderImage src="/images/lumina-old.jpg" alt="Original Lumina Law Website" />}
                                itemTwo={<ReactCompareSliderImage src="/images/lumina-new.jpg" alt="Rebuilt Lumina Law Website" />}
                                className="h-full w-full"
                            />
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur px-4 py-2 rounded-full text-white text-xs font-medium pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                                Drag to Compare
                            </div>
                        </div>
                    </section>

                    {/* 3. ANALYSIS SECTION — PROBLEM vs SOLUTION */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Column A — Problems */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <AlertTriangle size={20} className="text-amber-500" />
                                Diagnostic: The Problems
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-slate-400">
                                    <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-amber-500/50" />
                                    Overloaded navigation causing cognitive friction
                                </li>
                                <li className="flex gap-3 text-slate-400">
                                    <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-amber-500/50" />
                                    Generic hero messaging that does not address user urgency
                                </li>
                                <li className="flex gap-3 text-slate-400">
                                    <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-amber-500/50" />
                                    Passive CTAs ("Learn More") with low conversion intent
                                </li>
                                <li className="flex gap-3 text-slate-400">
                                    <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-amber-500/50" />
                                    Content-heavy structure behaving like a brochure, not a funnel
                                </li>
                            </ul>
                        </div>

                        {/* Column B — Solutions */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <CheckCircle2 size={20} className="text-blue-500" />
                                Strategy: The Fix
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-slate-300">
                                    <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500" />
                                    Clear hierarchy and simplified navigation
                                </li>
                                <li className="flex gap-3 text-slate-300">
                                    <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500" />
                                    Value-driven hero messaging addressing pain points immediately
                                </li>
                                <li className="flex gap-3 text-slate-300">
                                    <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500" />
                                    Action-oriented CTAs designed to capture qualified leads
                                </li>
                                <li className="flex gap-3 text-slate-300">
                                    <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500" />
                                    Funnel-based layout prioritizing decision-making and revenue
                                </li>
                            </ul>
                        </div>

                    </section>

                    {/* 4. BUSINESS IMPACT */}
                    <section className="bg-slate-800/30 rounded-xl p-8 border border-slate-800 text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">Why This Rebuild Matters</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-blue-500 font-bold text-lg mb-2">Increase Volume</div>
                                <p className="text-slate-400 text-sm">Clearer CTAs lead to higher inquiry rates.</p>
                            </div>
                            <div>
                                <div className="text-blue-500 font-bold text-lg mb-2">Reduce Friction</div>
                                <p className="text-slate-400 text-sm">Simplified nav stops users from bouncing.</p>
                            </div>
                            <div>
                                <div className="text-blue-500 font-bold text-lg mb-2">Build Authority</div>
                                <p className="text-slate-400 text-sm">Premium design signals competence and trust.</p>
                            </div>
                            <div>
                                <div className="text-blue-500 font-bold text-lg mb-2">Lead Asset</div>
                                <p className="text-slate-400 text-sm">Turns a static brochure into a lead engine.</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
