import { PortfolioGridHUD } from "@/components/ui/PortfolioGridHUD";
import { FinalCTASection } from "@/components/sections/final-cta";

export default function PortfolioPage() {
    return (
        <div className="min-h-screen pt-20">
            <section className="py-24 px-6 bg-[#0b0b0d]">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 border border-cyan-400/30 rounded-full backdrop-blur-md mb-6">
                            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                                SECURE ARCHIVES
                            </span>
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-6 font-mono tracking-tight">BLUEPRINT ARCHIVES</h1>
                        <p className="text-slate-400 max-w-2xl mx-auto font-light">
                            Access restricted to authorized personnel only.
                        </p>
                    </div>
                    <PortfolioGridHUD />
                </div>
            </section>
            <FinalCTASection />
        </div>
    );
}
