import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'PromptOptimize',
    description: 'A micro-SaaS tool that uses recursive LLM calls to refine user prompts for better generation outcomes. Built with React and Vercel Edge Functions.',
    tech: ['Next.js', 'OpenAI API', 'Tailwind'],
    github: 'https://github.com/omeirmustafa',
    featured: false
  },
  {
    id: '2',
    title: 'DocuChat Enterprise',
    description: 'RAG (Retrieval Augmented Generation) pipeline for querying large PDF technical manuals. Uses vector embeddings for semantic search.',
    tech: ['Python', 'Pinecone', 'React'],
    github: 'https://github.com/omeirmustafa',
    featured: false
  },
  {
    id: '3',
    title: 'CryptoSentiment',
    description: 'Real-time dashboard analyzing Twitter/X sentiment on top 50 cryptocurrencies using NLP transformers and Recharts visualization.',
    tech: ['TypeScript', 'Recharts', 'NLP'],
    github: 'https://github.com/omeirmustafa',
    featured: false
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-bold mb-12">Selected Works</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <div className="flex gap-2">
                 <a href={project.github} className="text-slate-500 hover:text-white" aria-label="Github Repo"><Github size={18} /></a>
              </div>
            </div>
            
            <p className="text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-black/30 text-blue-300 border border-blue-500/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
         <a href="https://github.com/omeirmustafa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-blue-500">
           View full repository on GitHub <ExternalLink size={14} />
         </a>
      </div>
    </section>
  );
};