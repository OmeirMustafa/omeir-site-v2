"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SmartContactModal } from "@/components/ui/SmartContactModal";

export function ContactSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className="py-24 md:py-32 bg-[#F1F5F9] relative overflow-hidden">
            <div className="container-width">
                <div className="max-w-[920px] mx-auto glass-panel rounded-2xl p-8 md:p-16 text-center shadow-lg border border-white/60 relative overflow-hidden">

                    {/* Decorative bg gradient */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Are you ready to recover lost revenue?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Small, methodical improvements compound into measurable growth. The longer you wait, the more qualified leads slip away.
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-all hover:-translate-y-1 active:scale-95 group"
                        >
                            Start the Conversation
                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            <SmartContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
