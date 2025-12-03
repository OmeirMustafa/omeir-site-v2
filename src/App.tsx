import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles, ShieldAlert, Layout, ChevronDown, Cpu, Globe, Zap, ScanEye, Brain, GitBranch } from 'lucide-react';

// --- ANIMATION UTILS ---

const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

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
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>{children}</div>
      <motion.div
        style={{ background: useMotionTemplate`radial-gradient(200px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.15), transparent 80%)` }}
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-inherit pointer-events-none"
      />
    </motion.div>
  );
};

const AuroraBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-void-900"></div>
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 45, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-quantum-blue/20 via-void-900 to-transparent blur-[120px]"
    />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
  </div>
);

const AnimatedDivider = () => (
  <div className="relative h-px w-full my-32">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-quantum-blue/30 to-transparent"></div>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-quantum-cyan to-transparent blur-sm"
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: '100%', opacity: [0, 1, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      style={{ width: '150%' }}
    />
  </div>
);

// --- SECTIONS ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-void-900/60 backdrop-blur-xl border-b border-white/5 py-4">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-quantum-cyan/50 to-transparent opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="font-heading font-bold text-2xl tracking-wider text-white flex items-center gap-2">
          Omeir<span className="text-quantum-cyan">.</span>M
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          {['About', 'Work', 'Stack', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
          ))}
        </div>
        <a href="#contact" className="px-6 py-2.5 font-bold text-sm rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
          Contact
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AuroraBackground />
      <motion.div style={{ y }} className="max-w-5xl mx-auto px-6 text-center z-10 pt-20">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-quantum-cyan mb-12 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quantum-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-quantum-cyan"></span>
          </span>
          <span className="tracking-widest uppercase">System Status: Online</span>
        </div>

        <h1 className="font-heading text-6xl md:text-8xl font-black tracking-tighter text-white leading-[1.1] mb-10">
          Architecting <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-quantum-cyan via-quantum-blue to-quantum-purple">Cognitive</span> <br />
          Infrastructure.
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">
          Synthesizing human intent with machine velocity. I build full-stack intelligence systems.
        </p>

        <div className="flex justify-center gap-6">
          <a href="#work" className="px-8 py-4 bg-white text-void-900 font-bold rounded-xl hover:bg-quantum-cyan transition-colors">
             Explore Work
          </a>
          <a href="https://seethruo-engine.vercel.app/" target="_blank" className="px-8 py-4 text-white font-bold rounded-xl border border-white/10 hover:bg-white/5 transition-all">
            Launch SeeThruo
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-32 relative z-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">The Builder's Protocol</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Zap, title: "Velocity", desc: "Fastest path to product-market fit.", color: "text-yellow-400" },
          { icon: ShieldAlert, title: "Security", desc: "Zero-trust environments.", color: "text-red-400" },
          { icon: Brain, title: "Cognition", desc: "Interfaces designed for clarity.", color: "text-quantum-cyan" },
        ].map((item, i) => (
          <TiltCard key={i} className="p-10 rounded-[2rem] bg-void-800/50 border border-white/5 backdrop-blur-lg">
            <item.icon className={`w-12 h-12 ${item.color} mb-6`} />
            <h3 className="font-heading text-2xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-slate-400 text-lg">{item.desc}</p>
          </TiltCard>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProject = () => {
  const [currentImage, setCurrentImage] = useState('/dashboard.png'); 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => prev === '/dashboard.png' ? '/dashboard2.png' : '/dashboard.png');
    }, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <section id="work" className="py-32 relative z-10"> 
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-16 opacity-80">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent via-quantum-blue/50 to-transparent"></div>
          <span className="font-mono text-quantum-cyan tracking-[0.4em] uppercase font-bold text-sm">Flagship Entity</span>
          <div className="h-px flex-grow bg-gradient-to-l from-transparent via-quantum-blue/50 to-transparent"></div>
        </div>

        <TiltCard className="rounded-[3rem] border border-white/10 bg-void-800/40 backdrop-blur-xl overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            <div className="p-12 md:p-20 flex flex-col justify-center"> 
              <h3 className="font-heading text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">SeeThruo</h3>
              <p className="text-xl text-quantum-cyan/80 mb-8 font-mono uppercase tracking-widest">Decision Intelligence Engine</p> 
              <p className="text-slate-300 mb-12 leading-relaxed text-lg max-w-xl">
                A proprietary AI system that deconstructs corporate communications.
              </p>
              <div className="flex gap-6">
                <a href="https://seethruo-engine.vercel.app/" target="_blank" className="px-8 py-4 bg-quantum-cyan text-void-900 font-bold rounded-xl">Initialize System</a>
              </div>
            </div>
            <div className="relative min-h-[500px] bg-black/20 flex items-center justify-center">
               <motion.img 
                 key={currentImage}
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
                 src={currentImage} 
                 className="w-full max-w-md rounded-xl border border-white/10 shadow-2xl"
               />
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

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
      {/* Add Skills/Contact if needed, kept concise for stability */}
    </div>
  );
};

export default App;