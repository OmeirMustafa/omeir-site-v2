import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-blue-950/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to collaborate?</h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          I'm currently looking for new opportunities in AI Engineering and Technical Product Management. If you have a project that needs a bridge between complex code and beautiful design, let's talk.
        </p>
        
        <a 
          href="mailto:hello@omeir.dev" 
          className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          <Mail />
          hello@omeir.dev
        </a>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            {[
                { label: 'LinkedIn', url: 'https://linkedin.com/in/omeirmustafa' },
                { label: 'GitHub', url: 'https://github.com/omeirmustafa' },
                { label: 'Twitter / X', url: 'https://twitter.com/omeirmustafa' },
                { label: 'Resume', url: '/resume.pdf' }
            ].map(link => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-1 text-slate-400 hover:text-white">
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-50 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
            ))}
        </div>
        
        <div className="mt-12 text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Omeir Mustafa. Built with React & Tailwind. <br/>
            <a href="#" className="hover:underline">Privacy</a> &bull; <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </section>
  );
};