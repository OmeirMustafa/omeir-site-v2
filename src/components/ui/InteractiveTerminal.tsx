"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, ChevronRight, Play, FastForward, SkipForward } from "lucide-react";
import { cn } from "@/lib/utils";

const PRESETS = [
    {
        id: "rag",
        label: "What is the RAG architecture?",
        query: "Query: Explain RAG Architecture protocol.",
        answer: "RAG (Retrieval-Augmented Generation) combines large language models with structured retrieval systems. It grounds AI responses in verified data sources, enabling intelligent, accurate, and secure outputs for real business use."
    },
    {
        id: "secure",
        label: "How do you secure vector DBs?",
        query: "Query: Vector Database Security Protocols.",
        answer: "Through encrypted storage, server-side retrieval, access controls, and private networking. Data is never exposed client-side, ensuring enterprise-grade security and compliance."
    },
    {
        id: "ssr",
        label: "Explain SSR + Edge benefits",
        query: "Query: Analysis of SSR/Edge latency benefits.",
        answer: "Server-side rendering and edge execution improve performance, SEO, and reliability. Pages load faster, sensitive logic stays protected, and systems scale globally with low latency."
    },
    {
        id: "cost",
        label: "What are the LLM cost controls?",
        query: "Query: LLM Inference Cost Optimization Strategies.",
        answer: "Usage is managed through token limits, intelligent caching, batching, and model selection strategies—keeping systems efficient without sacrificing output quality."
    },
    {
        id: "crm",
        label: "How do you integrate CRM data?",
        query: "Query: CRM Data Ingestion & Vectorization pipeline.",
        answer: "Using secure APIs and server-side pipelines that normalize and synchronize data from tools like HubSpot or Salesforce—without exposing sensitive information."
    },
    {
        id: "deploy",
        label: "Deployment Architecture Specs?",
        query: "Query: Visualize Production Deployment Topology.",
        answer: "Modern Next.js architecture deployed on scalable infrastructure with secure APIs, optimized caching, and automated delivery pipelines built for long-term growth."
    }
];

export function InteractiveTerminal() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [typedText, setTypedText] = useState("");
    const [speed, setSpeed] = useState(35); // ms per char
    const [isTyping, setIsTyping] = useState(false);
    const [isReducedMotion, setIsReducedMotion] = useState(false);

    // Auto-scroll ref
    const outputRef = useRef<HTMLDivElement>(null);

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
                setTypedText(preset.answer.slice(0, index + 1));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [activeId, speed, isReducedMotion]);

    return (
        // Adjusted height for desktop to be taller/wider as requested
        <div className="w-full h-[500px] md:h-[600px] flex flex-col md:flex-row gap-6">
            {/* Left: Command List */}
            <div className="w-full md:w-1/3 flex flex-col gap-3 h-auto md:h-full shrink-0">
                <div className="text-[10px] font-mono text-[var(--accent-green)]/50 uppercase tracking-widest mb-2 shrink-0">
                    Available Commands
                </div>
                {PRESETS.map((cmd) => (
                    <button
                        key={cmd.id}
                        aria-pressed={activeId === cmd.id}
                        onClick={() => setActiveId(cmd.id)}
                        className={cn(
                            "group relative text-left px-4 py-3 rounded border transition-all duration-300 font-mono text-xs w-full flex items-center justify-between shrink-0",
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
            <div className="flex-1 relative rounded-xl overflow-hidden bg-black/95 border border-[var(--hairline)] shadow-inner flex flex-col h-full will-change-transform backface-hidden" style={{ transform: "translateZ(0)" }}>
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-[var(--accent-green)]/5 border-b border-[var(--hairline)] shrink-0">
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

                {/* Terminal Body - Structurally Fixed for Centering & Overflow */}
                {/* 
                   - flex-1: Takes remaining height.
                   - flex flex-col justify-center items-center: Vertically and horizontally centers content.
                   - overflow-hidden: Prevents scrollbar on the *container*, we strictly scroll the *content* block if needed.
                */}
                <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-10 overflow-hidden relative">

                    {/* Content Container - Scrollable if content exceeds bounds */}
                    <div
                        ref={outputRef}
                        className="w-full max-h-full overflow-y-auto custom-scrollbar flex flex-col items-center justify-center"
                    >
                        {!activeId ? (
                            <div className="opacity-50 space-y-2 text-center font-mono text-sm text-[var(--text-primary)]">
                                <p>&gt; SYSTEM INITIALIZED...</p>
                                <p>&gt; WAITING FOR INPUT...</p>
                                <p className="animate-pulse">&gt; _</p>
                            </div>
                        ) : (
                            <div className="w-full max-w-2xl text-center space-y-6">
                                {/* Query Header */}
                                <div className="text-[var(--accent-green)] opacity-70 border-b border-[var(--hairline)] pb-2 inline-block font-mono text-xs md:text-sm">
                                    &gt; {PRESETS.find(p => p.id === activeId)?.query}
                                </div>

                                {/* Answer Block */}
                                <div
                                    className="font-mono text-sm md:text-base leading-[1.6] text-[var(--text-primary)] whitespace-pre-wrap break-words pl-[0.75ch]"
                                    style={{ transform: "translateZ(0)" }}
                                >
                                    {typedText}
                                    <span className="text-[var(--accent-green)] font-bold animate-pulse">_</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
