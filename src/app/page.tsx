// Master Upgrade - Verified Clean v2
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Projects } from "@/components/sections/projects";
import { Approach } from "@/components/sections/approach";
import { QA } from "@/components/sections/qa";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <SocialProof />
      <div className="section-separator relative">
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
      </div>
      <Projects />
      <div className="section-separator relative">
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
      </div>
      <Approach />
      <div className="section-separator relative">
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
      </div>
      <QA />
      <div className="section-separator relative">
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
      </div>
      <ContactSection />
      <div className="section-separator relative">
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
      </div>
      <Footer />
    </main>
  );
}
