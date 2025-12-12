"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check } from "lucide-react";
import { HoloPanel } from "@/components/ui/HoloPanel";

export function IntelligenceBriefModal({ isOpen, onClose, data }: { isOpen: boolean; onClose: () => void; data: { title: string; content: string } }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`${data.title}\n\n${data.content}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 10 }}
                        className="relative w-full max-w-2xl mt-8" /* Added margin top to clear any top overlap */
                    >
                        <HoloPanel className="p-8 md:p-12 relative flex flex-col pt-12">
                            {/* Close Button - Top Center as requested, absolute relative to modal body */}
                            <div className="absolute top-0 left-0 right-0 flex justify-center -mt-6"> {/* Negative margin to pull it up */}
                                <button
                                    onClick={onClose}
                                    aria-label="Close"
                                    className="bg-[var(--bg-deep)] border border-[var(--hairline)] text-[var(--accent-green)] hover:text-white hover:bg-[var(--accent-green)] hover:border-[var(--accent-green)] transition-colors rounded-full p-2 shadow-[0_0_20px_var(--halo)] z-50 flex items-center justify-center"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="space-y-6 mt-2">
                                <div>
                                    <div className="text-[10px] font-mono text-[var(--accent-green)] tracking-widest mb-2">INTELLIGENCE BRIEF</div>
                                    <h3 className="text-2xl font-bold text-[var(--text-primary)] leading-tight">{data.title}</h3>
                                </div>

                                <div className="space-y-4 text-[var(--text-muted)] leading-relaxed text-sm md:text-base border-l-2 border-[var(--accent-green)]/20 pl-6 h-auto max-h-[60vh] overflow-y-auto custom-scrollbar">
                                    {data.content.split('\n\n').map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>

                                <div className="pt-6 flex justify-end">
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center gap-2 text-xs font-mono text-[var(--accent-green)] hover:underline underline-offset-4"
                                    >
                                        {copied ? "COPIED TO CLIPBOARD" : "COPY BRIEF"}
                                        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                    </button>
                                </div>
                            </div>
                        </HoloPanel>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
