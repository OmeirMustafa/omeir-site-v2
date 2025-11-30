import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles, Terminal, ShieldAlert, Layout, ChevronDown, Activity, Box, Zap } from 'lucide-react';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight text-white">
          Omeir<span className="text-blue-500">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="#contact" className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium transition-all">
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
        <div className="absolute top-[30%] right-[20%] w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute bottom-[20%] left-[40%] w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          AI Product Engineer
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
        >
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400">Intelligent</span> <br />
          Interfaces.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I don't just write code; I orchestrate systems. I build full-stack AI products 
          that merge <strong className="text-slate-200">LLMs</strong> with <strong className="text-slate-200">pixel-perfect UX</strong>. 
          Creator of <span className="text-white border-b border-blue-500/50">InsightMesh</span>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#work" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Explore Work <ArrowRight size={18} />
          </a>
          <a href="https://insightmesh-tool.vercel.app/" target="_blank" className="px-8 py-4 glass-panel text-white font-medium rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            Try InsightMesh <Sparkles size={18} className="text-purple-400" />
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-32 relative">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Builder's Protocol</h2>
        <p className="text-lg text-slate-400 leading-relaxed">
          Code is useless if it doesn't ship. My process is ruthless prioritization of functionality, security, and user experience.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          { icon: Zap, title: "Ship to Learn", desc: "Don't theorize. Build the prototype, deploy to Vercel, break it, fix it, and ship it again." },
          { icon: ShieldAlert, title: "Security First", desc: "Handling API keys and env variables isn't an afterthought. Secure by default." },
          { icon: Layout, title: "Obsessive UX", desc: "A powerful backend needs a clean frontend. I obsess over spacing and micro-interactions." },
        ].map((item, i) => (
          <motion.div key={i} variants={fadeInUp} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group">
            <item.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const FeaturedProject = () => (
  <section id="work" className="py-32 bg-black/20">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-grow opacity-50"></div>
        <span className="text-sm font-mono text-blue-400 tracking-widest uppercase">Flagship Project</span>
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-grow opacity-50"></div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="glass-panel rounded-3xl overflow-hidden border border-white/10 group hover:border-blue-500/30 transition-all duration-500"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-8">
                <Sparkles className="text-blue-400" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">InsightMesh</h3>
              <p className="text-xl text-blue-200 mb-6">Meaning Extraction Engine</p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                A real-time AI tool that deconstructs text and URLs to reveal hidden intentions, emotional arcs, and logical fallacies. 
                Built to help users read smarter.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {['Gemini 2.0', 'React', 'Vercel Edge', 'Cheerio'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="https://insightmesh-tool.vercel.app/" target="_blank" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
                  Live Demo <ExternalLink size={16} />
                </a>
                <a href="https://github.com/OmeirMustafa/insightmesh" target="_blank" className="px-6 py-3 border border-white/10 hover:bg-white/5 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          </div>

          {/* Cinematic Mockup */}
          <div className="bg-gradient-to-br from-slate-900 to-black p-8 flex items-center justify-center relative overflow-hidden h-[400px] lg:h-auto border-t lg:border-t-0 lg:border-l border-white/5 group">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            
            {/* The Image Container with Tilt Effect */}
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-700 border border-white/10">
              {/* NOTE: Put a file named dashboard.png in your public folder for this to work. Otherwise it shows a gradient. */}
              <img 
                src="/dashboard.png" 
                alt="InsightMesh Dashboard" 
                className="w-full h-full object-cover bg-slate-800"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-blue-900', 'to-slate-900');
                }}
              />
              
              {/* Floating Badge */}
              <div className="absolute -right-4 top-10 bg-slate-900/90 backdrop-blur p-3 rounded-xl border border-white/10 shadow-xl transform translate-x-4 group-hover:translate-x-0 transition-transform duration-700 delay-100">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-mono text-green-400">Live Analysis</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    { category: "Core Architecture", items: ["React 18", "TypeScript", "Vite", "Tailwind CSS"] },
    { category: "Backend & Cloud", items: ["Node.js", "Vercel Edge", "REST APIs", "PostgreSQL"] },
    { category: "AI Engineering", items: ["Gemini 1.5 Flash", "Prompt Engineering", "Context Mgmt", "API Security"] },
  ];

  return (
    <section id="philosophy" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Production Stack</h2>
            <p className="text-lg text-slate-400 mb-8">
              I don't chase trends. I use the stack that delivers <span className="text-white">speed</span>, <span className="text-white">security</span>, and <span className="text-white">scalability</span>.
            </p>
            <div className="space-y-8">
              {skills.map((s, i) => (
                <div key={i}>
                  <h3 className="text-sm font-mono text-blue-400 mb-3 uppercase tracking-wider">{s.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span key={item} className="px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-slate-300 hover:text-white hover:border-white/20 transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-[100px] opacity-20"></div>
              <div className="relative glass-panel p-8 rounded-3xl border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-sm text-slate-400 space-y-2">
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">buildFuture</span> = <span className="text-yellow-400">async</span> () <span className="text-purple-400">=&gt;</span> {'{'}</p>
                  <p className="pl-4"><span className="text-purple-400">const</span> <span className="text-blue-400">idea</span> = <span className="text-green-400">"InsightMesh"</span>;</p>
                  <p className="pl-4"><span className="text-purple-400">await</span> <span className="text-blue-400">secure</span>(API_KEYS);</p>
                  <p className="pl-4"><span className="text-purple-400">await</span> <span className="text-blue-400">deploy</span>(idea);</p>
                  <p className="pl-4"><span className="text-slate-500">// Status: Live on Vercel 🟢</span></p>
                  <p>{'}'}</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 text-center">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Smart.</h2>
      <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
        I am currently open to freelance projects and full-time opportunities in AI Engineering. 
        If you need an engineer who understands both code and product, let's connect.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* EMAIL LINK (Gmail Direct) */}
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kaziomeirmustafa@gmail.com&su=Portfolio%20Inquiry%20from%20Website" 
          target="_blank" 
          className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2"
        >
          <Mail size={20} /> Email Me
        </a>
        
        {/* LINKEDIN LINK */}
        <a 
          href="https://www.linkedin.com/in/omeir-mustafa-uddin/" 
          target="_blank" 
          className="px-8 py-4 glass-panel text-white font-medium rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
        >
          <Linkedin size={20} /> LinkedIn
        </a>
      </div>
      
      {/* Footer Section */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/10 mt-12">
        <p>&copy; {new Date().getFullYear()} Omeir Mustafa. All rights reserved.</p>
      </footer>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProject />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;