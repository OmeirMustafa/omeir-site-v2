import { PortfolioGridHUD } from "@/components/ui/PortfolioGridHUD";
import { FinalCTASection } from "@/components/sections/final-cta";
import { ReactorCoreHUD } from "@/components/ui/ReactorCoreHUD";

export default function PortfolioPage() {
    return (
        <div className="min-h-screen pt-20">
            <ReactorCoreHUD
                title="BLUEPRINT ARCHIVES"
                tagline="SECURE ARCHIVES"
                systemId="SYS_VAULT: #992"
                className="py-12"
            >
                <div className="text-center mb-8">
                    <p className="text-slate-400 max-w-2xl mx-auto font-light">
                        Access restricted to authorized personnel only.
                    </p>
                </div>
                <PortfolioGridHUD />
            </ReactorCoreHUD>
            <FinalCTASection />
        </div>
    );
}
