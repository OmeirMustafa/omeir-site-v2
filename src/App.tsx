import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles, ShieldAlert, Layout, ChevronDown, Cpu, Globe, Zap, ScanEye, Brain, GitBranch } from 'lucide-react';

// --- ANIMATION UTILS ---

const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]); 
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
      <div style={{ transform: "translateZ(10px)" }}>{children}</div>
      <motion.div
        style={{ background: useMotionTemplate`radial-gradient(120px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.1), transparent 80%)` }}
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-inherit pointer-events-none"
      />
    </motion.div>
  );
};

const AuroraBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-void-900"></div>
    <motion.div
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 45, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-quantum-blue/20 via-void-900 to-transparent blur-[100px]"
    />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
  </div>
);

const AnimatedDivider = () => (
  <div className="relative h-px w-full my-16 opacity-30">
    <div className="absolute inset-0 bg-quantum-blue/20"></div>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-quantum-cyan to-transparent blur-[1px]"
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: '100%', opacity: [0, 0.5, 0] }}
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-void-900/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="font-heading font-bold text-xl tracking-wider text-white flex items-center gap-1 flex-shrink-0">
          Omeir <span className="text-quantum-cyan">Mustafa</span>
        </motion.div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          {['About', 'Work', 'Stack', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-quantum-cyan transition-colors">{item}</a>
          ))}
        </div>
        <a href="#contact" className="px-5 py-2 rounded-lg border border-white/10 text-xs font-bold hover:bg-white/5 hover:text-white transition-all text-slate-300">
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center justify-center">
      <AuroraBackground />
      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-quantum-cyan mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-quantum-cyan animate-pulse"></span>
          AVAILABLE FOR NEW PROJECTS
        </div>

        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
          Architecting <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-quantum-cyan to-quantum-purple">Cognitive</span><br/>
          Infrastructure.
        </h1>

        <p className="text-lg text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
          Synthesizing human intent with machine velocity. I build full-stack intelligence systems that merge 
          <strong className="text-white mx-1">LLMs</strong> with <strong className="text-white mx-1">forensic interfaces</strong>.
        </p>

        <div className="flex justify-center gap-4">
          <a href="#work" className="px-6 py-2.5 bg-white text-void-900 font-bold rounded-lg hover:bg-quantum-cyan transition-colors text-sm flex items-center gap-2">
             View Work <ArrowRight size={16} />
          </a>
          <a href="https://seethruo-engine.vercel.app/" target="_blank" className="px-6 py-2.5 text-white font-bold rounded-lg border border-white/10 hover:bg-white/5 transition-all text-sm">
            Launch App
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-20 relative z-10">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">The Builder's Protocol</h2>
        <p className="text-sm text-slate-400 max-w-2xl mx-auto">Ruthless prioritization of functionality, security, and user experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Zap, title: "Speed", desc: "Rapid prototyping to find market fit faster.", color: "text-yellow-400" },
          { icon: ShieldAlert, title: "Security", desc: "Zero-trust architecture. No leaked keys.", color: "text-red-400" },
          { icon: Brain, title: "Intelligence", desc: "Interfaces designed for clarity and trust.", color: "text-quantum-cyan" },
        ].map((item, i) => (
          <TiltCard key={i} className="p-6 rounded-xl bg-void-800/40 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
              <item.icon className={`w-5 h-5 ${item.color}`} />
            </div>
            <h3 className="font-heading text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
          </TiltCard>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProject = () => {
  const [currentImage, setCurrentImage] = useState('/dashboard.png'); 
  const ref = useRef<HTMLElement>(null); 
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

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
    <section id="work" className="py-20 relative z-10" ref={ref as any}> 
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 opacity-50">
          <div className="h-px flex-grow bg-white/10"></div>
          <span className="font-mono text-quantum-cyan text-[10px] tracking-widest uppercase">Flagship Project</span>
          <div className="h-px flex-grow bg-white/10"></div>
        </div>

        <TiltCard className="rounded-2xl border border-white/10 bg-void-800/40 backdrop-blur-xl overflow-hidden neon-border-glow">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center"> 
              <div className="flex items-center gap-3 mb-6">
                 <ScanEye className="w-8 h-8 text-quantum-cyan" />
                 <h3 className="font-heading text-3xl font-bold text-white tracking-tight">SeeThruo</h3>
              </div>
              <p className="text-xs text-quantum-cyan/80 mb-6 font-mono uppercase">Decision Intelligence Engine</p> 
              <p className="text-slate-300 mb-8 leading-relaxed text-sm">
                A proprietary AI system that decodes corporate comms, media bias, and hidden intent.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Gemini 2.0', 'React 18', 'Vercel Edge', 'Tailwind'].map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded border border-white/10 text-[10px] text-slate-400 font-mono">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="https://seethruo-engine.vercel.app/" target="_blank" className="px-5 py-2 bg-quantum-cyan text-void-900 font-bold rounded-lg hover:bg-white transition-colors flex items-center gap-2 text-xs">
                  Live System <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="bg-black/20 p-6 flex items-center justify-center border-l border-white/5 min-h-[300px]">
              <motion.div 
                style={{ y: imgY, rotateX: 10, rotateY: -10 }}
                className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-2xl border border-white/10"
              >
                <motion.img 
                  key={currentImage} 
                  initial={{ opacity: 0, scale: 1.1 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: "circOut" }}
                  src={currentImage} 
                  alt="SeeThruo Dashboard" 
                  className="w-full h-full object-cover bg-void-900"
                />
                
                <div className="absolute top-6 right-6 bg-void-900/90 backdrop-blur-md pl-3 pr-4 py-2 rounded-full border border-green-500/30 shadow-lg flex items-center gap-3 z-30">
                   <span className="relative flex h-3 w-3">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                   </span>
                   <span className="text-xs font-bold text-green-400 uppercase tracking-wider">System Active</span>
                </div>
              </motion.div>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

const Skills = () => (
  <section id="stack" className="py-20 relative z-10">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-12">
         <h2 className="font-heading text-2xl font-bold text-white mb-4">Tech Stack</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         {[
           { title: "Frontend", icon: Layout, skills: ["React 18", "TypeScript", "Tailwind"] },
           { title: "Backend", icon: Brain, skills: ["Node.js", "Edge Functions", "Gemini Pro"] },
           { title: "DevOps", icon: GitBranch, skills: ["GitOps", "CI/CD", "Security"] }
         ].map((stack, i) => (
           <div key={i} className="p-5 rounded-xl bg-void-800/30 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                 <stack.icon className="w-4 h-4 text-quantum-cyan" />
                 <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider">{stack.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                 {stack.skills.map(s => (
                    <span key={s} className="px-2 py-1 rounded bg-white/5 text-slate-400 text-[10px] border border-white/5">{s}</span>
                 ))}
              </div>
           </div>
         ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 text-center relative overflow-hidden z-10">
    <div className="max-w-3xl mx-auto px-6 relative z-10">
      <h2 className="font-heading text-4xl font-bold text-white mb-6">Let's Architect The Future.</h2>
      <p className="text-sm text-slate-400 max-w-lg mx-auto mb-10">
        Open for high-impact freelance engagements.
      </p>
      <div className="flex justify-center gap-4">
        <a href="mailto:kaziomeirmustafa@gmail.com" className="px-6 py-2.5 bg-white text-void-900 font-bold rounded-lg hover:bg-quantum-cyan transition-colors text-sm">
          Email Me
        </a>
        <a href="https://www.linkedin.com/in/omeir-mustafa-uddin/" target="_blank" className="px-6 py-2.5 bg-void-800 text-white font-bold rounded-lg border border-white/10 hover:border-quantum-cyan transition-colors text-sm">
          LinkedIn
        </a>
      </div>
      <footer className="mt-20 text-slate-600 text-[10px] uppercase tracking-widest font-mono pt-8 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Omeir Mustafa. Systems Active.</p>
      </footer>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="bg-void-900 min-h-screen text-slate-200 font-sans selection:bg-quantum-cyan/30 selection:text-white overflow-x-hidden relative perspective-1000">
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