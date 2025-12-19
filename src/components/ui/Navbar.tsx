"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                    ? "bg-slate-900/70 backdrop-blur-md border-white/5 py-4 shadow-lg shadow-black/20"
                    : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

                {/* Identity */}
                <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-blue-500 transition-colors">
                    Omeir.
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#work" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                        Work
                    </Link>
                    <Link href="#process" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                        Process
                    </Link>
                    <Link href="#about" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                        About
                    </Link>
                </nav>

                {/* CTA */}
                <Link
                    href="#contact"
                    className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.03]"
                >
                    Start a Project
                </Link>

                {/* Mobile Menu Trigger (Placeholder) */}
                <button className="md:hidden text-white p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

            </div>
        </header>
    );
}
