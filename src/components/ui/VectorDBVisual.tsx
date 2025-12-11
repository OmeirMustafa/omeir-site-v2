"use client";

import React from "react";
import { motion } from "framer-motion";

export function VectorDBVisual() {
    return (
        <div className="relative w-full h-[300px] flex items-center justify-center pointer-events-none md:pointer-events-auto">
            {/* Base SVG */}
            <svg width="100%" height="100%" viewBox="0 0 400 300" className="opacity-80">
                <circle cx="200" cy="150" r="40" stroke="rgba(0,194,138,0.2)" fill="none" />
                <circle cx="200" cy="150" r="120" stroke="rgba(0,194,138,0.05)" fill="none" strokeDasharray="4 4" />
            </svg>

            {/* Central Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-[rgba(0,194,138,0.3)] bg-black/50 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(0,194,138,0.1)]">
                    <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
                </div>
                <span className="mt-2 text-[10px] font-mono text-[var(--accent-green)] tracking-widest opacity-80">
                    VECTOR DB
                </span>
            </div>

            {/* Orbiting Nodes */}
            {/* Node 1 */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-[240px] h-[240px] border border-transparent rounded-full"
                style={{ x: "-50%", y: "-50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            >
                <motion.div
                    className="absolute top-0 left-1/2 w-3 h-3 bg-accent-green rounded-full shadow-[0_0_15px_var(--accent-green)] cursor-pointer group"
                    whileHover={{ scale: 1.3 }}
                >
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black/90 border border-[var(--hairline)] rounded text-[10px] font-mono text-[var(--text-primary)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        SCHEMA
                    </div>
                </motion.div>
            </motion.div>

            {/* Node 2 - Counter Orbit */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-[160px] h-[160px] border border-transparent rounded-full"
                style={{ x: "-50%", y: "-50%" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            >
                <motion.div
                    className="absolute bottom-0 left-1/2 w-2 h-2 bg-accent-deep rounded-full shadow-[0_0_10px_var(--accent-deep)] cursor-pointer group"
                    whileHover={{ scale: 1.3 }}
                >
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max px-2 py-1 bg-black/90 border border-[var(--hairline)] rounded text-[10px] font-mono text-[var(--text-primary)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        INDEX
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
