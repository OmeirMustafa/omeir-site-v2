import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles, ShieldAlert, Layout, ChevronDown, Cpu, Globe, Zap, ScanEye, Brain, GitBranch } from 'lucide-react';

// --- PHYSICS & ANIMATION UTILS ---

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
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative group transition-all duration-500 ${className}`}
    >
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
      <motion.div
        style={{
          background: useMotionTemplate`radial-gradient(200px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.15), transparent 80%)`
        }}
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-inherit pointer-events-none"
      />
    </motion.div>
  );
};

const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-void-900"></div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-quantum-blue/20 via-void-900 to-transparent blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -45, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-quantum-cyan/20 via-quantum-purple/10 to-transparent blur-[150px]"
      />
    </div>
  );
};

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

// --- MAIN COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-void-900/60 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-quantum-cyan/50 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-heading font-bold text-2xl tracking-wider text-white group cursor-pointer flex items-center gap-2"
        >
          Omeir<span className="text-quantum-cyan">.</span>M
        </motion.div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          {['About', 'Work', 'Stack', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative group hover:text-white transition-colors duration-300 overflow-hidden">
              <span className="relative z-10">{item}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-quantum-cyan to-quantum-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </div>
        
        <a href="#contact" className="relative group px-6 py-2.5 font-bold text-sm rounded-full overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300 group-hover:from-quantum-cyan group-hover:to-quantum-blue transition-all">
            Initiate Contact
          </span>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-quantum-cyan/20 to-quantum-purple/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-quantum-cyan mb-12 backdrop-blur-md group hover:border-quantum-cyan/50 transition-all"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quantum-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-quantum-cyan"></span>
          </span>
          <span className="tracking-widest uppercase">System Status: Deploying SeeThruo v2.0</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-6xl md:text-8xl font-black tracking-tighter text-white leading-[1.1] mb-10"
        >
          Architecting <br />
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-quantum-blue/20 blur-xl rounded-full"></span>
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-quantum-cyan via-quantum-blue to-quantum-purple animate-shimmer bg-[length:200%_auto]">
              Cognitive
            </span>
          </span> <br />
          Infrastructure.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Synthesizing human intent with machine velocity. I build full-stack intelligence systems that merge 
          <span className="text-white font-semibold glow-text mx-1">LLMs</span> with 
          <span className="text-white font-semibold glow-text mx-1">forensic interfaces</span>.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="p-[1px] rounded-xl bg-gradient-to-r from-quantum-cyan to-quantum-purple relative group overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-quantum-cyan to-quantum-purple blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
             <a href="#work" className="relative z-10 block px-8 py-4 bg-void-900 rounded-[11px] text-white font-bold flex items-center gap-2 group-hover:bg-void-800 transition-colors">
               Explore Intelligence <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </a>
          </div>

          <a 
            href="https://seethruo-engine.vercel.app/" 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-4 text-white font-bold rounded-xl border border-white/10 flex items-center gap-2 hover:bg-white/5 transition-all group"
          >
            Launch SeeThruo <ExternalLink size={20} className="text-quantum-cyan group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-quantum-cyan/50"
      >
        <ChevronDown size={40} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-32 relative z-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
          The Builder's Protocol
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Code without execution is theory. My methodology is a ruthless compression of the loop between abstract idea and deployed reality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Zap, title: "Hyper-Iteration Velocity", desc: "The fastest path to product-market fit is through continuous, empirical deployment loops.", color: "from-yellow-400 to-orange-500" },
          { icon: ShieldAlert, title: "Architectural Security", desc: "Zero-trust environments implemented at the server level to eliminate data leakage vectors.", color: "from-red-500 to-pink-500" },
          { icon: Brain, title: "Cognitive Interfaces", desc: "Designing for trust. Reducing cognitive load through forensic information architecture and micro-interactions.", color: "from-quantum-cyan to-quantum-blue" },
        ].map((item, i) => (
          <TiltCard 
            key={i}
            className="p-10 rounded-[2rem] bg-void-800/50 border border-white/5 backdrop-blur-lg overflow-hidden"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-[1px] mb-8 flex items-center justify-center shadow-lg relative`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent blur-md"></div>
              <div className="w-full h-full bg-void-900 rounded-2xl flex items-center justify-center relative z-10">
                 <item.icon className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed text-base">{item.desc}</p>
          </TiltCard>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProject = () => {
  const [currentImage, setCurrentImage] = useState('/dashboard.png'); 
  const ref = useRef<HTMLElement>(null); // Fixed Ref Type
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
    <section id="work" className="py-32 relative z-10" ref={ref}> 
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center gap-6 mb-16 opacity-80">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent via-quantum-blue/50 to-transparent relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-quantum-cyan blur-[2px]"
              initial={{ x: '-100%' }} animate={{ x: '200%' }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <span className="font-mono text-quantum-cyan tracking-[0.4em] uppercase font-bold text-sm relative">
            <span className="absolute inset-0 blur-sm bg-quantum-cyan/30"></span>
            <span className="relative z-10">Flagship Entity</span>
          </span>
          <div className="h-px flex-grow bg-gradient-to-l from-transparent via-quantum-blue/50 to-transparent relative overflow-hidden">
             <motion.div 
              className="absolute inset-0 bg-quantum-cyan blur-[2px]"
              initial={{ x: '100%' }} animate={{ x: '-200%' }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        <TiltCard className="rounded-[3rem] border border-white/10 bg-void-800/40 backdrop-blur-xl shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/20 via-quantum-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl z-0 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            <div className="p-12 md:p-20 flex flex-col justify-center"> 
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-quantum-cyan to-quantum-blue p-[1px] mb-10 shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                <div className="w-full h-full bg-void-900 rounded-3xl flex items-center justify-center">
                  <ScanEye className="w-10 h-10 text-quantum-cyan" />
                </div>
              </div>
              
              <h3 className="font-heading text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">SeeThruo</h3>
              <p className="text-xl text-quantum-cyan/80 mb-8 font-mono uppercase tracking-widest">Decision Intelligence Engine</p> 
              <p className="text-slate-300 mb-12 leading-relaxed text-lg max-w-xl">
                A proprietary AI system that deconstructs corporate communications. It reveals hidden intent, quantifies media bias, and maps emotional trajectory using a forensic "Glass & Light" interface.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {['Gemini 2.0 Flash', 'React 18', 'Vercel Edge', 'Tailwind', 'Framer Motion'].map((tag, i) => (
                  <span key={tag} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-quantum-cyan font-mono font-medium hover:bg-white/10 hover:border-quantum-cyan/30 transition-all">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                <a href="https://seethruo-engine.vercel.app/" target="_blank" rel="noreferrer" className="px-8 py-4 bg-quantum-cyan text-void-900 font-bold rounded-xl flex items-center gap-3 shadow-lg shadow-quantum-cyan/20 hover:shadow-quantum-cyan/50 hover:-translate-y-1 transition-all">
                  Initialize System <ExternalLink size={20} />
                </a>
                <a href="https://github.com/OmeirMustafa/seethruo" target="_blank" rel="noreferrer" className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-medium rounded-xl transition-all flex items-center gap-3">
                  <Github size={20} /> Source Protocol
                </a>
              </div>
            </div>

            <div className="relative min-h-[500px] lg:min-h-full overflow-hidden">
              <div className="absolute inset-0 bg-void-900/50 border-l border-white/10 z-10"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] z-0"></div>

              <div className="absolute inset-0 flex items-center justify-center z-20 p-10 perspective-1000">
                <motion.div 
                  style={{ y: imgY, rotateX: 10, rotateY: -10 }}
                  className="relative w-full max-w-[90%] rounded-3xl overflow-hidden shadow-2xl border-4 border-void-900 outline outline-4 outline-white/10 group-hover:outline-quantum-cyan/30 transition-all duration-700"
                >
                  <motion.img 
                    key={currentImage} 
                    initial={{ opacity: 0, scale: 1.1 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "circOut" }}
                    src={currentImage} 
                    alt="SeeThruo Dashboard" 
                    className="w-full h-full object-cover bg-void-800"
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
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

const Skills = () => (
  <section id="stack" className="py-32 relative z-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-24">
         <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
           The Intelligence Stack
         </h2>
         <p className="text-slate-400 max-w-2xl mx-auto text-xl">
           I eschew trends for bedrock technologies. My stack is optimized for <span className="text-quantum-cyan font-bold glow-text">velocity</span>, <span className="text-quantum-purple font-bold glow-text">security</span>, and <span className="text-white font-bold">planetary scale</span>.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           { title: "Frontend & Motion", icon: Layout, color: "from-quantum-cyan to-blue-500", skills: ["React 18", "TypeScript", "Tailwind", "Framer Motion 3D"] },
           { title: "Backend & AI Core", icon: Brain, color: "from-quantum-purple to-pink-500", skills: ["Node.js", "Vercel Edge Functions", "Gemini Pro Vision", "Vector Embeddings"] },
           { title: "Infrastructure & Ops", icon: GitBranch, color: "from-green-400 to-emerald-600", skills: ["GitOps Workflow", "CI/CD Pipelines", "Zero-Trust Security", "Real-time Analytics"] }
         ].map((stack, i) => (
           <TiltCard 
             key={i}
             className="p-8 rounded-[2rem] bg-void-800/50 border border-white/5 backdrop-blur-md group"
           >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/5">
                 <div className={`p-3 rounded-xl bg-gradient-to-br ${stack.color}`}>
                    <stack.icon className="w-6 h-6 text-white" />
                 </div>
                 <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wider">{stack.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                 {stack.skills.map(s => (
                    <span key={s} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-300 text-sm font-medium group-hover:border-white/20 group-hover:bg-white/10 transition-all">{s}</span>
                 ))}
              </div>
           </TiltCard>
         ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-40 text-center relative overflow-hidden z-10">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-quantum-blue/20 blur-[150px] pointer-events-none"></div>

    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <h2 className="font-heading text-6xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-none relative inline-block">
        <span className="relative z-10">Let's Architect <br/> The Future.</span>
        <span className="absolute -inset-4 bg-quantum-purple/20 blur-2xl -z-10"></span>
      </h2>
      
      <p className="text-2xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">
        Open for high-impact freelance engagements and strategic roles. If you require an engineer who thinks in systems and product strategy, transmit a signal.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a href="mailto:kaziomeirmustafa@gmail.com" className="px-12 py-6 bg-white text-void-900 font-bold text-lg rounded-2xl shadow-2xl shadow-white/10 hover:bg-quantum-cyan hover:scale-105 transition-all flex items-center justify-center gap-3">
          <Mail size={24} /> Transmit Email
        </a>
        <a href="https://www.linkedin.com/in/omeir-mustafa-uddin/" target="_blank" rel="noreferrer" className="px-12 py-6 bg-void-800 text-white font-bold text-lg rounded-2xl border border-white/10 hover:bg-void-700 hover:border-quantum-cyan/50 transition-all flex items-center justify-center gap-3">
          <Linkedin size={24} /> Establish Link
        </a>
      </div>
      
      <footer className="mt-32 text-slate-500 text-sm uppercase tracking-[0.2em] font-mono border-t border-white/5 pt-12">
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