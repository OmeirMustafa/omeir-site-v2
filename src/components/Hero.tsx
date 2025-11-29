import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-sm font-medium text-slate-300">Available for new projects</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight animate-slide-up">
            Bridging Human Intent with <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400 bg-clip-text text-transparent text-glow">
              Artificial Intelligence.
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            I am Omeir Mustafa. A Full-Stack Engineer and AI Architect crafting agency-grade digital experiences. I turn complex language models into intuitive, human-centric interfaces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-50 text-slate-950 font-semibold hover:bg-blue-50 transition-colors">
              View Case Studies
              <ArrowRight size={18} />
            </a>
            <a href="#about" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-medium">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};