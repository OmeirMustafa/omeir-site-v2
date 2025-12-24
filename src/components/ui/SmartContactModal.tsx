"use client";

import React, { useEffect, useState } from "react";
import { Mail, AppWindow, Copy, Check, X } from "lucide-react";

interface SmartContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SmartContactModal({ isOpen, onClose }: SmartContactModalProps) {
    const [copied, setCopied] = useState(false);

    // Safety check for env var
    const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "omeirmustafa.work@gmail.com";

    useEffect(() => {
        if (!process.env.NEXT_PUBLIC_CONTACT_EMAIL) {
            console.warn("⚠️ Setup Warning: NEXT_PUBLIC_CONTACT_EMAIL is missing. Falling back to default.");
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const handleCopy = () => {
        navigator.clipboard.writeText(CONTACT_EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Dark Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal - Dark Gradient Glass */}
            <div className="relative w-full max-w-md bg-gradient-to-br from-[#0A58FF] to-[#5FA8FF] border border-white/20 rounded-2xl shadow-2xl p-6 md:p-8 animate-[scaleIn_var(--duration-modal)_var(--ease-entrance)_forwards] overflow-hidden">

                {/* Internal Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-20 p-2"
                    aria-label="Close modal"
                >
                    <X size={20} />
                </button>

                <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight text-left">
                        Every week you wait costs qualified clients — choose how to reach me.
                    </h3>

                    <div className="space-y-3">
                        {/* Option 1: Gmail */}
                        <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 px-4 py-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all group backdrop-blur-md"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                <Mail size={18} />
                            </div>
                            <span className="font-bold text-white pointer-events-none">Open in Gmail</span>
                        </a>

                        {/* Option 2: Default */}
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="flex items-center gap-4 px-4 py-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all group backdrop-blur-md"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                <AppWindow size={18} />
                            </div>
                            <span className="font-bold text-white pointer-events-none">Open default mail client</span>
                        </a>

                        {/* Option 3: Copy */}
                        <button
                            onClick={handleCopy}
                            className="w-full flex items-center gap-4 px-4 py-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all group text-left relative overflow-hidden backdrop-blur-md"
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors group-hover:scale-110 ${copied ? "bg-emerald-500 text-white" : "bg-white/10 text-white"}`}>
                                {copied ? <Check size={18} /> : <Copy size={18} />}
                            </div>
                            <span className="font-bold text-white pointer-events-none">
                                Copy email address
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Toast Notification - Bottom Center */}
            {copied && (
                <div role="status" className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 z-[150] animate-fade-up">
                    <Check size={16} className="text-emerald-400" />
                    <span className="font-medium text-sm">Email copied</span>
                </div>
            )}
        </div>
    );
}
