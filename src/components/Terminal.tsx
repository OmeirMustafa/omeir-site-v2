"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Terminal as TerminalIcon } from "lucide-react";
import { COMMANDS } from "@/data/terminal-data";

interface LogEntry {
    type: "command" | "response" | "system";
    content: string;
    isTyping?: boolean;
}

export function Terminal() {
    const [logs, setLogs] = useState<LogEntry[]>([
        { type: "system", content: "ARCHITECT INTELLIGENCE MODULE [ONLINE]" },
        { type: "system", content: "KNOWLEDGE BASE: CONNECTED" },
        { type: "system", content: "Select a query to begin..." },
    ]);
    const [isLocked, setIsLocked] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll effect (Internal Only)
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [logs]);

    const typeWriterEffect = async (lines: string[]) => {
        setIsLocked(true);

        for (const line of lines) {
            // Add empty line first to be typed into
            setLogs((prev) => [...prev, { type: "response", content: "", isTyping: true }]);

            const chars = line.split("");
            let currentLine = "";

            for (const char of chars) {
                currentLine += char;
                // Update the last log entry with the new character
                setLogs((prev) => {
                    const newLogs = [...prev];
                    const lastIndex = newLogs.length - 1;
                    newLogs[lastIndex] = { ...newLogs[lastIndex], content: currentLine };
                    return newLogs;
                });

                // Random typing delay 30-70ms for realism
                await new Promise((resolve) => setTimeout(resolve, 30 + Math.random() * 40));
            }

            // Mark typing as done for this line
            setLogs((prev) => {
                const newLogs = [...prev];
                const lastIndex = newLogs.length - 1;
                newLogs[lastIndex] = { ...newLogs[lastIndex], isTyping: false };
                return newLogs;
            });

            // Small pause between lines
            await new Promise((resolve) => setTimeout(resolve, 300));
        }

        setIsLocked(false);
    };

    const handleCommand = (commandId: string) => {
        if (isLocked) return;

        const cmd = COMMANDS.find((c) => c.id === commandId);
        if (!cmd) return;

        // Add User Command immediately
        setLogs((prev) => [...prev, { type: "command", content: cmd.label }]);

        // Trigger response typing
        typeWriterEffect(cmd.response);
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto font-mono text-sm leading-relaxed rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-voltage-purple/20 blur-3xl opacity-20 pointer-events-none" />

            {/* VS Code Style Header */}
            <div className="relative z-10 flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-white/5">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 text-white/40 text-xs">
                    <TerminalIcon size={12} />
                    <span>Ask the Architect // Interactive Panel</span>
                </div>
                <div className="w-12" /> {/* Spacer for balance */}
            </div>

            {/* Terminal Body */}
            <div
                ref={containerRef}
                className="relative z-10 h-[300px] overflow-y-auto p-6 space-y-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent flex flex-col"
            >
                <div className="min-h-[300px]"> {/* Stabilization Container */}
                    <AnimatePresence mode="wait">
                        {logs.map((log, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ ease: "easeInOut", duration: 0.2 }}
                                className={cn(
                                    "break-words",
                                    log.type === "command" && "text-cyan-300 font-bold",
                                    log.type === "response" && "text-gray-300",
                                    log.type === "system" && "text-green-400"
                                )}
                            >
                                {log.type === "command" ? (
                                    <span>{log.content}</span>
                                ) : (
                                    <span>
                                        {log.type === "system" && ">> "}
                                        {log.content}
                                    </span>
                                )}
                                {log.isTyping && (
                                    <span className="inline-block w-2 h-4 bg-neon-cyan animate-pulse ml-1 align-middle">_</span>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Command Dock */}
            <div className="relative z-10 p-4 border-t border-white/5 bg-[#121212]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {COMMANDS.map((cmd) => (
                        <button
                            key={cmd.id}
                            onClick={() => handleCommand(cmd.id)}
                            disabled={isLocked}
                            className={cn(
                                "px-4 py-2 text-left text-xs border rounded transition-all duration-200",
                                isLocked
                                    ? "opacity-50 cursor-not-allowed border-white/5 text-gray-500"
                                    : "bg-white/5 border-white/10 text-cyan-300 hover:bg-neon-cyan/10 hover:border-neon-cyan/50 hover:shadow-[0_0_10px_rgba(0,243,255,0.1)] active:scale-95"
                            )}
                        >
                            <div className="font-bold opacity-80 truncate">{cmd.label}</div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
