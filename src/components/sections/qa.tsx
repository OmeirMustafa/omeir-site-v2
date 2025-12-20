"use client";

import React from "react";
import { Plus } from "lucide-react";

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
        a: "I work on a project-fee basis, typically starting at $3k for complete website rebuilds. No hidden hourly billing. usage rights included."
    }
];

export function QA() {
    return (
        <section id="qa" className="section-spacing bg-[#F8FAFC]">
            <div className="container-width grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                <div className="lg:col-span-4">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        Common Questions
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Clarity is everything. Here is how I work.
                    </p>
                </div>

                <div className="lg:col-span-8 space-y-6">
                    {FAQ.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start justify-between">
                                {item.q}
                                {/* <Plus size={20} className="text-slate-300" /> */}
                            </h3>
                            <p className="text-slate-500 leading-relaxed">
                                {item.a}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
