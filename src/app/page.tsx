import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { WorkGrid } from "@/components/sections/work-grid";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0F172A] text-slate-50 font-sans selection:bg-blue-500/30">

      <Navbar />

      {/* 
        SECTION 1: HERO — THE HOOK 
        Objective: Immediate credibility and positioning clarity.
      */}
      <section className="relative min-h-screen flex flex-col justify-center section-spacing overflow-hidden">

        {/* Subtle CSS Grid (Depth) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#F8FAFC 1px, transparent 1px), linear-gradient(90deg, #F8FAFC 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F172A] pointer-events-none" />

        <div className="container-width relative z-10 pt-20">
          <div className="max-w-4xl">

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8 animate-fade-up opacity-0">
              Digital product architect helping brands <span className="text-blue-500">clear the noise.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10 font-normal animate-fade-up delay-100 opacity-0">
              I design and build rigorous digital systems that increase trust, clarity, and revenue.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-200 opacity-0">
              <Link
                href="#work"
                className="btn-primary text-base min-w-[160px]"
              >
                See the Work
              </Link>

              <Link
                href="#process"
                className="btn-secondary text-base min-w-[160px]"
              >
                My Process
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 
        SECTION 2: WORK GRID — THE PROOF
        Objective: Demonstrate capability without real clients.
      */}
      <WorkGrid />

      {/* 
        SECTION 3: ABOUT — AUTHORITY
        Objective: Explain the pivot from theory to velocity.
      */}
      <AboutSection />

      {/* 
        SECTION 4: CONTACT — DIRECT
        Objective: Frictionless conversion.
      */}
      <ContactSection />

      <Footer />

    </div>
  );
}
