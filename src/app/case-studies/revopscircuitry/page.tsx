"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle, Cpu, Shield, Zap, Layout, Globe, Code, ArrowRight } from "lucide-react";
import { QuantumCard } from "@/components/ui/QuantumCard";
import SmartContactModal from "@/components/ui/SmartContactModal";
import { DiagramHUD } from "@/components/ui/DiagramHUD";
import { RAGPipelineDiagram } from "@/components/diagrams/RAGPipelineDiagram";
import { NextJsArchitectureDiagram } from "@/components/diagrams/NextJsArchitectureDiagram";

export default function RevOpsCaseStudy() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-[#0b0c10] text-slate-300 selection:bg-cyan-500/30">

            {/* =========================================================== 
          SECTION 1 — HERO PANEL (HUD TOP BAR)
      =========================================================== */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-cyan-500/20">
                {/* Holographic Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                <div className="container mx-auto max-w-7xl relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 mb-8 font-mono text-xs uppercase tracking-widest group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> System Command
                    </Link>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/30 border border-cyan-500/30 rounded text-xs text-cyan-300 font-mono mb-4">
                                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                CASE FILE #001 // VERIFIED BUILD
                            </div>
                            <h1 className="text-4xl md:text-6xl font-mono font-bold text-white mb-4 tracking-tight">
                                REVOPS<span className="text-cyan-400">CIRCUITRY</span>
                            </h1>
                            <h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold max-w-3xl">
                                High-Performance Revenue Operations Platform
                            </h2>
                            <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed text-lg">
                                A complete modernization of a RevOps consultancy’s digital identity — engineered for trust, clarity, and inbound lead readiness.
                            </p>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-2">
                            <div className="text-[10px] font-mono text-cyan-500/70 uppercase tracking-widest">STATUS: ACTIVE DEPLOYMENT</div>
                            <a
                                href="https://revopscircuitry.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-bold font-mono rounded hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                            >
                                LIVE SYSTEM PREVIEW <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================== 
          SECTION 2 — OVERVIEW GRID (4 HUD STAT CARDS)
      =========================================================== */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        <QuantumCard className="p-6 bg-slate-900/40">
                            <h3 className="text-xs font-mono text-cyan-500 mb-2 uppercase tracking-widest">PROJECT SCOPE</h3>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-400" /> Full Web Platform</li>
                                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-400" /> UX Architecture</li>
                                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-400" /> Tech Positioning</li>
                                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-cyan-400" /> Brand Narrative</li>
                            </ul>
                        </QuantumCard>

                        <QuantumCard className="p-6 bg-slate-900/40">
                            <h3 className="text-xs font-mono text-cyan-500 mb-2 uppercase tracking-widest">TECH STACK</h3>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-center gap-2"><Cpu size={14} className="text-purple-400" /> Next.js 15</li>
                                <li className="flex items-center gap-2"><Layout size={14} className="text-purple-400" /> Tailwind CSS</li>
                                <li className="flex items-center gap-2"><Zap size={14} className="text-purple-400" /> Framer Motion</li>
                                <li className="flex items-center gap-2"><Globe size={14} className="text-purple-400" /> Vercel Edge</li>
                            </ul>
                        </QuantumCard>

                        <QuantumCard className="p-6 bg-slate-900/40">
                            <h3 className="text-xs font-mono text-cyan-500 mb-2 uppercase tracking-widest">DURATION</h3>
                            <div className="text-5xl font-mono font-bold text-white mb-1">07</div>
                            <div className="text-sm text-slate-400">Days from Concept to Live Deployment</div>
                        </QuantumCard>

                        <QuantumCard className="p-6 bg-slate-900/40">
                            <h3 className="text-xs font-mono text-cyan-500 mb-2 uppercase tracking-widest">IMPACT</h3>
                            <div className="text-5xl font-mono font-bold text-cyan-400 mb-1">300%</div>
                            <div className="text-sm text-slate-400">Improvement in messaging clarity & credibility</div>
                        </QuantumCard>

                    </div>
                </div>
            </section>

            {/* =========================================================== 
          SECTION 3 — THE PROBLEM (BEFORE)
      =========================================================== */}
            <section className="py-20 px-6 bg-slate-950/50 border-y border-white/5">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-1/3">
                            <h2 className="text-3xl font-mono font-bold text-white mb-2">THE PROBLEM</h2>
                            <div className="w-12 h-1 bg-red-500 mb-4" />
                            <p className="text-red-400 font-mono text-sm">
                                “RevOps brand, enterprise capabilities — but a weak digital presence.”
                            </p>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                RevOpsCircuitry is a RevOps consultancy built on technical thinking, data engineering, and systems design.
                                But the original digital identity had 3 core issues:
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-4 p-4 bg-red-950/10 border border-red-500/20 rounded">
                                    <span className="text-red-500 font-mono">01</span>
                                    <span className="text-slate-400"><strong>No positioning</strong> — the value was unclear and generic.</span>
                                </li>
                                <li className="flex items-start gap-4 p-4 bg-red-950/10 border border-red-500/20 rounded">
                                    <span className="text-red-500 font-mono">02</span>
                                    <span className="text-slate-400"><strong>Weak structure</strong> — navigation paths did not help conversion.</span>
                                </li>
                                <li className="flex items-start gap-4 p-4 bg-red-950/10 border border-red-500/20 rounded">
                                    <span className="text-red-500 font-mono">03</span>
                                    <span className="text-slate-400"><strong>No narrative</strong> — spectaculary failed to explain what RevOps actually does.</span>
                                </li>
                            </ul>
                            <p className="text-slate-400 italic">
                                This created friction during prospect conversations. Founders needed a site that <span className="text-white">felt like a systems engineer built it.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================== 
          SECTION 4 — THE SOLUTION (AFTER)
      =========================================================== */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-1/3">
                            <h2 className="text-3xl font-mono font-bold text-white mb-2">THE SOLUTION</h2>
                            <div className="w-12 h-1 bg-cyan-500 mb-4" />
                            <p className="text-cyan-400 font-mono text-sm">
                                “A complete redesign using HUD-grade design physics + strategic rewriting.”
                            </p>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                My objective wasn’t just to make it “look nicer.” It was to engineer digital clarity — the core value of a RevOps operator.
                            </p>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="p-4 bg-cyan-950/10 border-l-2 border-cyan-500">
                                    <h4 className="text-white font-bold mb-1">Executive Brevity</h4>
                                    <p className="text-sm text-slate-400">Rewriting every section to speak directly to decision makers.</p>
                                </div>
                                <div className="p-4 bg-cyan-950/10 border-l-2 border-cyan-500">
                                    <h4 className="text-white font-bold mb-1">Value Ladder Upgrade</h4>
                                    <p className="text-sm text-slate-400">Structuring the homepage into a precise logical flow.</p>
                                </div>
                                <div className="p-4 bg-cyan-950/10 border-l-2 border-cyan-500">
                                    <h4 className="text-white font-bold mb-1">HUD Visual Language</h4>
                                    <p className="text-sm text-slate-400">Panels, neon accents, and cyber-grid aesthetics to signal "Engineering".</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================== 
          SECTION 5 — SCREENSHOTS LAYOUT (HUD GALLERY)
      =========================================================== */}
            <section className="py-20 px-6 bg-[#050505] border-y border-white/5">
                <div className="container mx-auto max-w-7xl">
                    <h2 className="text-2xl font-mono font-bold text-white mb-12 text-center">INTERFACE VISUALIZATION</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Row 1 */}
                        <div className="col-span-1 md:col-span-2 group relative rounded-xl overflow-hidden border border-cyan-500/20 bg-slate-900 aspect-[21/9]">
                            <div className="absolute inset-0 flex items-center justify-center bg-cyan-900/10 group-hover:bg-cyan-900/20 transition-colors">
                                <span className="font-mono text-cyan-400 text-lg md:text-2xl tracking-[0.2em] border border-cyan-500/50 px-6 py-2 rounded">
                                    HERO_REDESIGN_PREVIEW
                                </span>
                            </div>
                            <div className="absolute bottom-4 left-4 text-xs font-mono text-cyan-500">IMG_001 // HERO_SECTION</div>
                        </div>

                        {/* Row 2 */}
                        <div className="group relative rounded-xl overflow-hidden border border-cyan-500/20 bg-slate-900 aspect-video">
                            <div className="absolute inset-0 flex items-center justify-center bg-purple-900/10 group-hover:bg-purple-900/20 transition-colors">
                                <span className="font-mono text-purple-400 text-sm md:text-lg tracking-widest border border-purple-500/50 px-4 py-2 rounded">
                                    VALUE_LADDER_GRID
                                </span>
                            </div>
                            <div className="absolute bottom-4 left-4 text-xs font-mono text-purple-500">IMG_002 // GRID_SYSTEM</div>
                        </div>

                        <div className="group relative rounded-xl overflow-hidden border border-cyan-500/20 bg-slate-900 aspect-video">
                            <div className="absolute inset-0 flex items-center justify-center bg-cyan-900/10 group-hover:bg-cyan-900/20 transition-colors">
                                <span className="font-mono text-cyan-400 text-sm md:text-lg tracking-widest border border-cyan-500/50 px-4 py-2 rounded">
                                    COMPONENT_ARCHITECTURE
                                </span>
                            </div>
                            <div className="absolute bottom-4 left-4 text-xs font-mono text-cyan-500">IMG_003 // COMPONENT_VIEW</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================== 
          SECTION 6 — ARCHITECTURE DECISIONS
      =========================================================== */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-mono font-bold text-white mb-8">ARCHITECTURE DECISIONS</h2>
                    <p className="text-slate-400 mb-12">"Why the system was built the way it was."</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 border border-white/10 rounded-lg hover:border-cyan-500/50 transition-colors">
                            <div className="text-cyan-400 font-bold mb-2 font-mono">01. SPEED</div>
                            <p className="text-slate-400 text-sm">Hosted on Vercel Edge for minimal latency. No cold boots allowed for the landing experience.</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-lg hover:border-cyan-500/50 transition-colors">
                            <div className="text-cyan-400 font-bold mb-2 font-mono">02. CLARITY</div>
                            <p className="text-slate-400 text-sm">Sections structured using an executive-first narrative (Outcome → Method → Proof).</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-lg hover:border-cyan-500/50 transition-colors">
                            <div className="text-cyan-400 font-bold mb-2 font-mono">03. SYSTEM DESIGN</div>
                            <p className="text-slate-400 text-sm">Reusable HUD components (QuantumCard, HUDPanel, GlowBorder) for consistent UI physics.</p>
                        </div>
                        <div className="p-6 border border-white/10 rounded-lg hover:border-cyan-500/50 transition-colors">
                            <div className="text-cyan-400 font-bold mb-2 font-mono">04. SCALABILITY</div>
                            <p className="text-slate-400 text-sm">Structured for future upgrades: Knowledge Base, RAG Audit Tools, and Pricing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================== 
          SECTION 7 — ARCHITECTURE DIAGRAM (HUD BLUEPRINT)
      =========================================================== */}
            <section className="py-20 px-6 bg-[#080808] border-y border-cyan-500/10">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-2xl font-mono font-bold text-cyan-400 mb-12 text-center">SYSTEM BLUEPRINT</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <DiagramHUD
                            title="FIG 1.0 // RAG_PIPELINE"
                            caption="The RAG pipeline enables semantic search and high-context automation across CRM, operational, and product data."
                        >
                            <RAGPipelineDiagram />
                        </DiagramHUD>

                        <DiagramHUD
                            title="FIG 2.0 // NEXTJS_ENTERPRISE_ARCH"
                            caption="This architecture leverages Next.js 15 Server Actions for secure, low-latency enterprise systems."
                        >
                            <NextJsArchitectureDiagram />
                        </DiagramHUD>
                    </div>

                    <p className="mt-12 text-slate-500 text-sm font-mono text-center">
                        “The system was built to allow future AI workflows and RAG tooling.”
                    </p>
                </div>
            </section>

            {/* =========================================================== 
          SECTION 8 — OUTCOMES & IMPACT
      =========================================================== */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-mono font-bold text-white mb-4">OUTCOMES</h2>
                        <p className="text-slate-400">“Clearer, stronger, more credible. A RevOps identity that finally matches expertise.”</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <QuantumCard className="p-8 bg-slate-900/60 border-t-4 border-t-cyan-400">
                            <h3 className="text-lg font-bold text-white mb-4">DIGITAL CLARITY</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Founder’s complex value proposition became instantly understandable. The friction in explaining "What do you do?" vanished.
                            </p>
                        </QuantumCard>
                        <QuantumCard className="p-8 bg-slate-900/60 border-t-4 border-t-cyan-400">
                            <h3 className="text-lg font-bold text-white mb-4">ENTERPRISE-READY LOOK</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                The HUD design language increased perceived authority significantly. It feels like a specialized tool, not a marketing site.
                            </p>
                        </QuantumCard>
                        <QuantumCard className="p-8 bg-slate-900/60 border-t-4 border-t-cyan-400">
                            <h3 className="text-lg font-bold text-white mb-4">SCALE-READY FOUNDATION</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                The architecture isn't just a brochure; it supports future AI tools, dashboards, and complex product lines.
                            </p>
                        </QuantumCard>
                    </div>
                </div>
            </section>

            {/* =========================================================== 
          SECTION 9 — WHAT THIS MEANS FOR FUTURE CLIENTS
      =========================================================== */}
            <section className="py-20 px-6 bg-slate-950/50">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-mono font-bold text-white mb-8">APPLICABILITY</h2>
                    <p className="text-lg text-slate-300 mb-8">
                        “What I learned from this build — and how it improves client projects.”
                    </p>
                    <div className="p-8 rounded-xl border border-dashed border-cyan-500/30 bg-slate-900/30">
                        <ul className="space-y-4 text-slate-300">
                            <li className="flex gap-3"><span className="text-cyan-400">➜</span> Experts need clarity more than creativity.</li>
                            <li className="flex gap-3"><span className="text-cyan-400">➜</span> HUD interfaces create instant authority.</li>
                            <li className="flex gap-3"><span className="text-cyan-400">➜</span> Engineering-first design dramatically increases perceived value.</li>
                            <li className="flex gap-3"><span className="text-cyan-400">➜</span> The right narrative converts trust faster than visuals.</li>
                            <li className="flex gap-3"><span className="text-cyan-400">➜</span> Modular sections make the website a <strong>system</strong>, not a brochure.</li>
                        </ul>
                    </div>
                    <p className="mt-8 text-cyan-400 font-bold uppercase tracking-wide text-sm">
                        This framework is now part of my **Authority Platform Build** service.
                    </p>
                </div>
            </section>

            {/* =========================================================== 
          SECTION 10 — FINAL CTA PANEL (HUD MODE)
      =========================================================== */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="relative rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-cyan-500/50 p-12 overflow-hidden text-center group">
                        {/* Reactor Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12 w-[600px] h-[600px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

                        <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-6 relative z-10">
                            NEED A PLATFORM BUILT WITH<br />
                            <span className="text-cyan-400">ENGINEERING PRECISION?</span>
                        </h2>
                        <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto relative z-10">
                            I design authority-grade digital systems for consultants, operators, and technical founders.
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold tracking-widest rounded-lg transition-all shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.7)]"
                        >
                            <Code size={20} /> INITIATE YOUR SYSTEM AUDIT <ArrowRight size={20} />
                        </button>

                        {/* Decorative border brackets */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-cyan-500" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-cyan-500" />
                    </div>
                </div>
            </section>

            <SmartContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}
