"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, LockKeyhole, Sparkles } from 'lucide-react';
import flightly from '../../public/images/flightly.png'
import chatapp from '../../public/images/chatapp.png'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  types: string[];
  impact?: string;
  category: 'work' | 'personal';
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Video Voice Modifier",
      description: "Full-stack voice tool for video edits with multilingual transcription, voice conversion, grammar control, and lip-sync alignment.",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Next.js", "FastAPI", "OpenAI Whisper", "Google Gemini", "Signal Processing"],
      types: ["ai", "web"],
      category: "personal",
      impact: "Voice conversion across 20+ languages and 50+ videos, cutting transcription and dubbing time by 80% with >90% lip-sync accuracy."
    },
    {
      id: 2,
      title: "Travisco",
      description: "AI travel platform where users can upload monument images, discover contextual information, chat with AI, and share media.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
      technologies: ["React.js", "FastAPI", "Google Gemini", "LangChain", "Firebase"],
      githubUrl: "https://github.com/Sama2911arth/Travisco",
      types: ["ai", "web"],
      category: "personal",
      impact: "Cut page-load time by 50% and media-upload processing by 60%, with 92% content-filtering accuracy via Gemini and LangChain."
    },
    {
      id: 3,
      title: "Advanced Impactor",
      description: "Production CRM and Flutter cricket analysis app with a computer-vision pipeline for uploading, reviewing, and visualizing match footage.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "Vite", "Flutter", "Python", "OpenCV", "YOLO", "AWS Lambda"],
      types: ["ai", "web", "mobile"],
      category: "work",
      impact: "CRM on AWS Lambda/API Gateway/S3 plus Pitch Map, Wagon Wheel, Shot Map, and biomechanics modules validated across 100+ videos."
    },
    {
      id: 4,
      title: "AIFaktory",
      description: "Production application built at Advanced Impactor using React.js and modern full-stack technologies for scalable AI-driven workflows.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      technologies: ["React.js", "Node.js", "AWS", "MongoDB"],
      types: ["ai", "web"],
      category: "work",
    },
    {
      id: 5,
      title: "CoachPlex",
      description: "Production coaching and analytics application built at Advanced Impactor, part of a 3+ app suite delivered on a shared full-stack architecture.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
      technologies: ["React.js", "Node.js", "AWS", "MongoDB"],
      types: ["web", "mobile"],
      category: "work",
    },
    {
      id: 6,
      title: "PadhAI",
      description: "Full-stack learning platform with 5+ modules for class management, assignments, quizzes, and a RAG-based AI assistant.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "Firebase", "RAG", "WebSocket", "AI"],
      types: ["ai", "web", "mobile"],
      category: "work",
      impact: "Contextual PDF Q&A, image-based doubt solving, persistent chat history, and real-time notifications."
    },
    {
      id: 7,
      title: "Flightly",
      description: "A WebApp for flight bookings and instant PDF e-ticket generation.",
      image: flightly.src,
      technologies: ["Next.js", "MongoDB", "TailwindCSS"],
      liveUrl: "https://flight-booking-frontend-nu.vercel.app/",
      types: ["web"],
      category: "personal",
    },
    {
      id: 8,
      title: "ChatNest",
      description: "A chat platform designed for quick, effortless conversations with friends.",
      image: chatapp.src,
      technologies: ["Next.js", "TailwindCSS", "Local Storage", "Socket.io"],
      liveUrl: "https://chat-app-using-nextjs.vercel.app/",
      types: ["web"],
      category: "personal",
    }
  ];

  const filterButtons = [
    { name: "All", value: "all" },
    { name: "AI", value: "ai" },
    { name: "Web", value: "web" },
    { name: "Mobile", value: "mobile" }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.types.includes(activeFilter));

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[hsl(var(--aurora-1))] to-[hsl(var(--aurora-3))]" />
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 gradient-card">
            {filterButtons.map((button) => (
              <button
                key={button.value}
                onClick={() => setActiveFilter(button.value)}
                className={`px-4 sm:px-6 py-2 rounded-xl text-sm font-medium transition-all ${activeFilter === button.value
                  ? 'bg-[hsl(var(--aurora-1)/0.15)] text-[hsl(var(--aurora-1))] dark:text-[hsl(var(--aurora-2))]'
                  : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {button.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="gradient-card overflow-hidden group flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <span
          className={`absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium text-white backdrop-blur-md ${
            project.category === 'work'
              ? 'border-white/15 bg-black/40'
              : 'border-white/15 bg-black/40'
          }`}
        >
          {project.category === 'work' ? (
            <Briefcase className="h-3 w-3" />
          ) : (
            <Sparkles className="h-3 w-3" />
          )}
          {project.category === 'work' ? 'Professional' : 'Personal'}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        {project.impact && (
          <p className="mb-4 rounded-lg border border-[hsl(var(--aurora-1)/0.2)] bg-[hsl(var(--aurora-1)/0.06)] px-3 py-2 text-sm text-foreground/80">
            {project.impact}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={`${project.id}-${tech}`}
              className="px-2 py-1 bg-secondary border border-border rounded-full text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-secondary border border-border rounded-full text-xs text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex space-x-3 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-1" /> Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
            </a>
          )}
          {!project.githubUrl && !project.liveUrl && (
            <span className="flex items-center text-muted-foreground/60">
              <LockKeyhole className="h-4 w-4 mr-1" /> Private work
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
