"use client";

import React from "react";

const SECURITY_SPECS = [
    { label: "Transport Security", value: "HSTS / TLS 1.3", status: "ENFORCED" },
    { label: "Content Policy", value: "Strict CSP", status: "ACTIVE" },
    { label: "Data Residency", value: "US-East (Vercel)", status: "LOCKED" },
    { label: "Code Integrity", value: "TypeScript Strict", status: "VERIFIED" },
];

export function SecurityGrid() {
    return (
        <section id="security" className="py-24 px-6 bg-[#030504] border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

                {/* Header Side */}
                <div className="md:col-span-4">
                    <h2 className="text-xl font-bold text-white mb-4">Risk Mitigation</h2>
                    <p className="text-sm text-slate-400 font-light leading-relaxed max-w-sm">
                        Architecture is not just about what you build. <br />
                        It is about what you prevent.
                    </p>
                </div>

                {/* Data Side */}
                <div className="md:col-span-8">
                    <div className="border-t border-white/10">
                        {SECURITY_SPECS.map((spec, idx) => (
                            <div key={idx} className="grid grid-cols-12 py-4 border-b border-white/5 items-center">
                                <div className="col-span-4 text-xs font-mono text-slate-500 uppercase tracking-wider">
                                    {spec.label}
                                </div>
                                <div className="col-span-6 text-sm text-slate-300">
                                    {spec.value}
                                </div>
                                <div className="col-span-2 text-right">
                                    <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">
                                        {spec.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
