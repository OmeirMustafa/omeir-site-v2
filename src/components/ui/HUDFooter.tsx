"use client";

import React from "react";
import Link from "next/link";

export function HUDFooter() {
    return (
        <footer className="bg-[#030504] border-t border-white/5 py-12 px-6 relative z-10 text-xs font-mono">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">

                <div className="flex flex-col gap-2">
                    <span className="uppercase tracking-widest text-slate-500">System Record</span>
                    <span className="text-white font-bold tracking-tight">OMEIR MUSTAFA ARCHITECTURE</span>
                </div>

                <div className="flex gap-12 text-slate-500">
                    <div className="flex flex-col gap-2">
                        <span className="uppercase tracking-widest text-emerald-900">Status</span>
                        <span className="text-emerald-500">OPERATIONAL</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="uppercase tracking-widest text-emerald-900">Version</span>
                        <span>v4.3.0-GOV</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="uppercase tracking-widest text-emerald-900">Region</span>
                        <span>US-EAST-1</span>
                    </div>
                </div>

                <div className="flex gap-8">
                    <Link href="https://www.linkedin.com/in/omeir-mustafa-uddin/" className="text-slate-500 hover:text-white transition-colors uppercase tracking-widest">
                        LinkedIn
                    </Link>
                    <Link href="mailto:contact@omeir.com" className="text-slate-500 hover:text-white transition-colors uppercase tracking-widest">
                        Contact
                    </Link>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] text-slate-600 uppercase tracking-widest">
                <span>© 2025 Omeir Mustafa. All Rights Reserved.</span>
                <span>Security Hardened // Type-Safe</span>
            </div>
        </footer>
    );
}
