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
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="qa" className="section-spacing bg-[#F1F5F9] relative overflow-hidden">
            <div className="container-width max-w-4xl">

                <div className="text-center mb-16 animate-fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
                        Common Questions
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Clarity is the foundation of trust.
                    </p>
                </div>

                <div className="space-y-4 animate-fade-up delay-100">
                    {FAQ.map((item, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-blue-500/30 shadow-lg shadow-blue-500/5' : 'border-slate-200 shadow-sm hover:border-slate-300'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                                >
                                    <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-800'}`}>
                                        {item.q}
                                    </span>
                                    <span className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-6 md:px-8 pb-8 pt-0 text-slate-600 leading-relaxed text-lg">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
