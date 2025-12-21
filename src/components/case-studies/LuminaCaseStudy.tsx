"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { SmartContactModal } from "@/components/ui/SmartContactModal";

interface LuminaCaseStudyProps {
    isOpen: boolean;
    onClose: () => void;
}

export function LuminaCaseStudy({ isOpen, onClose }: LuminaCaseStudyProps) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    // Lock body scroll
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

    // Handle ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 opacity-100 transition-opacity duration-300">

            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl animate-fade-in"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div
                className="relative w-full max-w-[1120px] h-[100vh] md:h-[95vh] bg-[#F8FAFC] md:rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-white/50"
                style={{ animation: "slideUp 300ms cubic-bezier(0.22, 1, 0.36, 1) forwards" }}
            >

                {/* Close Bar */}
                <div className="absolute top-0 left-0 right-0 z-50 flex justify-end p-6 md:p-8 pointer-events-none sticky bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent">
                    <button
                        onClick={onClose}
                        className="pointer-events-auto w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-slate-300 hover:text-slate-900 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto h-full scrollbar-hide py-24 md:py-16 px-6 md:px-[48px]">

                    {/* Header */}
                    <div className="max-w-4xl mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-[1.05] tracking-tight">
                            Lumina Law — Strategic Rebuild for Trust & Conversion
                        </h2>
                    </div>

                    {/* Content Grid */}
                    <div className="space-y-16 max-w-[85ch]">

                        {/* BEFORE */}
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">--- BEFORE: What was broken</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                The original site was dense, text-heavy, and mobile-hostile. It signaled low credibility and created friction at every decision point.
                            </p>

                            <h4 className="font-bold text-slate-900 mb-3">What it was costing them:</h4>
                            <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                                <li>Lost trust from high-intent visitors, particularly in competitive legal searches.</li>
                                <li>Missed high-value inquiries that never converted due to unclear paths.</li>
                                <li>Increased acquisition costs as paid campaigns struggled to justify spend.</li>
                            </ul>

                            <h4 className="font-bold text-slate-900 mb-3">Risks of keeping it unchanged:</h4>
                            <ul className="list-disc pl-5 space-y-2 text-slate-600">
                                <li>Continued revenue leakage from qualified visitors.</li>
                                <li>Reduced ability to win retainers versus firms with clearer digital authority.</li>
                                <li>Compounding reputational cost as prospective clients form negative first impressions.</li>
                            </ul>
                        </section>

                        {/* AFTER */}
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">--- AFTER: What we changed and why it matters</h3>

                            <h4 className="font-bold text-slate-900 mb-3">Homepage-focused interventions:</h4>
                            <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-6">
                                <li>Visual authority: replaced dated imagery and inconsistent type with an editorial, high-trust visual system that signals competence at first glance.</li>
                                <li>Clarity-first headings: immediate, left-aligned messaging that communicates outcomes and next steps within two screenfuls.</li>
                                <li>Structured funnels: simplified CTAs that guide visitors from problem → proof → contact in fewer than three interactions.</li>
                                <li>Performance uplift: reduced critical load and improved perceived speed to restore trust and reduce bounce.</li>
                                <li>Micro-trust signals: curated case highlights and succinct proof points that accelerate decision confidence.</li>
                            </ul>

                            <h4 className="font-bold text-slate-900 mb-3">Business impact (measured approach):</h4>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                These changes reduce friction where it matters most — perception and decision. Clearer trust signals + faster interaction directly increase the rate at which qualified visitors convert into inquiries. Small structural changes to the homepage produce outsized results because they address the earliest moments of user judgment and friction.
                            </p>

                            <h4 className="font-bold text-slate-900 mb-3">Evidence base (research-informed):</h4>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                This approach follows established UX and conversion principles centered on clarity, trust indicators, and speed — the combination most consistently correlated with higher inquiry rates among service businesses.
                            </p>
                        </section>

                        {/* CTA Footer */}
                        <div className="pt-8 border-t border-slate-200 mt-12">
                            <p className="text-xl font-bold text-slate-900 mb-6">
                                If your current site is losing qualified visitors, we should talk. This rebuild is designed to recover leads and improve the quality of inbound inquiries.
                            </p>
                            <button
                                onClick={() => setIsContactOpen(true)}
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-all hover:-translate-y-1 active:scale-95"
                            >
                                Recover Lost Revenue
                            </button>
                        </div>

                    </div>
                </div>

            </div>

            <style jsx global>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            {/* Nested Contact Modal */}
            <SmartContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </div>
    );
}
