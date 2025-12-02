import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles, ShieldAlert, Layout, ChevronDown, Cpu, Globe, Zap, ScanEye, Brain, GitBranch } from 'lucide-react';

// --- ANIMATION VARIANTS (Optimized for Performance) ---

const continuousFloat = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const glowHover = {
  hover: {
    y: -5,
    scale: 1.01,
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    borderColor: "rgba(34, 211, 238, 0.4)",
    boxShadow: "0 0 20px rgba(34, 211, 238, 0.1)",
    transition: { duration: 0.3 }
  }
};

// --- REUSABLE COMPONENTS ---

const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]); // Reduced tilt for less lag
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * width);
    y.set(yPct * height);
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative group transition-all duration-500 ${className}`}
    >
      <div style={{ transform: "translateZ(10px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

const AnimatedDivider = () => (
  <div className="relative h-px w-full my-16 opacity-30"> {/* Reduced spacing */}
    <div className="absolute inset-0 bg-quantum-blue/20"></div>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-quantum-cyan to-transparent blur-[1px]"
      initial={{ x: '-100%' }}
      animate={{ x: '100%' }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      style={{ width: '100%' }}
    />
  </div>
);

// --- SECTIONS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-void-900/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="font-heading font-bold text-lg tracking-wider text-white flex items-center gap-1">
          Omeir <span className="text-quantum-cyan">Mustafa</span>
        </motion.div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
          {['About', 'Work', 'Stack', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-quantum-cyan transition-colors">{item}</a>
          ))}
        </div>
        <a href="#contact" className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase hover:bg-quantum-cyan hover:text-void-900 transition-all">
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-quantum-purple/20 rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-quantum-cyan/20 rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-quantum-cyan mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quantum-cyan opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-quantum-cyan"></span></span>
          DEPLOYING SEETHRUO V2.0
        </motion.div>

        <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-quantum-cyan via-quantum-blue to-quantum-purple">Intelligent</span> <br />
          Interfaces.
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          I orchestrate systems. I build full-stack AI products that merge <strong className="text-white">LLMs</strong> with <strong className="text-white">forensic UX</strong>.
        </motion.p>

        <div className="flex justify-center gap-4">
          <a href="#work" className="px-6 py-3 bg-white text-void-900 font-bold rounded-lg hover:bg-quantum-cyan transition-colors flex items-center gap-2 text-sm">
             Explore Work <ArrowRight size={16} />
          </a>
          <a href="https://seethruo-engine.vercel.app/" target="_blank" className="px-6 py-3 text-white font-bold rounded-lg border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2 text-sm">
            Launch SeeThruo <ExternalLink size={16} className="text-quantum-cyan" />
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-20 relative z-10">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">The Builder's Protocol</h2>
        <p className="text-base text-slate-400 max-w-2xl mx-auto">Ruthless prioritization of functionality, security, and user experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Zap, title: "Rapid Iteration", desc: "Continuous deployment and empirical learning over theoretical perfection.", color: "text-yellow-400" },
          { icon: ShieldAlert, title: "Security First", desc: "Server-side environment segregation to eliminate key leakage.", color: "text-red-400" },
          { icon: Layout, title: "Forensic UX", desc: "Information architecture and micro-interactions that build trust.", color: "text-quantum-cyan" },
        ].map((item, i) => (
          <TiltCard key={i} className="p-6 rounded-2xl bg-void-800/40 border border-white/5 backdrop-blur-md">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
              <item.icon className={`w-5 h-5 ${item.color}`} />
            </div>
            <h3 className="font-heading text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </TiltCard>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProject = () => {
  const [currentImage, setCurrentImage] = useState('/dashboard.png'); 
  useEffect(() => {
    const images = ['/dashboard.png', '/dashboard2.png']; 
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[currentIndex]);
    }, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <section id="work" className="py-20 relative z-10"> 
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 opacity-60">
          <div className="h-px flex-grow bg-quantum-blue/30"></div>
          <span className="font-mono text-quantum-cyan text-xs tracking-widest uppercase">Flagship Project</span>
          <div className="h-px flex-grow bg-quantum-blue/30"></div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-void-800/40 backdrop-blur-xl overflow-hidden neon-border-glow">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center"> 
              <div className="w-12 h-12 rounded-xl bg-quantum-cyan/10 border border-quantum-cyan/30 flex items-center justify-center mb-6">
                <ScanEye className="w-6 h-6 text-quantum-cyan" />
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">SeeThruo</h3>
              <p className="text-sm text-quantum-cyan/80 mb-6 font-mono uppercase">Decision Intelligence Engine</p> 
              <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                A proprietary AI system that decodes corporate comms, media bias, and hidden intent. Built with a forensic "Glass & Light" interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Gemini 2.0', 'React 18', 'Vercel Edge', 'Tailwind'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded border border-white/10 text-xs text-quantum-cyan font-mono">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="https://seethruo-engine.vercel.app/" target="_blank" className="px-6 py-2.5 bg-quantum-cyan text-void-900 font-bold rounded-lg hover:bg-white transition-colors flex items-center gap-2 text-sm">
                  Live System <ExternalLink size={16} />
                </a>
                <a href="https://github.com/OmeirMustafa/seethruo" target="_blank" className="px-6 py-2.5 border border-white/20 hover:bg-white/5 text-white font-medium rounded-lg transition-all flex items-center gap-2 text-sm">
                  Code <Github size={16} />
                </a>
              </div>
            </div>

            <div className="bg-black/30 p-6 flex items-center justify-center border-l border-white/5 min-h-[300px]">
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-2xl border border-white/10"
              >
                <motion.img 
                  key={currentImage} 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
                  src={currentImage} 
                  alt="SeeThruo Dashboard" 
                  className="w-full h-full object-cover bg-void-900"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => (
  <section id="stack" className="py-20 relative z-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
         <h2 className="font-heading text-3xl font-bold text-white mb-4">Intelligence Stack</h2>
         <p className="text-slate-400 text-sm">Optimized for <span className="text-quantum-cyan">velocity</span>, <span className="text-quantum-purple">security</span>, and <span className="text-white">scale</span>.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { title: "Frontend", icon: Layout, color: "text-quantum-cyan", skills: ["React 18", "TypeScript", "Tailwind"] },
           { title: "Backend", icon: Brain, color: "text-quantum-purple", skills: ["Node.js", "Edge Functions", "Gemini Pro"] },
           { title: "DevOps", icon: GitBranch, color: "text-green-400", skills: ["GitOps", "CI/CD", "Security"] }
         ].map((stack, i) => (
           <TiltCard key={i} className="p-6 rounded-2xl bg-void-800/30 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                 <stack.icon className={`w-5 h-5 ${stack.color}`} />
                 <h3 className="font-heading text-base font-bold text-white uppercase tracking-wider">{stack.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                 {stack.skills.map(s => (
                    <span key={s} className="px-3 py-1 rounded bg-white/5 text-slate-400 text-xs border border-white/5">{s}</span>
                 ))}
              </div>
           </TiltCard>
         ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 text-center relative overflow-hidden z-10">
    <div className="max-w-3xl mx-auto px-6 relative z-10">
      <h2 className="font-heading text-5xl font-bold text-white mb-8">Let's Architect The Future.</h2>
      <p className="text-lg text-slate-400 max-w-xl mx-auto mb-12">
        Open for high-impact freelance engagements. If you need an engineer who thinks in systems, transmit a signal.
      </p>
      <div className="flex justify-center gap-4">
        <a href="mailto:kaziomeirmustafa@gmail.com" className="px-8 py-3 bg-white text-void-900 font-bold rounded-lg hover:bg-quantum-cyan transition-colors flex items-center gap-2 text-sm">
          <Mail size={18} /> Email Me
        </a>
        <a href="https://www.linkedin.com/in/omeir-mustafa-uddin/" target="_blank" className="px-8 py-3 bg-void-800 text-white font-bold rounded-lg border border-white/10 hover:border-quantum-cyan transition-colors flex items-center gap-2 text-sm">
          <Linkedin size={18} /> LinkedIn
        </a>
      </div>
      <footer className="mt-24 text-slate-600 text-xs uppercase tracking-widest pt-12 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Omeir Mustafa. Systems Active.</p>
      </footer>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="bg-void-900 min-h-screen text-slate-200 font-sans selection:bg-quantum-cyan/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AnimatedDivider />
      <About />
      <AnimatedDivider />
      <FeaturedProject />
      <AnimatedDivider />
      <Skills />
      <AnimatedDivider />
      <Contact />
    </div>
  );
};

export default App;