import { ContactCommandPanel } from "@/components/ui/ContactCommandPanel";
import { ReactorCoreHUD } from "@/components/ui/ReactorCoreHUD";

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-20">
            <ReactorCoreHUD
                title="ESTABLISH UPLINK"
                tagline="COMMUNICATION LINK"
                systemId="SYS_COMMS: #101"
                className="pb-24 pt-12"
            >
                <div className="flex justify-center">
                    <ContactCommandPanel />
                </div>
            </ReactorCoreHUD>
        </div>
    );
}
