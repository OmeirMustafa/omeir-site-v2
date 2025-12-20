import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
    return (
        <section id="contact" className="section-spacing bg-[#0F172A] border-t border-slate-800">
            <div className="container-width">
                <div className="max-w-3xl mx-auto text-center">

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
                        Ready to clear <span className="text-blue-500">the noise?</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                        <Link
                            href="mailto:omeirmustafa.work@gmail.com"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0F172A] hover:bg-slate-200 font-bold text-lg rounded-lg transition-colors min-w-[240px]"
                        >
                            <Mail size={20} />
                            omeirmustafa.work@gmail.com
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/omeir-mustafa-uddin/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 hover:border-blue-500 text-slate-400 hover:text-white font-medium text-lg rounded-lg transition-all min-w-[240px]"
                        >
                            Connect on LinkedIn <ArrowRight size={18} />
                        </Link>
                    </div>

                    <p className="mt-12 text-slate-500 text-sm">
                        Direct access. No salespeople. No forms.
                    </p>

                </div>
            </div>
        </section>
    );
}
