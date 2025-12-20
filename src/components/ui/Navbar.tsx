"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, ArrowRight, Copy, Check, AppWindow } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle Copy Email
    const handleCopy = () => {
        navigator.clipboard.writeText("omeirmustafa.work@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"
                }`}
        >
            <div className="container-width">
                <div
                    className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 ${scrolled
                            ? "bg-white/70 backdrop-blur-xl shadow-sm border border-white/40"
                            : "bg-transparent"
                        }`}
                >
                    {/* LEFT: Logo */}
                    <Link href="/" className="text-lg font-bold tracking-tight text-slate-900 group">
                        Omeir Mustafa
                        <span className="text-slate-400 font-normal ml-2 hidden sm:inline-block group-hover:text-slate-600 transition-colors">
                            / Architect
                        </span>
                    </Link>

                    {/* CENTER: Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#approach">Approach</NavLink>
                        <NavLink href="#qa">Q&A</NavLink>
                    </div>

                    {/* RIGHT: Contact Now */}
                    <div className="relative">
                        <button
                            onClick={() => setContactOpen(!contactOpen)}
                            className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 active:scale-95 flex items-center gap-2"
                        >
                            Contact Now
                            <ArrowRight size={14} className={`transition-transform duration-300 ${contactOpen ? "rotate-90" : ""}`} />
                        </button>

                        {/* Smart Contact Dropdown */}
                        {contactOpen && (
                            <>
                                {/* Click outside closer */}
                                <div className="fixed inset-0 z-10" onClick={() => setContactOpen(false)} />

                                <div className="absolute top-full right-0 mt-3 w-64 bg-white/90 backdrop-blur-xl border border-white/50 rounded-xl shadow-2xl p-2 z-20 animate-fade-in flex flex-col gap-1 overflow-hidden">

                                    <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                                        Connect via
                                    </div>

                                    {/* Option 1: Gmail */}
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=omeirmustafa.work@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 transition-colors text-slate-700 text-sm font-medium"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                                            <Mail size={16} />
                                        </div>
                                        Gmail
                                    </a>

                                    {/* Option 2: Default App */}
                                    <a
                                        href="mailto:omeirmustafa.work@gmail.com"
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 transition-colors text-slate-700 text-sm font-medium"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                                            <AppWindow size={16} />
                                        </div>
                                        Email App
                                    </a>

                                    {/* Option 3: Copy */}
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 transition-colors text-slate-700 text-sm font-medium w-full text-left"
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${copied ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-500"}`}>
                                            {copied ? <Check size={16} /> : <Copy size={16} />}
                                        </div>
                                        {copied ? "Copied!" : "Copy Email"}
                                    </button>
                                </div>
                            </>
                        )}
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
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
        >
            {children}
        </Link>
    );
}
