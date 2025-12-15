"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SmartContactModal } from "@/components/ui/SmartContactModal";
import { MasterPanel } from "@/components/ui/MasterPanel";

export function ContactSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contact" className="pt-12 md:pt-24 pb-24 md:pb-32 px-6 relative overflow-hidden bg-transparent mb-0">
            <div className="container mx-auto max-w-4xl pt-12 border-t border-[var(--hairline)]">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <MasterPanel title="COMMS_CHANNEL // STANDBY" className="border-none shadow-none bg-transparent backdrop-blur-none">
                        <div className="max-w-xl mx-auto space-y-8">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1]">
                                READY TO <br />
                                <span className="text-[var(--accent-green)] text-glow">
                                    INITIALIZE?
                                </span>
                            </h2>

                            <p className="text-[var(--text-muted)] text-lg font-light">
                                Architecting the future requires precise communication. <br />
                                Open a secure channel securely.
                            </p>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group relative inline-flex items-center gap-3 px-12 py-5 bg-[var(--accent-green)] text-black font-bold font-mono text-sm tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 shadow-[0_0_30px_var(--halo)] hover:shadow-[0_0_50px_var(--accent-green)] transform hover:-translate-y-1"
                            >
                                <span className="relative z-10">OPEN UPLINK</span>
                            </button>
                        </div>
                    </MasterPanel>
                </motion.div>

            </div>

            <SmartContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
