"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, LockKeyhole } from 'lucide-react';
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
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Advanced Impactor",
      description: "Flutter cricket analysis app using computer vision for uploading, streaming, reviewing clips, and visualizing match events across Android and iOS.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Flutter", "Python", "OpenCV", "YOLO", "Computer Vision"],
      types: ["ai", "mobile"],
      impact: "Includes YOLO object detection models, impact detection, clip generation, frame extraction, pitch maps, wagon wheels, and role-based access."
    },
    {
      id: 2,
      title: "Video Voice Modifier",
      description: "Full-stack voice tool for audio/video edits with multilingual transcription, voice conversion, grammar control, and lip-sync alignment.",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Next.js", "FastAPI", "Whisper", "Gemini", "Signal Processing"],
      types: ["ai", "web"],
      impact: "Reduced manual editing work by 60% and processed 50+ videos across 20+ languages."
    },
    {
      id: 3,
      title: "PadhAI",
      description: "Web and mobile classroom platform for classes, students, assignments, quizzes, learning posts, and AI-assisted study workflows.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "Firebase", "RAG", "WebSocket", "AI"],
      types: ["ai", "web", "mobile"],
      impact: "Supports image doubts, contextual PDF Q&A, chat history, notifications, and collaborative self-study groups."
    },
    {
      id: 4,
      title: "Travisco",
      description: "AI travel platform where users can upload monument images, discover contextual information, chat with AI, and share media.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
      technologies: ["React.js", "FastAPI", "Gemini", "LangChain", "Firebase"],
      githubUrl: "https://github.com/Sama2911arth/Travisco",
      types: ["ai", "web"],
      impact: "Boosted content discovery with Gemini 1.5 and LangChain-powered filtering and Q&A."
    },
    {
      id: 5,
      title: "Flightly",
      description: "A WebApp for flight bookings and instant PDF e-ticket generation.",
      image: flightly.src,
      technologies: ["Next.js", "MongoDB", "TailwindCSS"],
      githubUrl: "https://flight-booking-frontend-nu.vercel.app/",
      types: ["web"]
    },
    {
      id: 6,
      title: "ChatNest",
      description: "A chat platform designed for quick, effortless conversations with friends.",
      image: chatapp.src,
      technologies: ["Next.js", "TailwindCSS", "Local Storage", "Socket.io"],
      githubUrl: "https://chat-app-using-nextjs.vercel.app/",
      types: ["web"]
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
    <section id="projects" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 stripe-gradient-bg" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-amber-300">Projects</span>
          </h2>
          <div className="h-1 w-20 stripe-gradient-bg rounded-full" />
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-zinc-900/80 border border-white/10 rounded-lg">
            {filterButtons.map((button) => (
              <button
                key={button.value}
                onClick={() => setActiveFilter(button.value)}
                className={`px-4 sm:px-6 py-2 rounded-md text-sm font-medium transition-all ${activeFilter === button.value
                  ? 'bg-emerald-500/15 text-emerald-200'
                  : 'text-zinc-400 hover:text-white'
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
      className="gradient-card overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
        {project.impact && (
          <p className="mb-4 rounded-md border border-emerald-400/10 bg-emerald-400/5 px-3 py-2 text-sm text-emerald-100">
            {project.impact}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={`${project.id}-${tech}`}
              className="px-2 py-1 bg-zinc-950 border border-white/10 rounded-full text-xs text-zinc-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-zinc-950 border border-white/10 rounded-full text-xs text-zinc-400">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex space-x-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-zinc-400 hover:text-white transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-1" /> Project Link
            </a>
          ) : (
            <span className="flex items-center text-zinc-500">
              <LockKeyhole className="h-4 w-4 mr-1" /> Private work
            </span>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-zinc-400 hover:text-white transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-1" /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
