"use client";

import React from "react";

export function ProblemFraming() {
    return (
        <section className="py-32 px-6 bg-[#030504] border-t border-white/5">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

                <div>
                    <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                        The Technical <br /> Black Box.
                    </h2>
                </div>

                <div className="space-y-8">
                    <p className="text-xl text-slate-400 font-light leading-relaxed">
                        Founders operate on speed. Engineers operate on complexity.
                    </p>
                    <p className="text-lg text-slate-500 font-light leading-relaxed">
                        When these incentives misalign, you generate technical debt—invisible structural damage that kills scalability and fails due diligence.
                    </p>
                    <div className="pt-4">
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-500/80">
                            Risk: High Reliability: Low
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
