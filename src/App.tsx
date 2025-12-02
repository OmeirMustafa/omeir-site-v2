import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles, ShieldAlert, Layout, ChevronDown, Cpu, Globe, Zap, ScanEye } from 'lucide-react';

// --- ANIMATION VARIANTS ---

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
          <span className="drop-shadow-lg text-2xl font-extrabold tracking-tighter">Omeir Mustafa</span>
          <span className="inline-block w-1 h-1 rounded-full bg-cyan-500 ml-1 animate-pulse">.</span>
        </motion.div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          {['About', 'Work', 'Stack', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative group hover:text-cyan-400 transition-colors duration-300">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#06b6d4]"></span>
            </a>
          ))}
        </div>
        
        <a href="#contact" className="relative px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-cyan-300 text-sm font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
        
        <motion.div 
          animate={{ x: [0, 100, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[128px]"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[128px]"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10">
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

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none mb-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        >
          Engineering <br />
          <motion.span
            initial={{ filter: "blur(10px)", opacity: 0.2 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]"
          >
            Intelligent
          </motion.span> <br />
          Interfaces.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          I orchestrate systems. I build full-stack AI products 
          that merge <strong className="text-cyan-200 font-medium glow-text">LLMs</strong> with <strong className="text-cyan-200 font-medium glow-text">forensic UX</strong>. 
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
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.3)", borderColor: