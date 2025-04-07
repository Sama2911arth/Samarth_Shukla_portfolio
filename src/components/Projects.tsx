"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  type: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Travisco",
      description: "Developed a website where users can upload images of famous monuments and get descriptions.",
      image: "https://ext.same-assets.com/508262888/912774595.png",
      technologies: ["Gen-AI", "LangChain", "React.js", "Firebase"],
      githubUrl: "https://github.com/Sama2911arth/Travisco",
      type: "web"
    },
    {
      id: 2,
      title: "Sociopedia",
      description: "A social media platform where users can share posts and interact.",
      image: "https://ext.same-assets.com/508262888/142484516.png",
      technologies: ["MERN Stack", "Redux.js", "React.js", "Node.js", ""],
      githubUrl: "https://github.com/Sama2911arth/Sociopedia",
      type: "web"
    },
    {
      id: 3,
      title: "CodingPro UI",
      description: "UI for a coding institute's website.",
      image: "https://ext.same-assets.com/508262888/837915585.png",
      technologies: ["Frontend", "React.js", "Figma"],
      githubUrl: "https://github.com/Sama2911arth/CodingPro-Website-UI",
      type: "web"
    },
    {
      id: 4,
      title: "Book-Store WebApp",
      description: "An app to search and browse book collections.",
      image: "https://ext.same-assets.com/508262888/1307425892.png",
      technologies: ["Next.js", "MongoDB", "Aceternity UI", "Node.js", "TailwindCSS"],
      githubUrl: "https://github.com/Sama2911arth/Book-Store-Project-using-MERN-and-Tailwind-CSS",
      type: "web"
    },
    {
      id: 5,
      title: "EventBizz",
      description: "An app to explore and book events.",
      image: "https://ext.same-assets.com/508262888/3588758759.png",
      technologies: ["Mobile App", "React Native", "AppWrite", "TypeScript"],
      githubUrl: "https://github.com/Sama2911arth/EventBizz-App",
      type: "mobile"
    },
    {
      id: 6,
      title: "MealDrive",
      description: "App to search recipes and cooking instructions.",
      image: "https://ext.same-assets.com/508262888/1131675183.png",
      technologies: ["Mobile App", "React Native", "AppWrite"],
      githubUrl: "https://github.com/Sama2911arth/MealDrive",
      type: "mobile"
    }
  ];

  const filterButtons = [
    { name: "All", value: "all" },
    { name: "Web", value: "web" },
    { name: "Mobile", value: "mobile" }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="projects" className="py-24 bg-zinc-950 relative">
      <div className="absolute top-0 left-0 right-0 h-1 stripe-gradient-bg" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <div className="h-1 w-20 stripe-gradient-bg rounded-full" />
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-zinc-800/40 rounded-lg">
            {filterButtons.map((button) => (
              <button
                key={button.value}
                onClick={() => setActiveFilter(button.value)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${activeFilter === button.value
                  ? 'bg-zinc-700 text-white'
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

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={`${project.id}-${tech}`}
              className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex space-x-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="h-4 w-4 mr-1" /> Code
          </a>
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
