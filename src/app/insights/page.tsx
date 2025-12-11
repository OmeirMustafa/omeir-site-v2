import { InsightsHUDLayout } from "@/components/ui/InsightsHUDLayout";
import { FinalCTASection } from "@/components/sections/final-cta";
import { ReactorCoreHUD } from "@/components/ui/ReactorCoreHUD";

export default function InsightsPage() {
    return (
        <div className="min-h-screen pt-20">
            <ReactorCoreHUD
                title="ARCHITECTURAL INSIGHTS"
                tagline="KNOWLEDGE BASE"
                systemId="SYS_LOG: #771"
                className="py-12"
            >
                <div className="text-center mb-12">
                    <p className="text-slate-400 max-w-2xl mx-auto font-light">
                        Thoughts on AI, Scale, and Next.js Ecosystems.
                    </p>
                </div>
                <InsightsHUDLayout />
            </ReactorCoreHUD>
            <FinalCTASection />
        </div>
    );
}
