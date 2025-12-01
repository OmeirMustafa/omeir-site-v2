import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles, Terminal, ShieldAlert, Layout, ChevronDown, Cpu, Globe, Zap, ScanEye, Code2 } from 'lucide-react';

// --- ANIMATIONS ---
const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const glowHover = {
  hover: {
    scale: 1.02,
    boxShadow: "0 0 25px rgba(6, 182, 212, 0.3)",
    borderColor: "rgba(6, 182, 212, 0.5)",
    transition: { duration: 0.3 }
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/20 py-4 shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-xl tracking-wider text-white group cursor-pointer"
        >
          {/* FIXED: Full Name in one block with colored dot at the end */}
          <span className="drop-shadow-lg">Omeir Mustafa</span>
          <span className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300 ml-0.5">.</span>
        </motion.div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          {['About', 'Work', 'Stack', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative group hover:text-cyan-400 transition-colors">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
        
        <a href="#contact" className="relative px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-cyan-300 text-sm font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Cybernetic Grid & Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
        
        {/* Moving Orbs */}
        <motion.div 
          animate={{ x: [0, 100, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[128px]"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[128px]"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-bold text-cyan-300 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          SHIPPING SEETHRUO v2.0
        </motion.div>

        {/* NEON HEADLINE */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-8 leading-[1.1] drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        >
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Intelligent
          </span> <br />
          Interfaces.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          I orchestrate systems. I build full-stack AI products 
          that merge <span className="text-cyan-200 font-medium glow-text">LLMs</span> with <span className="text-cyan-200 font-medium glow-text">forensic UX</span>. 
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
            href="#work" 
            className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center justify-center gap-2"
          >
            Explore Work <ArrowRight size={20} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.3)", borderColor: "#22d3ee" }}
            href="https://seethruo-engine.vercel.app/" 
            target="_blank" 
            className="px-8 py-4 bg-slate-900/50 text-white font-bold rounded-full border border-white/10 backdrop-blur-md flex items-center justify-center gap-2"
          >
            Launch SeeThruo <ExternalLink size={20} className="text-cyan-400" />
          </motion.a>
        </div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-500/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-32 relative">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          The Builder's Protocol
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Zap, title: "Ship to Learn", desc: "Don't theorize. Build, deploy, break, fix, and ship again. Speed is the ultimate advantage.", color: "text-yellow-400" },
          { icon: ShieldAlert, title: "Security First", desc: "API keys and environment variables are sacred. I build military-grade secure architectures.", color: "text-red-400" },
          { icon: Layout, title: "Forensic UX", desc: "A powerful backend needs a clean frontend. I obsess over pixel-perfect spacing and interactions.", color: "text-cyan-400" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            animate={float.animate} /* FIX 1: Apply floating animation */
            whileHover={glowHover.hover} /* FIX 2: Apply magnetic hover glow */
            className="p-8 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-lg"
          >
            <div className={`w-14 h-14 rounded-2xl bg-slate-800/50 border border-white/10 flex items-center justify-center mb-6 shadow-inner`}>
              <item.icon className={`w-7 h-7 ${item.color}`} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProject = () => (
  <section id="work" className="py-32 relative">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="flex items-center gap-4 mb-16 opacity-70">
        <div className="h-px bg-cyan-500 flex-grow shadow-[0_0_10px_#06b6d4]"></div>
        <span className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase drop-shadow-[0_0_5px_#06b6d4]">Flagship Project</span>
        <div className="h-px bg-cyan-500 flex-grow shadow-[0_0_10px_#06b6d4]"></div>
      </div>

      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="glass-panel rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.1)] hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] transition-all duration-500"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* TEXT CONTENT */}
          <div className="p-10 md:p-20 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-transparent opacity-20"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <ScanEye className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-5xl font-bold text-white mb-4 tracking-tight">SeeThruo</h3>
              <p className="text-xl text-cyan-300 mb-8 font-mono">Decision Intelligence Engine</p>
              <p className="text-slate-400 mb-10 leading-loose text-lg">
                A proprietary AI system that decodes corporate comms, media bias, and hidden intent. 
                Built with a forensic "Glass & Glow" interface for rapid information processing.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {['Gemini 2.0 Flash', 'React 18', 'Vercel Edge', 'Tailwind'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-cyan-100 font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="https://seethruo-engine.vercel.app/" target="_blank" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                  Live System <ExternalLink size={18} />
                </a>
                <a href="https://github.com/OmeirMustafa/seethruo" target="_blank" className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white font-medium rounded-xl transition-colors flex items-center gap-2">
                  <Github size={18} /> Code
                </a>
              </div>
            </div>
          </div>

          {/* VISUAL MOCKUP */}
          <div className="bg-black/50 p-10 flex items-center justify-center relative overflow-hidden min-h-[500px] border-l border-white/5">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            
            {/* Floating Card Animation */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-white/20 group"
            >
              <img 
                src="/dashboard.png" 
                alt="SeeThruo Dashboard" 
                className="w-full h-full object-cover bg-slate-800"
                onError={(e) => {
                   const parent = e.currentTarget.parentElement;
                   if(parent) {
                     e.currentTarget.style.display = 'none';
                     parent.classList.add('bg-gradient-to-br', 'from-slate-800', 'to-black');
                     parent.innerHTML = '<div class="h-80 flex items-center justify-center text-slate-500 font-mono">System Preview</div>';
                   }
                }}
              />
              
              {/* Floating Badge */}
              <div className="absolute -right-6 top-12 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.2)] transform translate-x-4">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-[ping_1.5s_ease-in-out_infinite]"></div>
                    <span className="text-sm font-mono text-green-400 font-bold">System Online</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Skills = () => {
  return (
    <section id="stack" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
             Production Stack
           </h2>
           <p className="text-slate-400 max-w-2xl mx-auto text-lg">
             I don't chase trends. I use the stack that delivers <span className="text-cyan-400 font-bold">speed</span>, <span className="text-purple-400 font-bold">security</span>, and <span className="text-white font-bold">scale</span>.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Frontend", icon: Layout, color: "text-cyan-400", border: "group-hover:border-cyan-500/50", skills: ["React 18", "TypeScript", "Tailwind", "Framer"] },
             { title: "Backend & AI", icon: Cpu, color: "text-purple-400", border: "group-hover:border-purple-500/50", skills: ["Node.js", "Vercel Edge", "Gemini 2.0", "PostgreSQL"] },
             { title: "DevOps", icon: Globe, color: "text-green-400", border: "group-hover:border-green-500/50", skills: ["Git/GitHub", "CI/CD", "Security", "Analytics"] }
           ].map((stack, i) => (
             <motion.div 
               key={i}
               animate={float.animate} /* FIX 1: Apply floating animation */
               whileHover={glowHover.hover} /* FIX 2: Apply magnetic hover glow */
               className={`p-8 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-lg transition-colors ${stack.border} group`}
             >
                <div className="flex items-center gap-3 mb-6">
                   <stack.icon className={`w-6 h-6 ${stack.color}`} />
                   <h3 className="text-sm font-mono text-white uppercase tracking-widest">{stack.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                   {stack.skills.map(s => (
                      <span key={s} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-slate-300 text-xs font-medium">{s}</span>
                   ))}
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/10 pointer-events-none"></div>
    
    <div className="max-w-3xl mx-auto px-6 relative z-10">
      <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
        Let's Build.
      </h2>
      <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
        I am currently open to freelance projects and full-time opportunities.
        If you need an engineer who understands both code and product, let's connect.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <motion.a 
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.2)" }}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kaziomeirmustafa@gmail.com&su=Portfolio%20Inquiry" 
          target="_blank" 
          className="px-10 py-5 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3"
        >
          <Mail size={20} /> Email Me
        </motion.a>
        
        <motion.a 
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.2)", borderColor: "#22d3ee" }}
          href="https://www.linkedin.com/in/omeir-mustafa-uddin/" 
          target="_blank" 
          className="px-10 py-5 bg-slate-900/50 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-md flex items-center justify-center gap-3"
        >
          <Linkedin size={20} /> LinkedIn
        </motion.a>
      </div>
      
      <footer className="py-12 text-center text-slate-600 text-xs uppercase tracking-widest mt-20 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Omeir Mustafa. All rights reserved.</p>
      </footer>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans overflow-x-hidden">
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