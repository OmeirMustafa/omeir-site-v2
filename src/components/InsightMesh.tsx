import React from 'react';
import { ExternalLink, Zap, Brain, Layout } from 'lucide-react';

export const InsightMesh: React.FC = () => {
  return (
    <section id="insight-mesh" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">Featured Case Study</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">InsightMesh</h2>
          <p className="text-slate-400 mt-4 max-w-2xl text-lg">
            A next-generation AI processing engine designed to visualize and manipulate complex data streams in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Problem */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 text-red-400">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">The Challenge</h3>
            <p className="text-slate-400 leading-relaxed">
              Traditional data dashboards are static and struggle to interpret unstructured data streams. Users needed a way to query live data using natural language without writing complex SQL or Python scripts.
            </p>
          </div>

          {/* Solution */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-violet-500/30 transition-colors">
             <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mb-6 text-violet-400">
              <Brain size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">The Solution</h3>
            <p className="text-slate-400 leading-relaxed">
              I engineered an LLM-orchestrated layer that sits between the raw data and the UI. InsightMesh dynamically generates visualization components based on user intent, utilizing React for the frontend and Python/FastAPI for the inference engine.
            </p>
          </div>

          {/* Demo CTA */}
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
             <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                  <Layout size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Live Demo</h3>
                <p className="text-blue-100/70 mb-6">
                  Experience the power of InsightMesh directly in your browser. No sign-up required for the public beta.
                </p>
            </div>
            <a 
              href="https://insightmesh-gamma.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/20"
            >
              Try InsightMesh
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Visual Placeholder for Mockup */}
        <div className="mt-12 w-full aspect-video rounded-2xl border border-white/10 bg-slate-950 relative overflow-hidden flex items-center justify-center group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-slate-950" />
             {/* Abstract UI Mockup using CSS */}
             <div className="w-3/4 h-3/4 bg-slate-900 rounded-lg border border-white/5 shadow-2xl relative p-4 flex flex-col gap-4 transition-transform group-hover:scale-[1.02] duration-500">
                <div className="h-8 w-full border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 flex gap-4">
                    <div className="w-1/4 bg-white/5 rounded h-full animate-pulse" />
                    <div className="flex-1 bg-white/5 rounded h-full" />
                </div>
             </div>
             <p className="absolute bottom-4 text-sm text-slate-500 font-mono">InsightMesh Interface Concept</p>
        </div>
      </div>
    </section>
  );
};