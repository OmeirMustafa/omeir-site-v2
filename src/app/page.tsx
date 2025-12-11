import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { SecureAISystems } from "@/components/sections/secure-ai-systems";
import { ComponentArchitecture } from "@/components/sections/ComponentArchitecture";
import { WorkflowSection } from "@/components/sections/workflow";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <SecureAISystems />
      <ComponentArchitecture />
      <WorkflowSection />
      <ContactSection />
    </div>
  );
}
