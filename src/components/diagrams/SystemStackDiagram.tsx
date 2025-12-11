"use client";

import React from "react";

export function SystemStackDiagram() {
    return (
        <svg viewBox="0 0 400 350" className="w-full h-auto text-cyan-400 font-mono text-xs md:text-sm">
            <defs>
                <marker id="arrow3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
                </marker>
            </defs>

            {/* VISIONARY */}
            <g transform="translate(200, 40)">
                <rect x="-140" y="-30" width="280" height="60" fill="rgba(0,0,0,0.6)" stroke="currentColor" strokeWidth="2" rx="4" />
                {/* Eye Icon Shape */}
                <circle cx="0" cy="-45" r="4" fill="cyan" opacity="0.5" />

                <text x="0" y="0" textAnchor="middle" fontWeight="bold" fontSize="16" fill="white">VISIONARY</text>
                <text x="0" y="20" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">Product Strategy • AI Workflows</text>
            </g>

            <line x1="200" y1="70" x2="200" y2="110" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow3)" />

            {/* ARCHITECT */}
            <g transform="translate(200, 140)">
                <rect x="-140" y="-30" width="280" height="60" fill="rgba(6,182,212,0.1)" stroke="currentColor" strokeWidth="2" rx="4" />
                <text x="0" y="0" textAnchor="middle" fontWeight="bold" fontSize="16" fill="white">ARCHITECT</text>
                <text x="0" y="20" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">Systems Design • RAG Pipelines</text>
            </g>

            <line x1="200" y1="170" x2="200" y2="210" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow3)" />

            {/* BUILDER */}
            <g transform="translate(200, 240)">
                <rect x="-140" y="-30" width="280" height="60" fill="rgba(0,0,0,0.6)" stroke="currentColor" strokeWidth="2" rx="4" />
                <text x="0" y="0" textAnchor="middle" fontWeight="bold" fontSize="16" fill="white">BUILDER</text>
                <text x="0" y="20" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">Next.js 15 • Integrations • UI Eng</text>
            </g>
        </svg>
    );
}
