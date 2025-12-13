"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, ChevronRight, Play, FastForward, SkipForward } from "lucide-react";
import { cn } from "@/lib/utils";

const PRESETS = [
    { id: "rag", label: "What is the RAG architecture?", query: "Query: Explain RAG Architecture protocol.", answer: "RAG (Retrieval-Augmented Generation) combines an LLM with a secure vector database. The system retrieves relevant company data, injects it into the model’s context, and produces grounded, verifiable outputs. Eliminates hallucinations and enables private, domain-specific AI workflows." },
    { id: "secure", label: "How do you secure vector DBs?", query: "Query: Vector Database Security Protocols.", answer: "Use encrypted embeddings, private VPC networks, API key rotation, role-based access control, and isolated indexes. Never expose embeddings publicly. All retrieval pipelines run through server-side authorization." },
    { id: "ssr", label: "Explain SSR + Edge benefits", query: "Query: Analysis of SSR/Edge latency benefits.", answer: "Next.js SSR + Edge improves performance, SEO, security, and reliability. Sensitive logic executes server-side. Edge routing reduces latency and enables real-time personalization at global scale." },
    { id: "cost", label: "What are the LLM cost controls?", query: "Query: LLM Inference Cost Optimization Strategies.", answer: "Token budgeting, response-length constraints, caching embeddings, rate limiting, batching requests, and model-tier switching. Reduces operational cost without affecting intelligence output." },
    { id: "crm", label: "How to integrate CRM data?", query: "Query: CRM Data Ingestion & Vectorization pipeline.", answer: "Use secure API bridges or webhooks. Normalize fields, sync contacts, map pipelines, and run ingestion through a safe server layer. No client-side exposure. Built for HubSpot/Salesforce compatibility." },
    { id: "deploy", label: "Deployment Architecture Specs?", query: "Query: Visualize Production Deployment Topology.", answer: "Next.js 14 stack running on Vercel with edge caching, secure API layers, isolated server actions, rate-limited RAG endpoints, encrypted DB storage, and automated CI/CD pipelines." }
];

export function InteractiveTerminal() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [typedText, setTypedText] = useState("");
    const [speed, setSpeed] = useState(35); // ms per char
    const [isTyping, setIsTyping] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const [isReducedMotion, setIsReducedMotion] = useState(false);

    // Detect reduced motion
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setIsReducedMotion(mediaQuery.matches);
        const handleChange = () => setIsReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Typing effect
    useEffect(() => {
        if (!activeId) return;

        const preset = PRESETS.find(p => p.id === activeId);
        if (!preset) return;

        setTypedText("");

        if (isReducedMotion) {
            setTypedText(preset.answer);
            return;
        }

        setIsTyping(true);
        let index = 0;

        const interval = setInterval(() => {
            if (index < preset.answer.length) {
                setTypedText((prev) => prev + preset.answer.charAt(index));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [activeId, speed, isReducedMotion]);

    // Cursor blink
    useEffect(() => {
        const interval = setInterval(() => setShowCursor((prev) => !prev), 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full min-h-[450px] flex flex-col md:flex-row gap-6">
            {/* Left: Command List */}
            <div className="w-full md:w-1/3 flex flex-col gap-3">
                <div className="text-[10px] font-mono text-[var(--accent-green)]/50 uppercase tracking-widest mb-2">
                    Available Commands
                </div>
                {PRESETS.map((cmd) => (
                    <button
                        key={cmd.id}
                        aria-pressed={activeId === cmd.id}
                        onClick={() => setActiveId(cmd.id)}
                        className={cn(
                            "group relative text-left px-4 py-3 rounded border transition-all duration-300 font-mono text-xs w-full flex items-center justify-between",
                            activeId === cmd.id
                                ? "bg-[var(--accent-green)]/10 border-[var(--accent-green)] text-[var(--accent-green)] shadow-[0_0_15px_rgba(0,255,160,0.1)]"
                                : "bg-[var(--bg-deep)] border-[var(--hairline)] text-[var(--text-muted)] hover:border-[var(--accent-green)]/50 hover:text-[var(--text-primary)]"
                        )}
                    >
                        <span className="truncate">{cmd.label}</span>
                        <ChevronRight className={cn("w-3 h-3 transition-transform shrink-0", activeId === cmd.id ? "rotate-90" : "group-hover:translate-x-1")} />
                    </button>
                ))}
            </div>

            {/* Right: Terminal Output */}
            <div className="flex-1 relative rounded-xl overflow-hidden bg-black/95 border border-[var(--hairline)] shadow-inner flex flex-col min-h-[300px] md:min-h-0">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-[var(--accent-green)]/5 border-b border-[var(--hairline)]">
                    <div className="flex items-center gap-2">
                        <Terminal className="w-3 h-3 text-[var(--accent-green)]" />
                        <span className="text-[10px] font-mono text-[var(--accent-green)] tracking-widest">SECURE_AI_MODULE // ONLINE</span>
                    </div>
                    {/* Controls */}
                    <div className="flex gap-2">
                        <button onClick={() => setSpeed(70)} className={cn("p-1 rounded hover:bg-[var(--accent-green)]/20 text-[var(--text-muted)]", speed === 70 && "text-[var(--accent-green)]")} title="Normal"><Play className="w-3 h-3" /></button>
                        <button onClick={() => setSpeed(35)} className={cn("p-1 rounded hover:bg-[var(--accent-green)]/20 text-[var(--text-muted)]", speed === 35 && "text-[var(--accent-green)]")} title="Fast"><FastForward className="w-3 h-3" /></button>
                        <button onClick={() => setSpeed(10)} className={cn("p-1 rounded hover:bg-[var(--accent-green)]/20 text-[var(--text-muted)]", speed === 10 && "text-[var(--accent-green)]")} title="Instant"><SkipForward className="w-3 h-3" /></button>
                    </div>
                </div>

                {/* Terminal Body */}
                <div aria-live="polite" className="p-6 font-mono text-sm leading-relaxed text-[var(--text-primary)] flex-1 overflow-y-auto custom-scrollbar whitespace-pre-wrap break-words">
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
