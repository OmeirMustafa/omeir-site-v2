"use client";

import React from "react";

export function NextJsArchitectureDiagram() {
    return (
        <svg viewBox="0 0 600 500" className="w-full h-auto text-cyan-400 font-mono text-xs md:text-sm">
            <defs>
                <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
                </marker>
                <linearGradient id="cyber-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(6,182,212,0.2)" />
                    <stop offset="100%" stopColor="rgba(6,182,212,0)" />
                </linearGradient>
            </defs>

            {/* 1. CLIENT (UI) */}
            <g transform="translate(300, 40)">
                <rect x="-150" y="-25" width="300" height="50" fill="url(#cyber-grad)" stroke="currentColor" strokeWidth="1.5" rx="4" />
                <text x="0" y="-5" textAnchor="middle" fontWeight="bold" fill="white">CLIENT (UI)</text>
                <text x="0" y="15" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">React Server Components (RSC)</text>
            </g>

            <line x1="300" y1="65" x2="300" y2="95" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow2)" />

            {/* 2. NEXT.JS SERVER LAYER */}
            <g transform="translate(300, 120)">
                <rect x="-200" y="-25" width="400" height="50" fill="rgba(0,0,0,0.6)" stroke="currentColor" strokeWidth="1.5" rx="4" />
                <text x="0" y="-5" textAnchor="middle" fontWeight="bold" fill="white">NEXT.JS SERVER LAYER</text>
                <text x="0" y="15" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">Server Actions • Route Handlers • Middleware</text>
            </g>

            <line x1="300" y1="145" x2="300" y2="175" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow2)" />

            {/* 3. EDGE / MIDDLEWARE */}
            <g transform="translate(300, 200)">
                <rect x="-200" y="-25" width="400" height="50" fill="rgba(6,182,212,0.1)" stroke="currentColor" strokeWidth="1.5" rx="4" />
                <text x="0" y="-5" textAnchor="middle" fontWeight="bold" fill="white">EDGE / MIDDLEWARE LAYER</text>
                <text x="0" y="15" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">Auth • Rate Limits • Session Tokens</text>
            </g>

            <line x1="300" y1="225" x2="300" y2="255" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow2)" />

            {/* 4. BACKEND SERVICES */}
            <g transform="translate(300, 280)">
                <rect x="-240" y="-25" width="480" height="50" fill="rgba(0,0,0,0.6)" stroke="white" strokeWidth="1.5" rx="4" />
                <text x="0" y="-5" textAnchor="middle" fontWeight="bold" fill="white">BACKEND SERVICES</text>
                <text x="0" y="15" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">Database (Postgres) • Vector DB • File Storage</text>
            </g>

            <line x1="300" y1="305" x2="300" y2="335" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrow2)" />

            {/* 5. AI SERVICE LAYER */}
            <g transform="translate(300, 360)">
                <rect x="-240" y="-25" width="480" height="50" fill="rgba(147,51,234,0.1)" stroke="#a855f7" strokeWidth="1.5" rx="4" />
                <text x="0" y="-5" textAnchor="middle" fontWeight="bold" fill="white">AI SERVICE LAYER</text>
                <text x="0" y="15" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">Gemini • OpenAI • Anthropic • Tools</text>
            </g>
        </svg>
    );
}
