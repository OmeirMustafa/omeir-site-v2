 import React, { useState, useEffect } from 'react';

// --- ICONS ---
const ArrowRight = () => (
  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
);
const ExternalLink = () => (
  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
);
const CodeIcon = () => (
  <svg className="w-6 h-6 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
);
const LayoutIcon = () => (
  <svg className="w-6 h-6 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
);

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      
      {/* BACKGROUND ACCENTS (Animated) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50' : 'bg-transparent'}`}>
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-slate-900">OM.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Work</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          </div>
          <a href="#contact" className="px-5 py-2.5 text-sm font-semibold bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold tracking-wide uppercase">
            Frontend Engineer
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-8">
            Building fast, modern, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              reliable web experiences.
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            I turn complex ideas into clean, functional digital products. 
            Focused on performance, scalability, and pixel-perfect design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="group flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25">
              View Selected Work <ArrowRight />
            </a>
            <a href="#contact" className="px-8 py-4 text-slate-700 font-semibold hover:text-slate-900 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section-padding px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Selected Projects</h2>
              <p className="text-slate-500">Recent commercial and personal work.</p>
            </div>
            <a href="https://github.com/kaziomeir" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center">
              View GitHub <ExternalLink />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <LayoutIcon />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">SeeThruo</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A minimal, distraction-filtering writing environment. Built to help users focus on content creation without UI clutter.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Next.js', 'React', 'Tailwind', 'Vercel'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="https://seethruo-engine.vercel.app" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                View Live App <ExternalLink />
              </a>
            </div>

            {/* Project 2 */}
            <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
                <CodeIcon />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Personal Portfolio</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                High-performance portfolio site. Engineered for speed using Vite and React, featuring custom animations and responsive layouts.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Vite', 'TypeScript', 'Tailwind'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center text-sm font-bold text-slate-400 cursor-not-allowed">
                Currently Viewing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 bg-slate-900 text-white px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Expertise</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                I don't just write code; I build sustainable systems. 
                My workflow combines modern AI tools for speed with manual refinement for stability and performance.
              </p>
              <div className="flex gap-4">
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <span className="block text-2xl font-bold text-blue-400">100%</span>
                  <span className="text-sm text-slate-400">Modern Stack</span>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <span className="block text-2xl font-bold text-blue-400">Fast</span>
                  <span className="text-sm text-slate-400">Turnaround</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { cat: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
                { cat: "Backend", items: ["Node.js", "REST APIs", "Database Basics"] },
                { cat: "Tools", items: ["Git / GitHub", "VS Code", "Gemini AI", "Vite"] },
                { cat: "Design", items: ["Figma Basics", "Responsive UI", "Prototyping"] }
              ].map((group) => (
                <div key={group.cat} className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <h4 className="font-bold text-white mb-4">{group.cat}</h4>
                  <ul className="space-y-2">
                    {group.items.map(item => (
                      <li key={item} className="text-slate-400 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 bg-white relative z-10">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Ready to build something <span className="text-blue-600">great?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            I’m currently available for freelance projects and collaborations.
          </p>
          <a 
            href="mailto:kaziomeirmustafa@gmail.com" 
            className="inline-block px-12 py-5 bg-slate-900 text-white text-lg font-bold rounded-full hover:bg-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Start a Conversation
          </a>
        </div>
        {/* Decorative background element for footer */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-50 to-transparent -z-0" />
      </section>

      <footer className="py-8 bg-white border-t border-slate-100 text-center relative z-10">
        <p className="text-slate-400 text-sm font-medium">© {new Date().getFullYear()} Omeir Mustafa. Crafted with precision.</p>
      </footer>
    </div>
  );
}

export default App;