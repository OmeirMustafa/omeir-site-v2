"use client";

import React, { useEffect, useState } from "react";
import { Mail, AppWindow, Copy, Check, X } from "lucide-react";

interface SmartContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SmartContactModal({ isOpen, onClose }: SmartContactModalProps) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Lock scroll
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    // Focus trap could be implemented here, simplified for this snippet
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const handleCopy = () => {
        navigator.clipboard.writeText("omeirmustafa.work@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-md bg-white/90 backdrop-blur-xl border border-white/50 rounded-xl shadow-2xl p-6 md:p-8 animate-[scaleIn_0.32s_cubic-bezier(0.22,1,0.36,1)_forwards]">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
                >
                    <X size={20} />
                </button>

                <h3 className="text-xl font-bold text-slate-900 mb-6 pr-8 leading-tight">
                    Every week you wait costs qualified clients — choose how to reach me.
                </h3>

                <div className="space-y-3">
                    {/* Option 1: Gmail */}
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=omeirmustafa.work@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 px-4 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
                    >
                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                            <Mail size={18} />
                        </div>
                        <span className="font-bold text-slate-700 group-hover:text-blue-700">Open in Gmail</span>
                    </a>

                    {/* Option 2: Default */}
                    <a
                        href="mailto:omeirmustafa.work@gmail.com"
                        className="flex items-center gap-4 px-4 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
                    >
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                            <AppWindow size={18} />
                        </div>
                        <span className="font-bold text-slate-700 group-hover:text-blue-700">Open default mail client</span>
                    </a>

                    {/* Option 3: Copy */}
                    <button
                        onClick={handleCopy}
                        className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group text-left relative overflow-hidden"
                    >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors group-hover:scale-110 ${copied ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-500"}`}>
                            {copied ? <Check size={18} /> : <Copy size={18} />}
                        </div>
                        <span className="font-bold text-slate-700 group-hover:text-blue-700">
                            {copied ? "Email copied" : "Copy email address"}
                        </span>

                        {/* Micro-toast overlay if desired, or just text change. Requirement said "show a micro-toast... that auto-dismisses". Doing text change + toast logic. */}
                        {copied && (
                            <div className="absolute inset-0 bg-green-500 text-white flex items-center justify-center font-bold animate-fade-in">
                                Email Copied
                            </div>
                        )}
                    </button>
                </div>
            </div>

            <style jsx global>{`
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </div>
    );
}
