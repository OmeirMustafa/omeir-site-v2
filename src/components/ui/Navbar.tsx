"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-5" : "py-8"
                }`}
        >
            <div className="container-width">
                <div
                    className={`flex items-center justify-between px-8 py-5 rounded-2xl transition-all duration-300 ${scrolled
                        ? "bg-white/70 backdrop-blur-xl shadow-sm border border-white/40"
                        : "bg-transparent"
                        }`}
                >
                    {/* LEFT: Logo */}
                    <Link
                        href="/"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            window.history.pushState({}, '', '/');
                        }}
                        className="relative group transition-all duration-300 flex flex-col justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A58FF] focus-visible:ring-offset-2 focus-visible:ring-offset-white/80"
                        aria-label="Omeir Mustafa — Digital & Product Architect"
                    >
                        {/* Primary Brand */}
                        <div className="relative z-10 text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-[#0A58FF] to-[#5FA8FF] text-transparent bg-clip-text group-hover:from-[#0A58FF] group-hover:to-[#0A58FF] transition-all duration-300">
                            Omeir Mustafa
                        </div>

                        {/* Secondary Subtitle */}
                        <div className="relative z-10 text-xs md:text-sm text-gray-400 group-hover:text-slate-500 transition-colors duration-300 font-medium">
                            Digital & Product Architect
                        </div>

                        {/* Hover Glow Background */}
                        <div className="absolute inset-0 -inset-x-4 -inset-y-2 blur-xl bg-[#0A58FF]/0 group-hover:bg-[#0A58FF]/10 transition-all duration-300 rounded-lg scale-90 opacity-0 group-hover:opacity-100 pointer-events-none" />
                    </Link>

                    {/* CENTER: Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#approach">Approach</NavLink>
                        <NavLink href="#qa">Q&A</NavLink>
                    </div>

                    {/* RIGHT: Contact Now */}
                    <div>
                        <button
                            onClick={() => {
                                const contactSection = document.getElementById('contact-section');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}
                            className="bg-slate-900 text-white px-7 py-3.5 rounded-xl text-[16px] font-medium hover:bg-[#0A58FF] transition-colors shadow-lg shadow-slate-900/10 active:scale-95 flex items-center gap-2 group min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A58FF] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        >
                            Contact Now
                            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}


function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="group relative px-4 py-2 text-[16px] md:text-[18px] font-medium tracking-[0.01em] text-[#5B6570] transition-colors duration-200 hover:text-[#0B1220] focus:outline-hidden focus:ring-2 focus:ring-[#0A58FF]/50 rounded-lg select-none cursor-pointer overflow-hidden"
        >
            <span className="relative z-10">{children}</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#0A58FF] to-[#5FA8FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
        </Link>
    );
}
