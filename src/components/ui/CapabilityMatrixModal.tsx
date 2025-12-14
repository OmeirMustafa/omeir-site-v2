"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Copy, Check } from "lucide-react";
import { MasterPanel } from "@/components/ui/MasterPanel";

// Structure Content
const SECTIONS = [
    {
        title: "1. Brand Intelligence Layer",
        content: "Research-driven brand identity. Visual language systems. Positioning & messaging frameworks. Industry adaptation for ANY business type (restaurant, medical, legal, SaaS, consulting, fitness, etc.)"
    },
    {
        title: "2. Premium Web Architecture",
        custom: true,
        items: [
            { label: "Custom Next.js 16 builds", text: "Latest framework features for optimal performance." },
            { label: "Responsive dark-mode systems", text: "Adaptive theming for visual comfort and style." },
            { label: "Component architecture", text: "Modular design meant for scalability." },
            { label: "High-performance SEO", text: "Technical SEO optimization for search visibility." },
            { label: "Enterprise-grade UI motion", text: "Fluid interactions using Framer Motion 12." }
        ]
    },
    {
        title: "3. Intelligent Systems Integration",
        content: "Automated content pipelines. Smart UX flows. On-site micro-interactions. Modular, upgrade-ready internal tools. Foundation for future AI expansion."
    },
    {
        title: "4. Security & Compliance Layer",
        content: "Secure frontend practices. SSR-first architecture. Data minimization principles. Industry-compliant flows. Zero third-party exposure in critical components."
    },
    {
        title: "5. Operational Performance",
        content: "Faster page loads with LCP optimization. Reduced layout shifts (CLS). High accessibility scores. Technical debt reduction for maintainability. Clean, maintainable architecture."
    }
];

export function CapabilityMatrixModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [copied, setCopied] = React.useState(false);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            // Lock body scroll
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    const handleCopy = () => {
        const text = SECTIONS.map(s => {
            if (s.custom) {
                return `${s.title}\n${s.items?.map(i => `- ${i.label}: ${i.text}`).join('\n')}`;
            }
            return `${s.title}\n${s.content}`;
        }).join('\n\n');

        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(SECTIONS, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "capability_matrix.json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="relative w-full max-w-4xl h-auto max-h-[85vh] md:h-[85vh] flex flex-col pointer-events-auto"
                    >
                        <MasterPanel title="FULL CAPABILITY MATRIX" className="bg-[#0b0b0d] flex-1 flex flex-col overflow-hidden h-full p-4 md:p-12">
                            <div className="flex flex-col h-full overflow-hidden">
                                {/* Sticky Header */}
                                <div className="flex-none flex justify-between items-center mb-6 pb-4 border-b border-[var(--hairline)]">
                                    <div id="modal-title" className="text-[10px] md:text-xs font-mono text-[var(--accent-green)] tracking-widest">
                                        SYSTEM_CAPABILITY_OVERVIEW // V4.0
                                    </div>
                                    <button onClick={onClose} aria-label="Close" className="p-2 hover:bg-[var(--accent-green)]/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)]">
                                        <X className="w-5 h-5 text-[var(--text-muted)]" />
                                    </button>
                                </div>

                                {/* Scrollable Body */}
                                <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 space-y-10 min-h-0 pb-20">
                                    {SECTIONS.map((section, idx) => (
                                        <div key={idx} className="space-y-4">
                                            <h3 className="text-[var(--text-primary)] font-bold text-lg font-mono tracking-tight uppercase border-l-2 border-[var(--accent-green)] pl-3">
                                                {section.title}
                                            </h3>

                                            {section.custom && section.items ? (
                                                <dl className="grid sm:grid-cols-2 gap-4 text-sm pl-4">
                                                    {section.items.map((item, i) => (
                                                        <div key={i} className="flex flex-col gap-1">
                                                            <dt className="text-[var(--accent-green)] font-mono text-xs uppercase opacity-80">{item.label}</dt>
                                                            <dd className="text-[var(--text-muted)] leading-snug">{item.text}</dd>
                                                        </div>
                                                    ))}
                                                </dl>
                                            ) : (
                                                <p className="text-[var(--text-muted)] text-sm leading-relaxed pl-4 max-w-3xl">
                                                    {section.content}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Sticky Footer */}
                                <div className="flex-none mt-6 pt-4 border-t border-[var(--hairline)] flex flex-wrap gap-4 justify-end bg-[#0b0b0d]">
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center gap-2 px-4 py-2 border border-[var(--hairline)] rounded text-xs font-mono text-[var(--text-muted)] hover:text-[#00ffa0] hover:border-[#00ffa0] transition-colors focus:ring-2 focus:ring-[var(--accent-green)]"
                                    >
                                        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                        {copied ? "COPIED" : "COPY MARKDOWN"}
                                    </button>
                                    <button
                                        onClick={handleDownload}
                                        className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-green)]/10 border border-[var(--hairline)] rounded text-xs font-mono text-[var(--accent-green)] hover:bg-[var(--accent-green)]/20 transition-colors focus:ring-2 focus:ring-[var(--accent-green)]"
                                    >
                                        <Download className="w-3 h-3" />
                                        DOWNLOAD JSON
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
