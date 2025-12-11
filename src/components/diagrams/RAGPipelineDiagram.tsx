"use client";

import React from "react";

export function RAGPipelineDiagram() {
    return (
        <svg viewBox="0 0 800 650" className="w-full h-auto text-cyan-400 font-mono text-xs md:text-sm">
            <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
                </marker>
            </defs>

            {/* 1. DATA SOURCES */}
            <g transform="translate(400, 40)">
                <rect x="-150" y="-25" width="300" height="50" fill="rgba(0,0,0,0.5)" stroke="currentColor" strokeWidth="1.5" rx="4" />
                <text x="0" y="-5" textAnchor="middle" fontWeight="bold" fill="white">DATA SOURCES</text>
                <text x="0" y="15" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">CRM • Notion • Docs • PDFs</text>
            </g>

            <line x1="400" y1="65" x2="400" y2="95" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" opacity="0.6" />

            {/* 2. INGESTION LAYER */}
            <g transform="translate(400, 120)">
                <rect x="-180" y="-25" width="360" height="50" fill="rgba(6,182,212,0.1)" stroke="currentColor" strokeWidth="1.5" rx="4" />
                <text x="0" y="-5" textAnchor="middle" fontWeight="bold" fill="white">INGESTION LAYER</text>
                <text x="0" y="15" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">Cleaning • Chunking • Metadata</text>
            </g>

            <line x1="400" y1="145" x2="400" y2="175" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" opacity="0.6" />

            {/* 3. EMBEDDING MODEL */}
            <g transform="translate(400, 200)">
                <rect x="-220" y="-25" width="440" height="50" fill="rgba(0,0,0,0.5)" stroke="currentColor" strokeWidth="1.5" rx="4" />
                <text x="0" y="-5" textAnchor="middle" fontWeight="bold" fill="white">EMBEDDING MODEL</text>
                <text x="0" y="15" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">(OpenAI text-embedding-3-large / Gemini Embed)</text>
            </g>

            <line x1="400" y1="225" x2="400" y2="255" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" opacity="0.6" />

            {/* 4. VECTOR DATABASE */}
            <g transform="translate(400, 280)">
                <rect x="-220" y="-25" width="440" height="50" fill="rgba(6,182,212,0.05)" stroke="currentColor" strokeWidth="1.5" rx="4" />
                <text x="0" y="-5" textAnchor="middle" fontWeight="bold" fill="white">VECTOR DATABASE</text>
                <text x="0" y="15" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">Pinecone • Qdrant • Weaviate</text>
            </g>

            <line x1="400" y1="305" x2="400" y2="335" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" opacity="0.6" />

            {/* 5. RETRIEVAL ORCHESTRATOR */}
            <g transform="translate(400, 360)">
                <rect x="-260" y="-25" width="520" height="50" fill="rgba(0,0,0,0.5)" stroke="currentColor" strokeWidth="1.5" rx="4" filter="url(#glow)" />
                <text x="0" y="-5" textAnchor="middle" fontWeight="bold" fill="white">RETRIEVAL ORCHESTRATOR</text>
                <text x="0" y="15" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">Re-ranking • Context Window Optimization • Prompt Builder</text>
            </g>

            <line x1="400" y1="385" x2="400" y2="415" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" opacity="0.6" />

            {/* 6. LLM REASONING ENGINE */}
            <g transform="translate(400, 440)">
                <rect x="-260" y="-25" width="520" height="50" fill="rgba(6,182,212,0.1)" stroke="currentColor" strokeWidth="1.5" rx="4" />
                <text x="0" y="-5" textAnchor="middle" fontWeight="bold" fill="white">LLM REASONING ENGINE</text>
                <text x="0" y="15" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">Answer synthesis • Citations • Business Logic</text>
            </g>

            <line x1="400" y1="465" x2="400" y2="495" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow)" opacity="0.6" />

            {/* 7. APPLICATION LAYER */}
            <g transform="translate(400, 520)">
                <rect x="-280" y="-30" width="560" height="60" fill="rgba(0,0,0,0.5)" stroke="white" strokeWidth="2" rx="4" strokeDasharray="5 5" />
                <text x="0" y="-5" textAnchor="middle" fontWeight="bold" fill="white">APPLICATION LAYER (Next.js 15)</text>
                <text x="0" y="20" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">API Routes • Server Actions • Web UI • Dashboard</text>
            </g>
        </svg>
    );
}
