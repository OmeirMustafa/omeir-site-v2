import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services"; // Now contains modules
import { SecureAISystems } from "@/components/sections/secure-ai-systems";
import { CaseStudiesSection } from "@/components/sections/case-studies"; // Portfolio
import { ThoughtLeadershipSection } from "@/components/sections/thought-leadership"; // Insights
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden min-h-screen">
      <HeroSection />
      <SecureAISystems />
      <ServicesSection />
      <CaseStudiesSection />
      <ThoughtLeadershipSection />
      <ContactSection />
      <div className="h-24 md:hidden" />
    </div>
  );
}
