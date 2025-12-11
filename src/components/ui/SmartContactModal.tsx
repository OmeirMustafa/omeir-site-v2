"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Copy, ExternalLink, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { MOTION } from "@/config/motion";

interface SmartContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SmartContactModal({ isOpen, onClose }: SmartContactModalProps) {
    const [copied, setCopied] = useState(false);
    const email = "kaziomeirmustafa@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
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
                        initial={{ scale: 0.92, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.92, opacity: 0 }}
                        transition={MOTION.snap}
                        className="relative w-full max-w-md bg-black/90 border border-cyan-400/50 shadow-[0_0_50px_rgba(34,211,238,0.15)] p-8 overflow-hidden rounded-lg group"
                    >
                        {/* Scanline Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none animate-scanline" />
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none" />

                        {/* Corner Brackets */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />

                        {/* Diagnostics / Status Chips */}
                        <div className="flex justify-between items-center mb-8 relative z-20">
                            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/30">
                                SYSTEM: ENCRYPTED
                            </span>
                            <button
                                onClick={onClose}
                                className="text-cyan-500/50 hover:text-cyan-400 transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Target Locked Chip */}
                        <div className="absolute bottom-2 right-4 text-[9px] font-mono text-cyan-500/50 uppercase">
                            TARGET: LOCKED
                        </div>

                        <div className="text-center mb-8 relative z-20">
                            <h3 className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white uppercase tracking-wider mb-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                                CONTACT PROTOCOL
                            </h3>
                            <p className="text-sm text-cyan-500/60 font-mono">
                                Securing connection channel...
                            </p>
                        </div>

                        <div className="space-y-3 relative z-20 mb-6">
                            {/* Option 1: Gmail */}
                            <a
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Project%20Inquiry`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn flex items-center justify-center gap-3 w-full py-4 bg-cyan-500 text-black font-bold font-mono text-sm uppercase tracking-wide hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all transform hover:-translate-y-0.5 rounded-sm relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    INITIALIZE GMAIL PROTOCOL <ExternalLink size={14} />
                                </span>
                                {/* Glitch Sheen */}
                                <div className="absolute inset-0 bg-white/40 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-300 ease-linear skew-x-12" />
                            </a>

                            {/* Option 2: Default Mail */}
                            <a
                                href={`mailto:${email}`}
                                className="group/btn flex items-center justify-center gap-3 w-full py-4 border border-cyan-500/50 bg-cyan-950/20 text-cyan-400 font-bold font-mono text-sm uppercase tracking-wide hover:bg-cyan-950/40 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all transform hover:-translate-y-0.5 rounded-sm relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    LAUNCH SYSTEM DEFAULT <Mail size={14} />
                                </span>
                            </a>

                            {/* Option 3: Copy */}
                            <button
                                onClick={handleCopy}
                                className="flex items-center justify-center gap-3 w-full py-4 border border-cyan-500/30 bg-transparent text-cyan-500/80 font-mono text-sm uppercase tracking-wide hover:text-cyan-400 hover:border-cyan-500/60 transition-all rounded-sm hover:-translate-y-0.5"
                            >
                                COPY COORDINATES <Copy size={14} />
                            </button>
                        </div>

                        {/* HUD Toast */}
                        <AnimatePresence>
                            {copied && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="absolute bottom-10 left-0 right-0 text-center pointer-events-none z-30"
                                >
                                    <div className="inline-block px-4 py-2 bg-cyan-950/90 border border-cyan-500/50 rounded-sm text-cyan-400 text-xs font-mono shadow-[0_0_20px_rgba(34,211,238,0.4)] backdrop-blur-md">
                                        <span className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                            COORDINATES COPIED — SECURE
                                        </span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
