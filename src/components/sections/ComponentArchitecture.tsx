"use client";

import React from "react";
import { Database, Cpu, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { DiagramHUD } from "@/components/ui/DiagramHUD";
import { SystemStackDiagram } from "@/components/diagrams/SystemStackDiagram";
import { HoloPanel } from "@/components/ui/HoloPanel";

const modules = [
    {
        title: "The Architect",
        icon: <Database className="w-6 h-6 text-cyan-400" />,
        desc: "Translating founder expertise into structured systems: product logic, value ladders, architecture thinking."
    },
    {
        title: "The Builder",
        icon: <Cpu className="w-6 h-6 text-cyan-400" />,
        desc: "Next.js engineering, secure SSR, RAG pipelines, component-driven architectures, high-compliance flows."
    },
    {
        title: "The Visionary",
        icon: <Eye className="w-6 h-6 text-cyan-400" />,
        desc: "AI-native product invention: predictive workflows, intelligent dashboards, cognitive UI systems."
    }
];

export function ComponentArchitecture() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_20px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4">
                        COMPONENT <span className="text-cyan-400">ARCHITECTURE</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My operating system consists of three core modules, working in unison to deploy authority-grade platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {modules.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <HoloPanel className="h-full p-8 flex flex-col items-start gap-4">
                                <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/30 mb-2">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white font-mono">{item.title}</h3>
                                <p className="text-slate-300 leading-relaxed text-sm flex-grow">
                                    {item.desc}
                                </p>
                            </HoloPanel>
                        </motion.div>
                    ))}
                </div>

                {/* System Stack Diagram */}
                <div className="mt-24 max-w-2xl mx-auto">
                    <DiagramHUD
                        title="SYSTEM_OPERATING_MODEL // V.3.0"
                        caption="A unified operating model combining strategy, architecture, and engineering."
                    >
                        <SystemStackDiagram />
                    </DiagramHUD>
                </div>
            </div>
        </section>
    );
}
