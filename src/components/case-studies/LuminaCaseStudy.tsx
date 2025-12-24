"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

export function LuminaCaseStudy() {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    return (
        <>
            {/* Trigger Card - Floating Glass Aesthetic */}
            <div
                className="group relative backdrop-blur-md bg-white/60 border border-white/40 p-10 rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 w-full max-w-2xl mx-auto"
                onClick={() => setIsOpen(true)}
            >
                <div className="relative z-10 text-left">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <span className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-3 block">Case Study</span>
                            <h3 className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-[#0A58FF] transition-colors">Lumina Law</h3>
                            <p className="text-slate-600 font-medium">Estate Planning & Probate Architecture</p>
                        </div>
                        <div className="p-4 bg-white rounded-full shadow-sm border border-slate-100 group-hover:scale-110 group-hover:border-blue-100 transition-all duration-300">
                            <ArrowRight className="w-6 h-6 text-slate-900 group-hover:text-[#0A58FF]" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-t border-slate-200/60 pt-8">
                        <div>
                            <span className="block text-4xl font-bold text-slate-900 mb-1 tracking-tight">300%</span>
                            <span className="text-sm text-slate-500 font-medium uppercase tracking-wide">Inquiry Increase</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-bold text-slate-900 mb-1 tracking-tight">4 Weeks</span>
                            <span className="text-sm text-slate-500 font-medium uppercase tracking-wide">Build Time</span>
                        </div>
                    </div>
                </div>

                {/* Hover State: Soft Gradient Bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#0A58FF] to-[#5FA8FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            {/* Premium Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4">
                    <div
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-fade-in"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="relative w-full max-w-[1120px] h-[100dvh] md:h-[90vh] bg-white md:rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-[slideUp_var(--duration-modal)_var(--ease-entrance)_forwards]">

                        {/* Standardized Close Button (Absolute Top-Right) */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 z-[60] w-10 h-10 bg-white rounded-full flex items-center justify-center ring-1 ring-slate-200 shadow-md hover:scale-105 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-[#0A58FF]"
                            aria-label="Close modal"
                        >
                            <X size={20} className="text-slate-600" />
                        </button>

                        {/* CONTENT CONTAINER - Scrollable Area */}
                        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide bg-white relative">

                            {/* Sticky Header */}
                            <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center md:hidden">
                                <span className="font-bold text-slate-900">Lumina Law Case Study</span>
                            </div>

                            <div className="p-6 md:p-10 lg:p-12 pb-24">
                                {/* Header Section */}
                                <div className="mb-12 max-w-3xl">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                                                Lumina Law — Strategic Rebuild for Trust & Conversion
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                                    {/* Left Column: Narrative */}
                                    <div className="lg:col-span-7 space-y-12">

                                        {/* BEFORE */}
                                        <section>
                                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Before: What was broken</h3>
                                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                                The original site was dense, text-heavy, and mobile-hostile. It signaled low credibility and created friction at every decision point.
                                            </p>

                                            <div className="bg-red-50/50 border-l-4 border-red-200 p-6 rounded-r-xl">
                                                <h4 className="font-bold text-slate-900 text-sm mb-3">What it was costing them:</h4>
                                                <ul className="space-y-2 text-slate-600 text-sm">
                                                    <li className="flex items-start gap-3">
                                                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                                                        Lost trust from high-intent visitors, particularly in competitive legal searches.
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                                                        Missed high-value inquiries that never converted due to unclear paths.
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                                                        Increased acquisition costs as paid campaigns struggled to justify spend.
                                                    </li>
                                                </ul>
                                            </div>
                                        </section>

                                        {/* RISKS */}
                                        <section>
                                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Risks of keeping it unchanged</h3>
                                            <ul className="space-y-3 text-slate-600">
                                                <li className="flex items-start gap-3">
                                                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2.5 shrink-0" />
                                                    Continued revenue leakage from qualified visitors.
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2.5 shrink-0" />
                                                    Reduced ability to win retainers versus firms with clearer digital authority.
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2.5 shrink-0" />
                                                    Compounding reputational cost as prospective clients form negative first impressions.
                                                </li>
                                            </ul>
                                        </section>

                                        {/* AFTER */}
                                        <section>
                                            <h3 className="text-sm font-bold text-[#0A58FF] uppercase tracking-widest mb-4">After: What we changed and why it matters</h3>
                                            <p className="text-slate-600 mb-6 font-medium">Homepage-focused interventions:</p>
                                            <ul className="space-y-4 text-slate-600">
                                                <li className="group">
                                                    <strong className="text-slate-900 block group-hover:text-[#0A58FF] transition-colors">Visual authority</strong>
                                                    Replaced dated imagery and inconsistent type with an editorial, high-trust visual system that signals competence at first glance.
                                                </li>
                                                <li className="group">
                                                    <strong className="text-slate-900 block group-hover:text-[#0A58FF] transition-colors">Clarity-first headings</strong>
                                                    Immediate, left-aligned messaging that communicates outcomes and next steps within two screenfuls.
                                                </li>
                                                <li className="group">
                                                    <strong className="text-slate-900 block group-hover:text-[#0A58FF] transition-colors">Structured funnels</strong>
                                                    Simplified CTAs that guide visitors from problem → proof → contact in fewer than three interactions.
                                                </li>
                                                <li className="group">
                                                    <strong className="text-slate-900 block group-hover:text-[#0A58FF] transition-colors">Performance uplift</strong>
                                                    Reduced critical load and improved perceived speed to restore trust and reduce bounce.
                                                </li>
                                                <li className="group">
                                                    <strong className="text-slate-900 block group-hover:text-[#0A58FF] transition-colors">Micro-trust signals</strong>
                                                    Curated case highlights and succinct proof points that accelerate decision confidence.
                                                </li>
                                            </ul>
                                        </section>

                                        {/* BUSINESS IMPACT */}
                                        <section className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A58FF] rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2" />
                                            <div className="relative z-10">
                                                <h3 className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-4">Business Impact</h3>
                                                <p className="text-lg leading-relaxed text-blue-50/90 font-medium">
                                                    These changes reduce friction where it matters most — perception and decision. Clearer trust signals + faster interaction directly increase the rate at which qualified visitors convert into inquiries. Small structural changes to the homepage produce outsized results because they address the earliest moments of user judgment and friction.
                                                </p>
                                            </div>
                                        </section>

                                    </div>

                                    {/* Right Column: Visual Proof */}
                                    <div className="lg:col-span-5 space-y-8 sticky top-12 self-start">
                                        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 shadow-lg">
                                            <div className="mb-6">
                                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Proof beats promises.</h3>
                                                <p className="text-sm text-slate-500 leading-relaxed">
                                                    This comparison shows what changes when clarity, structure, and trust are engineered deliberately — not decorated.
                                                </p>
                                            </div>

                                            <div className="mb-8 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white">
                                                <BeforeAfterSlider
                                                    beforeImage="/case-studies/lumina/lumina-old.jpg"
                                                    afterImage="/case-studies/lumina/lumina-new.jpg"
                                                    alt="Lumina Law Website Transformation"
                                                />
                                            </div>

                                            <a
                                                href="https://lumina-law-website-rebuilt.vercel.app/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full text-center bg-[#0A58FF] text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2 group"
                                            >
                                                View Live Rebuild
                                                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </a>
                                            <p className="text-center text-xs text-slate-400 mt-3 font-medium">Opens in new tab</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <style jsx global>{`
                        .scrollbar-hide::-webkit-scrollbar {
                            display: none;
                        }
                        .scrollbar-hide {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                        @keyframes slideUp {
                            from { opacity: 0; transform: translateY(20px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                    `}</style>
                </div>
            )}
        </>
    );
}

