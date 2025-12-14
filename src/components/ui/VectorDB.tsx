"use client";

import React from "react";
import { motion } from "framer-motion";

export function VectorDB() {
    // Generate random nodes - Client Side Only to prevent Hydration Mismatch
    const [nodes, setNodes] = React.useState<any[]>([]);

    React.useEffect(() => {
        setNodes(Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
        })));
    }, []);

    return (
        <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-xl border border-white/5 bg-[#0a0a0a]/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.05),transparent_70%)]" />

            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Nodes & Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {nodes.map((node, i) => (
                    nodes.slice(i + 1, i + 3).map((target, j) => (
                        <motion.line
                            key={`${i}-${j}`}
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.2 }}
                            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
                            x1={`${node.x}%`}
                            y1={`${node.y}%`}
                            x2={`${target.x}%`}
                            y2={`${target.y}%`}
                            stroke="#00f5ff"
                            strokeWidth="1"
                        />
                    ))
                ))}
            </svg>

            {nodes.map((node, i) => (
                <motion.div
                    key={node.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        width: node.size,
                        height: node.size,
                    }}
                    className="absolute rounded-full bg-neon-cyan shadow-[0_0_10px_#00f5ff]"
                />
            ))}

            {/* Central Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full border border-neon-cyan/20 animate-ping opacity-20" />
                <div className="absolute inset-0 w-16 h-16 rounded-full border border-neon-cyan/10 animate-spin-slow" />
            </div>
        </div>
    );
}
