/* eslint-disable @next/next/no-img-element */
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24 4.8 4.8 0 0 0 3-4.76c0-1.76-.71-3.24-2-4.24a4 4 0 0 0 .2-3 2.7 2.7 0 0 0-2-1c-1 0-2 .76-3 1.76A9 9 0 0 0 12 4.5a9 9 0 0 0-3-.5c-1-1-2-1.76-3-1.76a2.7 2.7 0 0 0-2 1 4 4 0 0 0 .2 3c-1.29 1-2 2.48-2 4.24a4.8 4.8 0 0 0 3 4.76A4.8 4.8 0 0 0 5 18v4" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: "FilmInsight",
    category: "AI & RAG Platform",
    description: "Developed a RAG-based movie screenplay analysis platform that enables users to ask natural language questions and receive context-aware answers from movie scripts. Built an automated ingestion pipeline using HuggingFace embeddings and ChromaDB to perform semantic retrieval. Implemented a full-stack application with React, FastAPI, Supabase, authentication, AI chat, and an admin dashboard.",
    tech: ["React", "FastAPI", "RAG", "ChromaDB", "Groq LLM", "HuggingFace", "Supabase", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2560&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Toxic Comment Classification",
    category: "Machine Learning Pipeline",
    description: "Developed an AI-powered toxic comment moderation system using BERT to classify harmful content including toxicity, threats, insults, and identity-based hate speech. Built a production-ready ML pipeline with FastAPI backend, preprocessing workflow, Docker containerization, and Jenkins-based CI/CD automation. Deployed on Oracle Cloud Infrastructure (OCI) with an interactive Gradio interface.",
    tech: ["Python", "BERT", "NLP", "PyTorch", "FastAPI", "Docker", "Jenkins CI/CD", "OCI", "Gradio"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2160&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Cloud Honeypot with Real-Time Alert System",
    category: "Cloud Security",
    description: "Designed and deployed a cloud-based honeypot system on AWS for real-time cyber attack monitoring and logging. Integrated CloudWatch, SNS, and S3 for automated attack alerts, monitoring, forensic log storage, and security analytics. Implemented Fail2Ban and custom monitoring scripts, capturing and analyzing 138+ attack events from 20+ unique IP addresses within 24 hours.",
    tech: ["AWS EC2", "CloudWatch", "SNS", "S3", "Linux", "Fail2Ban"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2560&auto=format&fit=crop",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-background pt-16 pb-32 px-6 md:px-12 lg:px-24 z-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-bold mb-24 text-white tracking-tighter">
          Selected Work
        </h2>
        
        <div className="flex flex-col gap-32">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center group`}
            >
              <div className="w-full lg:w-3/5 overflow-hidden rounded-3xl relative aspect-[16/10] bg-white/5 border border-white/10 backdrop-blur-sm group-hover:border-white/20 transition-colors duration-500">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="w-full lg:w-2/5 flex flex-col">
                <p className="text-sm font-medium tracking-widest uppercase text-white/50 mb-4 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-white/50" />
                  {project.category}
                </p>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed mb-8 text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t) => (
                    <span key={t} className="px-4 py-1.5 rounded-full border border-white/20 text-white/80 text-xs font-medium tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6 mt-auto">
                  <a href="https://github.com/Yokesh333" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-white/70 transition-colors uppercase tracking-widest text-sm font-semibold">
                    <GithubIcon className="w-5 h-5" /> Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-white hover:text-white/70 transition-colors uppercase tracking-widest text-sm font-semibold">
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
