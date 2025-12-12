"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Copy, Check } from "lucide-react";
import { MasterPanel } from "@/components/ui/MasterPanel";

// Structure Content
const SECTIONS = [
    {
        title: "1. EXECUTIVE SUMMARY",
        content: "High-level capability summary: Engineering-grade, AI-native architectures focused on RAG, secure SSR, low-latency edge delivery, and outcome-driven productization."
    },
    {
        title: "2. PLATFORM & TOOLS",
        custom: true,
        items: [
            { label: "Next.js 16.0.8", text: "Server Actions, Partial Prerendering, React 19 readiness." },
            { label: "Tailwind CSS v4", text: "High-performance JIT + smaller bundles." },
            { label: "Framer Motion 12", text: "Physics-based UI, spring/snap interactions." },
            { label: "Node 20+", text: "Stable runtime for edge and server." },
            { label: "Vercel Edge", text: "Low-latency global delivery." }
        ]
    },
    {
        title: "3. AI & DATA LAYER",
        custom: true,
        items: [
            { label: "Vector DB options", text: "Pinecone, Qdrant, Weaviate (implementations & tradeoffs)." },
            { label: "Embeddings", text: "OpenAI / Gemini Embed strategies." },
            { label: "Ingestion", text: "Chunking, metadata tagging, schema notes." },
            { label: "RAG orchestration", text: "Retrieval, re-ranking, prompt templates, safety layers." }
        ]
    },
    {
        title: "4. SECURITY & COMPLIANCE",
        content: "SSR & session policy, auth patterns, encryption-at-rest, rate-limits. Data privacy notes: PII handling, redaction strategies, consent capture."
    },
    {
        title: "5. UX & PERFORMANCE",
        content: "LCP optimisation, critical CSS, image strategy, lazy-loading interactive components. Accessibility: keyboard-first modals, reduced-motion, ARIA roles."
    },
    {
        title: "6. PRODUCT OFFERS",
        custom: true,
        items: [
            { label: "Founder Diagnostic ($249)", text: "48-hr UX & code health check." },
            { label: "Technical Audit ($3,500+)", text: "Architecture deep-dive & remediation roadmap." },
            { label: "Build Sprint ($15k+)", text: "MVP architecture & execution." },
            { label: "Fractional CPO ($6k/mo)", text: "Strategic product leadership." }
        ]
    },
    {
        title: "7. IMPLEMENTATION TIMELINES",
        content: "Typical turnaround windows: Audit (3–5 days), Sprint (2–6 weeks), Platform Build (8–14 weeks). Deliverables: design system, component library, deployment pipeline, RAG integration, documentation."
    }
];

export function CapabilityMatrixModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [copied, setCopied] = React.useState(false);

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
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
                        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col"
                    >
                        <MasterPanel title="FULL CAPABILITY MATRIX" className="bg-[#0b0b0d] flex-1 flex flex-col overflow-hidden max-h-[90vh]">

                            {/* Actions Header */}
                            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[var(--hairline)]">
                                <div className="text-xs font-mono text-[var(--accent-green)] tracking-widest">
                                    SYSTEM_CAPABILITY_OVERVIEW // V3.2
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-[var(--accent-green)]/10 rounded-full transition-colors">
                                    <X className="w-5 h-5 text-[var(--text-muted)]" />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 space-y-8">
                                {SECTIONS.map((section, idx) => (
                                    <div key={idx} className="space-y-3">
                                        <h3 className="text-[var(--text-primary)] font-bold text-lg font-mono">{section.title}</h3>

                                        {section.custom && section.items ? (
                                            <dl className="space-y-2">
                                                {section.items.map((item, i) => (
                                                    <div key={i} className="flex flex-col sm:flex-row sm:gap-4 text-sm">
                                                        <dt className="text-[var(--accent-green)] font-mono min-w-[150px]">{item.label}</dt>
                                                        <dd className="text-[var(--text-muted)]">{item.text}</dd>
                                                    </div>
                                                ))}
                                            </dl>
                                        ) : (
                                            <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-2xl border-l-2 border-[var(--accent-green)]/20 pl-4">
                                                {section.content}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Footer Actions */}
                            <div className="mt-6 pt-4 border-t border-[var(--hairline)] flex flex-wrap gap-4 justify-end">
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center gap-2 px-4 py-2 border border-[var(--hairline)] rounded text-xs font-mono text-[var(--text-muted)] hover:text-[#00ffa0] hover:border-[#00ffa0] transition-colors"
                                >
                                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                    {copied ? "COPIED" : "COPY MARKDOWN"}
                                </button>
                                <button
                                    onClick={handleDownload}
                                    className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-green)]/10 border border-[var(--hairline)] rounded text-xs font-mono text-[var(--accent-green)] hover:bg-[var(--accent-green)]/20 transition-colors"
                                >
                                    <Download className="w-3 h-3" />
                                    DOWNLOAD JSON
                                </button>
                            </div>

                        </MasterPanel>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
