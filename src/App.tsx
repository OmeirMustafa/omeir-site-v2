import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles, ShieldAlert, Layout, ChevronDown, Cpu, Globe, Zap, ScanEye, Code2 } from 'lucide-react';

// --- ANIMATIONS ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const hoverLift = {
  hover: {
    y: -5,
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-pebble-100/80 backdrop-blur-md border-b border-pebble-200 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-xl tracking-tight text-pebble-900 group cursor-pointer flex items-center gap-1"
        >
          Omeir Mustafa
          <span className="w-2 h-2 rounded-full bg-pebble-900"></span>
        </motion.div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-pebble-800">
          {['About', 'Work', 'Stack', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-black transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
        
        <a href="#contact" className="px-6 py-2.5 rounded-full bg-pebble-900 text-white text-sm font-medium hover:bg-black transition-all shadow-lg shadow-pebble-900/20">
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Pebble Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-pebble-200 text-xs font-semibold text-pebble-800 mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          SHIPPING SEETHRUO v2.0
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-pebble-900 mb-8 leading-[1.05]"
        >
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pebble-900 via-pebble-800 to-pebble-500">
            Intelligent
          </span> <br />
          Interfaces.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-pebble-800/80 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          I orchestrate systems. I build full-stack AI products that merge 
          <span className="text-black font-semibold mx-1">LLMs</span> with 
          <span className="text-black font-semibold mx-1">forensic UX</span>.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#work" 
            className="px-8 py-4 bg-pebble-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-pebble-900/20"
          >
            Explore Work <ArrowRight size={18} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.02, backgroundColor: "#fff" }}
            whileTap={{ scale: 0.98 }}
            href="https://seethruo-engine.vercel.app/" 
            target="_blank" 
            className="px-8 py-4 bg-white text-pebble-900 font-bold rounded-xl border border-pebble-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all"
          >
            Launch SeeThruo <ExternalLink size={18} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-32 bg-white relative border-t border-pebble-100">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-pebble-900 mb-6 tracking-tight">The Builder's Protocol</h2>
        <p className="text-lg text-pebble-800/70 max-w-2xl mx-auto leading-relaxed">
          Code is useless if it doesn't ship. My process is ruthless prioritization of functionality, security, and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Zap, title: "Rapid Iteration", desc: "The fastest path to a market-fit product is through continuous deployment and empirical learning." },
          { icon: ShieldAlert, title: "Security First", desc: "I implement server-side environment segregation to eliminate key leakage and mitigate deployment risk." },
          { icon: Layout, title: "Forensic UX", desc: "Interface design must build trust. I focus on information architecture and micro-interactions." },
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)" }}
            className="p-8 rounded-2xl bg-pebble-100/50 border border-pebble-200 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-white border border-pebble-200 flex items-center justify-center mb-6 shadow-sm">
              <item.icon className="w-6 h-6 text-pebble-900" />
            </div>
            <h3 className="text-lg font-bold text-pebble-900 mb-3">{item.title}</h3>
            <p className="text-pebble-800/70 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
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
    }, 4000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <section id="work" className="py-32 bg-pebble-100 border-y border-pebble-200"> 
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12 opacity-60">
          <div className="h-px bg-pebble-900 flex-grow"></div>
          <span className="text-xs font-mono text-pebble-900 tracking-[0.3em] uppercase font-bold">Flagship Project</span>
          <div className="h-px bg-pebble-900 flex-grow"></div>
        </div>

        <div className="bg-white rounded-[2rem] border border-pebble-200 shadow-2xl shadow-pebble-900/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Text Content */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="w-14 h-14 rounded-xl bg-pebble-100 border border-pebble-200 flex items-center justify-center mb-8">
                <ScanEye className="w-7 h-7 text-pebble-900" />
              </div>
              <h3 className="text-4xl font-bold text-pebble-900 mb-2 tracking-tight">SeeThruo</h3>
              <p className="text-lg text-pebble-500 mb-8 font-mono">Decision Intelligence Engine</p> 
              <p className="text-pebble-800/80 mb-10 leading-relaxed">
                A proprietary AI system that decodes corporate comms, media bias, and hidden intent. 
                Built with a forensic "Glass & Stone" interface for rapid information processing.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {['Gemini 2.0 Flash', 'React 18', 'Vercel Edge', 'Tailwind'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-md bg-pebble-100 border border-pebble-200 text-xs text-pebble-900 font-medium font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="https://seethruo-engine.vercel.app/" target="_blank" className="px-6 py-3 bg-pebble-900 text-white font-bold rounded-lg hover:bg-black transition-colors flex items-center gap-2">
                  Live System <ExternalLink size={16} />
                </a>
                <a href="https://github.com/OmeirMustafa/seethruo" target="_blank" className="px-6 py-3 border border-pebble-200 hover:bg-pebble-50 text-pebble-900 font-medium rounded-lg transition-colors flex items-center gap-2">
                  <Github size={16} /> Code
                </a>
              </div>
            </div>

            {/* Image Container */}
            <div className="bg-pebble-100/50 p-10 flex items-center justify-center border-l border-pebble-100">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-md rounded-xl overflow-hidden shadow-xl border border-pebble-200 bg-white group"
              >
                <motion.img 
                  key={currentImage} 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5 }}
                  src={currentImage} 
                  alt="SeeThruo Dashboard" 
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full border border-pebble-200 shadow-sm">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[10px] font-bold text-pebble-900 uppercase tracking-wider">Live</span>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => (
  <section id="stack" className="py-32 bg-white">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-20">
         <h2 className="text-3xl font-bold text-pebble-900 mb-6">Production Stack</h2>
         <p className="text-pebble-800/60">Speed. Security. Scalability.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { title: "Frontend", icon: Layout, skills: ["React 18", "TypeScript", "Tailwind", "Framer Motion"] },
           { title: "Backend & AI", icon: Cpu, skills: ["Node.js", "Vercel Edge", "Gemini 2.0", "PostgreSQL"] },
           { title: "DevOps", icon: Globe, skills: ["Git/GitHub", "CI/CD", "Security", "Analytics"] }
         ].map((stack, i) => (
           <div key={i} className="p-6 rounded-2xl border border-pebble-200 bg-white hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-pebble-100">
                 <stack.icon className="w-5 h-5 text-pebble-900" />
                 <h3 className="text-sm font-mono text-pebble-900 uppercase tracking-widest">{stack.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                 {stack.skills.map(s => (
                    <span key={s} className="px-3 py-1.5 rounded bg-pebble-100 text-pebble-800 text-xs font-medium">{s}</span>
                 ))}
              </div>
           </div>
         ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 bg-pebble-100 text-center border-t border-pebble-200">
    <div className="max-w-2xl mx-auto px-6">
      <h2 className="text-5xl font-black text-pebble-900 mb-8 tracking-tight">Let's Build.</h2>
      <p className="text-xl text-pebble-800/70 mb-12 leading-relaxed">
        I’m open to freelance and full-time opportunities. If you need an engineer who understands product strategy as well as code, let’s talk.
      </p>
      
      <div className="flex justify-center gap-4">
        <a href="mailto:kaziomeirmustafa@gmail.com" className="px-8 py-4 bg-pebble-900 text-white font-bold rounded-xl shadow-lg hover:bg-black transition-all">
          Email Me
        </a>
        <a href="https://www.linkedin.com/in/omeir-mustafa-uddin/" target="_blank" className="px-8 py-4 bg-white text-pebble-900 font-bold rounded-xl border border-pebble-200 hover:bg-pebble-50 transition-all">
          LinkedIn
        </a>
      </div>
      
      <footer className="mt-24 text-pebble-400 text-xs uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Omeir Mustafa. All rights reserved.</p>
      </footer>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="bg-pebble-100 min-h-screen text-pebble-900 font-sans selection:bg-pebble-900 selection:text-white">
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