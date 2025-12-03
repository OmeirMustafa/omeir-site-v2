import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles, ShieldAlert, Layout, ChevronDown, Cpu, Globe, Zap, ScanEye, Brain, GitBranch, Terminal, Palette, MessageSquare, X, Send } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// --- TYPES ---
interface TiltCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- COMPONENTS ---

const TiltCard: React.FC<TiltCardProps> = ({ children, className = "", ...props }) => {
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
      variants={fadeInUp}
      {...props}
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
  <div className="relative h-px w-full my-20 opacity-30">
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

// --- KNOWLEDGE BASE & CHAT ---
const KNOWLEDGE_BASE: Record<string, string> = {
  "email": "You can reach Omeir directly at omeirmustafa.work@gmail.com.",
  "stack": "Omeir's core stack is React 18, TypeScript, Tailwind CSS, Node.js, and Gemini AI.",
  "services": "Omeir specializes in Strategic Web Development, UI/UX Engineering, and Performance Optimization.",
  "project": "His flagship project is SeeThruo, a Decision Intelligence Engine that decodes corporate narratives using AI.",
  "experience": "Omeir bridges the gap between complex engineering and intuitive design to help brands scale.",
  "availability": "Omeir is currently open for freelance and full-time opportunities."
};

const SYSTEM_PROMPT = `
You are the AI Assistant for Omeir Mustafa's portfolio. 
Your goal is to answer questions about Omeir based ONLY on the context below.
Keep answers concise (under 3 sentences), professional, and slightly futuristic/tech-focused.
`;

const AskAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Hi! I'm Omeir's Portfolio Assistant. Ask me about his skills, projects, or contact info." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const handleSend = async (textOverride?: string) => {
    const userMsg = textOverride || input;
    if (!userMsg.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');

    let localResponse = null;
    const lowerText = userMsg.toLowerCase();
    if (lowerText.includes('email') || lowerText.includes('contact')) localResponse = KNOWLEDGE_BASE['email'];
    else if (lowerText.includes('stack') || lowerText.includes('tech')) localResponse = KNOWLEDGE_BASE['stack'];
    else if (lowerText.includes('service') || lowerText.includes('offer')) localResponse = KNOWLEDGE_BASE['services'];
    else if (lowerText.includes('project') || lowerText.includes('work')) localResponse = KNOWLEDGE_BASE['project'];

    if (localResponse) {
      setTimeout(() => { setMessages(prev => [...prev, { role: 'ai', text: localResponse! }]); }, 600);
      return;
    }
    
    setIsLoading(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
         setTimeout(() => {
            setMessages(prev => [...prev, { role: 'ai', text: "My neural link is offline. Please email Omeir directly." }]);
            setIsLoading(false);
         }, 1000);
         return;
      }
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const chat = model.startChat({ history: [{ role: "user", parts: [{ text: SYSTEM_PROMPT }] }, { role: "model", parts: [{ text: "Ready." }] }] });
      const result = await chat.sendMessage(userMsg);
      setMessages(prev => [...prev, { role: 'ai', text: result.response.text() }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Connection interrupted. Please email Omeir directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="fixed bottom-6 right-6 z-50">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(!isOpen)} className="group relative flex items-center justify-center w-14 h-14 bg-void-900 border border-quantum-cyan/50 rounded-full shadow-2xl">
          <div className="absolute inset-0 bg-quantum-cyan/20 rounded-full blur-md group-hover:animate-pulse"></div>
          {isOpen ? <X className="text-white w-6 h-6" /> : <Sparkles className="text-quantum-cyan w-6 h-6" />}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[350px] h-[450px] bg-void-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden neon-border-glow">
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-bold text-white tracking-wider">PORTFOLIO AI</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed ${msg.role === 'user' ? 'bg-quantum-cyan text-black font-bold' : 'bg-white/10 text-slate-200 border border-white/5'}`}>{msg.text}</div>
                </div>
              ))}
              {isLoading && <div className="text-xs text-slate-500 animate-pulse">Thinking...</div>}
              <div ref={messagesEndRef} />
            </div>
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
               {["Services?", "Contact info?", "Stack?"].map(q => (
                 <motion.button key={q} onClick={() => handleSend(q)} whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }} whileTap={{ scale: 0.95 }} className="whitespace-nowrap px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-quantum-cyan transition-colors">{q}</motion.button>
               ))}
            </div>
            <div className="p-4 border-t border-white/10 bg-black/20">
              <div className="relative flex items-center">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask anything..." className="w-full bg-void-900 border border-white/10 rounded-full py-3 pl-4 pr-10 text-xs text-white focus:outline-none focus:border-quantum-cyan/50 transition-colors" />
                <motion.button onClick={() => handleSend()} disabled={isLoading || !input.trim()} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="absolute right-2 p-1.5 rounded-full bg-quantum-cyan text-black disabled:opacity-50"><Send size={14} /></motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

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
        {/* ANIMATED LOGO */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          whileHover={{ scale: 1.05 }}
          className="font-heading font-bold text-xl tracking-wider text-white flex items-center gap-1 flex-shrink-0 cursor-pointer"
        >
          Omeir <span className="text-quantum-cyan">Mustafa</span>
        </motion.div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          {['About', 'Services', 'Work'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative group hover:text-white transition-colors duration-300">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-quantum-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact" 
          className="px-5 py-2 rounded-lg border border-white/10 text-xs font-bold hover:bg-white/5 hover:text-white transition-all text-slate-300"
        >
          Contact
        </motion.a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center justify-center">
      <AuroraBackground />
      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <motion.div 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
           className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-quantum-cyan mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-quantum-cyan animate-pulse"></span>
          AVAILABLE FOR NEW PROJECTS
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6"
        >
          Building Digital Experiences <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-quantum-cyan to-quantum-purple">That Drive Growth.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I bridge the gap between complex engineering and intuitive design—helping forward-thinking brands scale through high-performance web solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <motion.a 
            href="#work" 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34,211,238,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-void-900 font-bold rounded-lg hover:bg-quantum-cyan transition-colors text-sm flex items-center gap-2"
          >
             View Selected Work <ArrowRight size={16} />
          </motion.a>
          <motion.a 
            href="https://seethruo-engine.vercel.app/" 
            target="_blank" 
            whileHover={{ scale: 1.05, borderColor: "rgba(34,211,238,0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-white font-bold rounded-lg border border-white/10 hover:bg-white/5 transition-all text-sm"
          >
            Launch App
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-20 relative z-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Behind the Code</h2>
        <p className="text-base text-slate-400 max-w-3xl mx-auto leading-relaxed">
          I am not just a developer; I am a digital architect focused on business outcomes. With a background in modern frontend frameworks and a keen eye for user experience, I help clients transition from ideas to scalable products.
        </p>
      </div>

      <motion.div 
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <TiltCard className="p-8 rounded-xl bg-void-800/40 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-500/10"><Layout className="w-5 h-5 text-blue-400" /></div>
            <h3 className="font-heading text-lg font-bold text-white">Frontend Core</h3>
          </div>
          <div className="flex flex-wrap gap-2">
             {["React 18+", "TypeScript", "Next.js", "HTML5 / CSS3"].map(s => (
                <span key={s} className="px-3 py-1.5 rounded-md bg-white/5 text-slate-300 text-xs border border-white/5">{s}</span>
             ))}
          </div>
        </TiltCard>
        <TiltCard className="p-8 rounded-xl bg-void-800/40 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-purple-500/10"><Palette className="w-5 h-5 text-purple-400" /></div>
            <h3 className="font-heading text-lg font-bold text-white">Styling & UI</h3>
          </div>
          <div className="flex flex-wrap gap-2">
             {["Tailwind CSS", "Framer Motion", "Shadcn/UI", "Figma"].map(s => (
                <span key={s} className="px-3 py-1.5 rounded-md bg-white/5 text-slate-300 text-xs border border-white/5">{s}</span>
             ))}
          </div>
        </TiltCard>
        <TiltCard className="p-8 rounded-xl bg-void-800/40 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-green-500/10"><Terminal className="w-5 h-5 text-green-400" /></div>
            <h3 className="font-heading text-lg font-bold text-white">Backend & Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
             {["Node.js", "PostgreSQL", "Git / CI/CD", "Vercel"].map(s => (
                <span key={s} className="px-3 py-1.5 rounded-md bg-white/5 text-slate-300 text-xs border border-white/5">{s}</span>
             ))}
          </div>
        </TiltCard>
      </motion.div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-20 relative z-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Services</h2>
        <p className="text-sm text-slate-400 uppercase tracking-widest">Strategic Implementation</p>
      </div>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Globe, title: "Strategic Web Development", desc: "Building scalable, SEO-optimized, lightning-fast applications using React, TypeScript, and Next.js.", color: "text-quantum-cyan" },
          { icon: Layout, title: "UI/UX Engineering", desc: "Translating brand identity into pixel-perfect, accessible interfaces. I focus on micro-interactions and fluidity.", color: "text-quantum-purple" },
          { icon: Zap, title: "Performance Optimization", desc: "Auditing and refactoring existing codebases to improve Core Web Vitals, reduce load times, and increase conversion rates.", color: "text-yellow-400" },
        ].map((item, i) => (
          <TiltCard key={i} className="p-8 rounded-2xl bg-void-800/30 border border-white/5 hover:border-quantum-cyan/30 transition-colors">
            <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
            <h3 className="font-heading text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </TiltCard>
        ))}
      </motion.div>
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
    <section id="work" className="py-16 relative z-10" ref={ref}> 
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 opacity-50">
          <div className="h-px flex-grow bg-white/10"></div>
          <span className="font-mono text-quantum-cyan text-[10px] tracking-widest uppercase">Flagship Project</span>
          <div className="h-px flex-grow bg-white/10"></div>
        </div>

        <TiltCard className="rounded-2xl border border-white/10 bg-void-800/40 backdrop-blur-xl overflow-hidden neon-border-glow">
          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            <div className="p-8 md:p-12 flex flex-col justify-center"> 
              <div className="flex items-center gap-3 mb-6">
                 <ScanEye className="w-8 h-8 text-quantum-cyan" />
                 <h3 className="font-heading text-3xl font-bold text-white tracking-tight">SeeThruo</h3>
              </div>
              <p className="text-xs text-quantum-cyan/80 mb-6 font-mono uppercase">Decision Intelligence Engine</p> 
              <p className="text-slate-300 mb-8 leading-relaxed text-sm">
                A next-generation AI system engineered to interpret corporate narratives, surface media bias, and uncover the strategic intent beneath every message.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Gemini 2.0', 'React 18', 'Vercel Edge', 'Tailwind'].map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded border border-white/10 text-[10px] text-slate-400 font-mono">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://seethruo-engine.vercel.app/" target="_blank" className="px-5 py-2 bg-quantum-cyan text-void-900 font-bold rounded-lg hover:bg-white transition-colors flex items-center gap-2 text-xs">
                  Live System <ExternalLink size={14} />
                </motion.a>
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
              </motion.div>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 text-center relative overflow-hidden z-10">
    <div className="max-w-3xl mx-auto px-6 relative z-10">
      <h2 className="font-heading text-4xl font-bold text-white mb-6">Ready to elevate your digital presence?</h2>
      <p className="text-sm text-slate-400 max-w-lg mx-auto mb-12">
        I am currently accepting new projects. Tell me about your goals, and let's determine if we are a good fit.
      </p>
      <div className="flex justify-center">
        <motion.a 
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34,211,238,0.4)" }}
          whileTap={{ scale: 0.95 }}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=omeirmustafa.work@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-white text-void-900 font-bold rounded-full hover:bg-quantum-cyan transition-all flex items-center gap-2 text-sm shadow-xl shadow-white/10"
        >
          <MessageSquare size={18} /> Start a Conversation
        </motion.a>
      </div>
      <footer className="mt-32 text-slate-600 text-[10px] uppercase tracking-widest font-mono pt-8 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Omeir Mustafa. Systems Active. All rights reserved.</p>
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
      <Services />
      <AnimatedDivider />
      <FeaturedProject />
      <AnimatedDivider />
      <Contact />
      <AskAI />
    </div>
  );
};

export default App;