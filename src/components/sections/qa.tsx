"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = [
    {
        q: "Who is this service for?",
        a: "Founders, agencies, and businesses who have outgrown DIY builders and templates. You need a custom, high-performance asset that positions you as a market leader."
    },
    {
        q: "What is the typical timeline?",
        a: "Most website rebuilds take 2-4 weeks. I work in intensive sprints to maintain momentum and ensure you get to market quickly."
    },
    {
        q: "Do you handle the development?",
        a: "Yes. I am a hybrid designer-developer. I build what I design, ensuring nothing gets lost in translation. The result is pixel-perfect execution."
    },
    {
        q: "How does pricing work?",
        a: "I work on a project-fee basis, typically starting at $3k for complete website rebuilds. No hidden hourly billing. Usage rights included."
    }
];

export function QA() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first? No, usually closed. Let's default null.

    return (
        <section id="qa" className="section-spacing bg-[#F1F5F9] relative overflow-hidden">
            <div className="container-width">

                <div className="max-w-[820px] mx-auto">
                    <div className="text-center mb-16 animate-fade-up">
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                            Q&A
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Common Questions
                        </h2>
                        <div className="max-w-3xl mx-auto text-center px-4 w-full">
                            <p className="text-slate-500 text-lg">
                                Clarity is the foundation of trust.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4 animate-fade-up delay-100">
                        {FAQ.map((item, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className={`bg-white/80 backdrop-blur-md rounded-2xl border transition-all duration-300 overflow-hidden group ${isOpen ? 'border-blue-200 shadow-lg shadow-blue-900/5' : 'border-slate-200 shadow-sm hover:border-blue-100'}`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
                                        aria-expanded={isOpen}
                                        aria-label={isOpen ? "Collapse answer" : "Expand answer"}
                                    >
                                        <span className={`text-[18px] font-semibold transition-colors ${isOpen ? 'text-blue-700' : 'text-slate-900'}`}>
                                            {item.q}
                                        </span>
                                        <div className={`p-2 rounded-full transition-colors duration-300 shrink-0 ml-4 ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-400 group-hover:text-blue-500'}`}>
                                            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                        </div>
                                    </button>

                                    <div
                                        className={`transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="px-6 md:px-8 pb-8 pt-0 text-slate-600 leading-[1.6] text-[15px] font-medium opacity-90">
                                            {item.a}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
