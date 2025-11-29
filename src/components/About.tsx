import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-6 font-serif">Philosophy</h2>
        <div className="space-y-6 text-lg text-slate-400">
          <p>
            I believe that <span className="text-white font-medium">technology should feel invisible</span>. When building with AI, the goal isn't just to display intelligence, but to integrate it so seamlessly that the user feels empowered, not overwhelmed.
          </p>
          <p>
            With a background in both classic Software Engineering and modern Prompt Engineering, I exist in the grey area between "hard" logic and "soft" heuristics. This is where the magic happens.
          </p>
          <div className="flex gap-4 pt-4">
             <div className="px-4 py-2 rounded bg-white/5 border border-white/10 text-sm">SEO First</div>
             <div className="px-4 py-2 rounded bg-white/5 border border-white/10 text-sm">Mobile Native</div>
             <div className="px-4 py-2 rounded bg-white/5 border border-white/10 text-sm">Type Safe</div>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl opacity-20 blur-xl"></div>
        <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">My Stack</h3>
            <ul className="space-y-3">
                <li className="flex items-center justify-between">
                    <span className="text-slate-400">Frontend</span>
                    <span className="text-white font-mono">React, TypeScript, Tailwind, Next.js</span>
                </li>
                <li className="h-px bg-white/10 w-full" />
                <li className="flex items-center justify-between">
                    <span className="text-slate-400">Backend</span>
                    <span className="text-white font-mono">Node.js, Python (FastAPI), PostgreSQL</span>
                </li>
                <li className="h-px bg-white/10 w-full" />
                <li className="flex items-center justify-between">
                    <span className="text-slate-400">AI / LLM</span>
                    <span className="text-white font-mono">LangChain, OpenAI API, Gemini Nano</span>
                </li>
                <li className="h-px bg-white/10 w-full" />
                 <li className="flex items-center justify-between">
                    <span className="text-slate-400">Tools</span>
                    <span className="text-white font-mono">Docker, Git, Vercel</span>
                </li>
            </ul>
        </div>
      </div>
    </section>
  );
};