"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Copy, ExternalLink, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SmartContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SmartContactModal({ isOpen, onClose }: SmartContactModalProps) {
    const [copied, setCopied] = useState(false);
    const email = "kaziomeirmustafa@gmail.com"; // Updated per Master Prompt

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.4 }}
                        className="relative w-full max-w-md bg-black/95 border border-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.4)] p-8 overflow-hidden rounded-lg group"
                    >
                        {/* Scanline Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

                        {/* Corner Brackets */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                        {/* Diagnostics */}
                        <div className="flex justify-between text-[10px] font-mono text-cyan-500/70 mb-8 uppercase tracking-widest">
                            <span>SYSTEM: ONLINE</span>
                            <span>TARGET: LOCKED</span>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-cyan-500/50 hover:text-cyan-400 transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <h3 className="text-2xl font-mono font-bold text-white mb-8 text-center uppercase tracking-tight">
                            Establish <span className="text-cyan-400">Uplink</span>
                        </h3>

                        <div className="space-y-4 relative z-10">
                            {/* Option 1: Gmail */}
                            <a
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Project%20Inquiry`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 w-full p-4 border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all group/btn"
                            >
                                <div className="p-2 bg-cyan-500/10 rounded group-hover/btn:bg-cyan-400/20">
                                    <ExternalLink className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-bold text-slate-200 uppercase font-mono">INITIALIZE GMAIL PROTOCOL</div>
                                    <div className="text-xs text-cyan-500/60 font-mono">Open Secure Web Client</div>
                                </div>
                            </a>

                            {/* Option 2: Default Mail */}
                            <a
                                href={`mailto:${email}`}
                                className="flex items-center gap-4 w-full p-4 border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all group/btn"
                            >
                                <div className="p-2 bg-cyan-500/10 rounded group-hover/btn:bg-cyan-400/20">
                                    <Mail className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-bold text-slate-200 uppercase font-mono">LAUNCH SYSTEM DEFAULT</div>
                                    <div className="text-xs text-cyan-500/60 font-mono">Execute Local Mail App</div>
                                </div>
                            </a>

                            {/* Option 3: Copy */}
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-4 w-full p-4 border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all group/btn relative overflow-hidden"
                            >
                                <div className="p-2 bg-cyan-500/10 rounded group-hover/btn:bg-cyan-400/20">
                                    {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-cyan-400" />}
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-bold text-slate-200 uppercase font-mono">
                                        {copied ? "COORDINATES COPIED" : "COPY COORDINATES"}
                                    </div>
                                    <div className="text-xs text-cyan-500/60 font-mono">
                                        {copied ? "TRANSMISSION SECURE" : "Save to Clipboard"}
                                    </div>
                                </div>
                                {copied && (
                                    <div className="absolute inset-0 bg-green-500/10 border border-green-500/30 pointer-events-none" />
                                )}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
