"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ChevronRight, Play, Pause } from "lucide-react";
import { MasterPanel } from "@/components/ui/MasterPanel";

const PRESETS = [
    { id: "rag", label: "What is the RAG architecture?", query: "Query: Explain RAG Architecture protocol." },
    { id: "secure", label: "How do you secure vector DBs?", query: "Query: Vector Database Security Protocols." },
    { id: "ssr", label: "Explain SSR + Edge benefits", query: "Query: Analysis of SSR/Edge latency benefits." },
    { id: "cost", label: "What are the LLM cost controls?", query: "Query: LLM Inference Cost Optimization Strategies." },
    { id: "crm", label: "How to integrate CRM data?", query: "Query: CRM Data Ingestion & Vectorization pipeline." }
];

const ANSWERS: Record<string, string> = {
    rag: "RAG (Retrieval Augmented Generation) combines a vectorized knowledge layer with an LLM. We ingest documents, chunk them with metadata, embed them with a production-grade embedder, and store vectors in a vector DB. A retriever selects top-k candidates, which are re-ranked and provided as context to the model. This allows the LLM to answer with grounded facts and reduces hallucination.",
    secure: "Protect vectors like any sensitive store: encrypt at rest, restrict network access with private VPCs or IP allowlists, use per-tenant keys, obfuscate PII during ingest, and implement fine-grained access controls on retrieval endpoints. Add request auditing and rate-limiting for defensive posture.",
    ssr: "Server Side Rendering with edge delivery reduces Time-to-First-Byte and improves perceived performance. Edge middleware lets you tailor content per-region and run server actions close to users. Together they give faster initial loads and enable low-latency dynamic features suitable for enterprise dashboards.",
    cost: "Control costs by using mixed-model strategies (smaller models for retrieval/context processing, large models for final synthesis), prompt minimization, response length caps, caching frequent queries, and telemetry to identify expensive patterns. Consider batching and asynchronous jobs for analytics-heavy workloads.",
    crm: "Extract normalized records, map important fields to metadata tags, chunk long documents (notes, transcripts), create embeddings with a stable schema, store them in the vector DB with campaign/owner tags, and implement retrieval filters to scope context by account or timeframe. Secure connectors and rate-limited sync jobs are standard."
};

export function InteractiveTerminal() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [typedText, setTypedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    // Typing effect logic
    useEffect(() => {
        if (!activeId) return;

        const fullText = ANSWERS[activeId];
        setTypedText("");
        setIsTyping(true);

        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setTypedText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(interval);
            }
        }, 20); // Fast typing speed

        return () => clearInterval(interval);
    }, [activeId]);

    // Cursor blink
    useEffect(() => {
        const interval = setInterval(() => setShowCursor((prev) => !prev), 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full min-h-[400px] flex flex-col md:flex-row gap-6">
            {/* Left: Command List */}
            <div className="w-full md:w-1/3 flex flex-col gap-3">
                <div className="text-[10px] font-mono text-[var(--accent-green)]/50 uppercase tracking-widest mb-2">
                    Available Commands
                </div>
                {PRESETS.map((cmd) => (
                    <button
                        key={cmd.id}
                        onClick={() => setActiveId(cmd.id)}
                        className={`group relative text-left px-4 py-3 rounded border transition-all duration-300 font-mono text-xs ${activeId === cmd.id
                                ? "bg-[var(--accent-green)]/10 border-[var(--accent-green)] text-[var(--accent-green)] shadow-[0_0_15px_rgba(0,255,160,0.1)]"
                                : "bg-[var(--bg-deep)] border-[var(--hairline)] text-[var(--text-muted)] hover:border-[var(--accent-green)]/50 hover:text-[var(--text-primary)]"
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <ChevronRight className={`w-3 h-3 transition-transform ${activeId === cmd.id ? "rotate-90" : "group-hover:translate-x-1"}`} />
                            {cmd.label}
                        </div>
                    </button>
                ))}
            </div>

            {/* Right: Terminal Output */}
            <div className="flex-1 relative rounded-xl overflow-hidden bg-black/80 border border-[var(--hairline)] shadow-inner">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-[var(--accent-green)]/5 border-b border-[var(--hairline)]">
                    <div className="flex items-center gap-2">
                        <Terminal className="w-3 h-3 text-[var(--accent-green)]" />
                        <span className="text-[10px] font-mono text-[var(--accent-green)] tracking-widest">SECURE_AI_MODULE // TTY1</span>
                    </div>
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/20" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                        <div className="w-2 h-2 rounded-full bg-green-500/20" />
                    </div>
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-sm leading-relaxed text-[var(--text-primary)] h-[350px] overflow-y-auto custom-scrollbar">
                    {!activeId ? (
                        <div className="opacity-50 space-y-2">
                            <p>&gt; SYSTEM INITIALIZED...</p>
                            <p>&gt; WAITING FOR INPUT...</p>
                            <p className="animate-pulse">&gt; _</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="text-[var(--accent-green)] opacity-70 border-b border-[var(--hairline)] pb-2 mb-4">
                                &gt; {PRESETS.find(p => p.id === activeId)?.query}
                            </div>
                            <div>
                                {typedText}
                                {showCursor && <span className="text-[var(--accent-green)] font-bold">_</span>}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
