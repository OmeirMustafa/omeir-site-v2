"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Copy, ShieldCheck } from "lucide-react";
import { MasterPanel } from "@/components/ui/MasterPanel"; // Reusing MasterPanel logic nicely inside if possible, or manual custom styles to match

export function SmartContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [copied, setCopied] = useState(false);
    const email = "omeirmustafa.work@gmail.com";

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
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-md"
                    >
                        <MasterPanel title="SECURE_UPLINK" className="bg-[var(--bg-deep)]/95 shadow-[0_0_60px_var(--halo)]">
                            <div className="space-y-8">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-mono font-bold text-[var(--text-primary)] tracking-widest uppercase mb-1">
                                            ESTABLISH UPLINK
                                        </h3>
                                        <div className="text-[10px] text-[var(--accent-green)] font-mono flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-[var(--accent-green)] rounded-full animate-blink" />
                                            SECURE CHANNEL READY
                                        </div>
                                    </div>
                                    <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300">
                                        <X className="text-[var(--text-muted)] hover:text-[var(--accent-green)]" />
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {/* Option 1: Gmail */}
                                    <a
                                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Project%20Inquiry`}
                                        target="_blank"
                                        className="flex items-center justify-between p-4 bg-[var(--accent-green)]/10 border border-[var(--accent-green)] hover:bg-[var(--accent-green)]/20 transition-all group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <ShieldCheck className="text-[var(--accent-green)] w-5 h-5" />
                                            <div className="text-left">
                                                <div className="text-sm font-bold text-[var(--text-primary)] font-mono">INITIALIZE GMAIL</div>
                                            </div>
                                        </div>
                                    </a>

                                    {/* Option 2: Default Mail */}
                                    <a
                                        href={`mailto:${email}`}
                                        className="flex items-center justify-between p-4 border border-[var(--hairline)] hover:border-[var(--accent-green)] transition-all group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <Mail className="text-[var(--text-muted)] w-5 h-5 group-hover:text-[var(--accent-green)]" />
                                            <div className="text-left">
                                                <div className="text-sm font-bold text-[var(--text-muted)] group-hover:text-[var(--text-primary)] font-mono">SYSTEM DEFAULT</div>
                                            </div>
                                        </div>
                                    </a>

                                    {/* Option 3: Copy */}
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center justify-between p-4 border border-[var(--hairline)] hover:border-[var(--accent-green)] hover:bg-[var(--accent-green)]/5 transition-all w-full group relative overflow-hidden"
                                    >
                                        <div className="flex items-center gap-4 relative z-10">
                                            <Copy className="text-[var(--text-muted)] w-5 h-5 group-hover:text-[var(--accent-green)]" />
                                            <div className="text-left">
                                                <div className="text-sm font-bold text-[var(--text-muted)] group-hover:text-[var(--text-primary)] font-mono">
                                                    {copied ? "COORDINATES ACQUIRED" : "COPY COORDINATES"}
                                                </div>
                                            </div>
                                        </div>
                                        {copied && (
                                            <div className="absolute inset-0 bg-[var(--accent-green)]/20" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </MasterPanel>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
