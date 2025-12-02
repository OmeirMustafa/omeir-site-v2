import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles, ShieldAlert, Layout, ChevronDown, Cpu, Globe, Zap, ScanEye, Brain, GitBranch } from 'lucide-react';

// --- TYPES ---
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

// --- PHYSICS & ANIMATION UTILS ---

// Optimized 3D Tilt Card Effect
const TiltCard: React.FC<TiltCardProps> = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]); // Reduced rotation for better performance
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
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative group transition-all duration-300 ${className}`} // Faster transition
    >
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
      {/* Quantum Glow - Optimized */}
      <motion.div
        style={{
          background: useMotionTemplate`radial-gradient(150px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.1), transparent 80%)`
        }}
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-inherit pointer-events-none"
      />
    </motion.div>
  );
};

// Optimized Background (Static where possible)
const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-void-900"></div>
      {/* Reduced blur radii for performance */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-20%] w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-quantum-blue/20 via-void-900 to-transparent blur-[60px]"
      />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
    </div>
  );
};

const AnimatedDivider = () => (
  <div className="relative h-px w-full my-24 opacity-50">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-quantum-blue/20 to-transparent"></div>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-quantum-cyan to-transparent blur-[1px]"
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: '100%', opacity: [0, 0.8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      style={{ width: '50%' }}
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-void-900/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-heading font-bold text-xl tracking-wider text-white group cursor-pointer flex items-center gap-2"
        >
          Omeir<span className="text-quantum-cyan">.</span>M
        </motion.div>

        {/* Visible on all screens now, but stacked on mobile via CSS if needed later */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          {['About', 'Work', 'Stack', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative group hover:text-white transition-colors duration-200">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-quantum-cyan group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
        
        <a href="#contact" className="relative px-5 py-2 font-bold text-xs rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 group-hover:text-white">
            Contact
          </span>
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']); // Reduced parallax range

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AuroraBackground />

      <motion.div style={{ y }} className="max-w-5xl mx-auto px-6 text-center z-10 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-quantum-cyan mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quantum-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-quantum-cyan"></span>
          </span>
          <span className="tracking-widest uppercase">System Online</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-heading text-5xl md:text-7xl font-black tracking-tighter text-white leading-none mb-8"
        >
          Architecting <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-quantum-cyan to-quantum-purple">
            Cognitive
          </span> <br />
          Infrastructure.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Synthesizing human intent with machine velocity. I build full-stack intelligence systems that merge 
          <span className="text-white font-semibold mx-1">LLMs</span> with 
          <span className="text-white font-semibold mx-1">forensic interfaces</span>.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#work" className="px-8 py-3 bg-white text-void-900 rounded-lg font-bold hover:bg-quantum-cyan transition-colors flex items-center gap-2">
             Explore Work <ArrowRight size={18} />
          </a>
          <a 
            href="https://seethruo-engine.vercel.app/" 
            target="_blank" 
            className="px-8 py-3 text-white font-bold rounded-lg border border-white/10 flex items-center gap-2 hover:bg-white/5 transition-all"
          >
            Launch SeeThruo <ExternalLink size={18} className="text-quantum-cyan" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 relative z-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
          The Builder's Protocol
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Zap, title: "Velocity", desc: "Fast iterations over theoretical perfection.", color: "text-yellow-400" },
          { icon: ShieldAlert, title: "Security", desc: "Zero-trust architecture by default.", color: "text-red-400" },
          { icon: Brain, title: "Cognition", desc: "Interfaces designed for clarity and trust.", color: "text-quantum-cyan" },
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-2xl bg-void-800/50 border border-white/5 hover:border-white/10 transition-colors">
            <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
            <h3 className="font-heading text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
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
    <section id="work" className="py-24 relative z-10"> 
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12 opacity-70">
          <div className="h-px flex-grow bg-white/10"></div>
          <span className="font-mono text-quantum-cyan tracking-widest uppercase text-xs">Flagship</span>
          <div className="h-px flex-grow bg-white/10"></div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-void-800/40 backdrop-blur-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center"> 
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-quantum-cyan/20 to-transparent p-[1px] mb-8 flex items-center justify-center">
                  <ScanEye className="w-8 h-8 text-quantum-cyan" />
              </div>
              
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">SeeThruo</h3>
              <p className="text-lg text-quantum-cyan/80 mb-6 font-mono">Decision Intelligence Engine</p> 
              <p className="text-slate-300 mb-8 leading-relaxed text-base">
                A proprietary AI system that deconstructs corporate communications. It reveals hidden intent, quantifies media bias, and maps emotional trajectory.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Gemini 2.0', 'React 18', 'Vercel Edge', 'Tailwind'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded border border-white/10 text-xs text-slate-400 font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="https://seethruo-engine.vercel.app/" target="_blank" className="px-6 py-3 bg-quantum-cyan text-void-900 font-bold rounded-lg hover:bg-white transition-colors flex items-center gap-2">
                  Initialize System <ExternalLink size={18} />
                </a>
                <a href="https://github.com/OmeirMustafa/seethruo" target="_blank" className="px-6 py-3 border border-white/20 hover:bg-white/5 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                  <Github size={18} /> Code
                </a>
              </div>
            </div>

            <div className="relative min-h-[400px] lg:min-h-full overflow-hidden bg-black/20">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="relative w-full max-w-md rounded-xl overflow-hidden shadow-2xl border border-white/10"
                >
                  <motion.img 
                    key={currentImage} 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.5 }}
                    src={currentImage} 
                    alt="SeeThruo Dashboard" 
                    className="w-full h-full object-cover bg-void-800"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => (
  <section id="stack" className="py-24 relative z-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
         <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter">
           Intelligence Stack
         </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { title: "Frontend", icon: Layout, skills: ["React 18", "TypeScript", "Tailwind"] },
           { title: "Backend", icon: Brain, skills: ["Node.js", "Edge Functions", "Gemini Pro"] },
           { title: "DevOps", icon: GitBranch, skills: ["GitOps", "CI/CD", "Security"] }
         ].map((stack, i) => (
           <div key={i} className="p-6 rounded-2xl bg-void-800/30 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                 <stack.icon className="w-5 h-5 text-quantum-cyan" />
                 <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">{stack.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                 {stack.skills.map(s => (
                    <span key={s} className="px-3 py-1 rounded bg-white/5 text-slate-400 text-xs border border-white/5">{s}</span>
                 ))}
              </div>
           </div>
         ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 text-center relative overflow-hidden z-10">
    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <h2 className="font-heading text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
        Let's Architect <br/> The Future.
      </h2>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
        <a href="mailto:kaziomeirmustafa@gmail.com" className="px-8 py-4 bg-white text-void-900 font-bold text-lg rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
          <Mail size={20} /> Email Me
        </a>
        <a href="https://www.linkedin.com/in/omeir-mustafa-uddin/" target="_blank" className="px-8 py-4 bg-void-800 text-white font-bold text-lg rounded-xl border border-white/10 hover:border-quantum-cyan/50 transition-all flex items-center justify-center gap-2">
          <Linkedin size={20} /> LinkedIn
        </a>
      </div>
      
      <footer className="mt-24 text-slate-600 text-xs uppercase tracking-widest font-mono pt-12 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Omeir Mustafa. Systems Active.</p>
      </footer>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="bg-void-900 min-h-screen text-slate-200 font-sans selection:bg-quantum-cyan/30 selection:text-white overflow-x-hidden relative">
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