"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Junior SDE",
      company: "Aura-AI",
      period: "Aug 2025 - Present",
      description: [
        "Built Advanced Impactor, a Flutter cricket video analysis app for uploading, streaming, and reviewing match and practice sessions across Android and iOS.",
        "Contributed to a Python computer-vision pipeline using video segmentation, YOLO object detection models, impact detection, clip generation, and frame extraction.",
        "Implemented visual analytics including pitch maps, wagon wheels, and side-view insights with secure cloud sync and role-based access.",
        "Built PadhAI web and mobile workflows for classes, student management, assignments, quizzes, learning posts, and AI-assisted study support.",
        "Developed AI doubt solving with image queries, contextual PDF Q&A using RAG, chat history, Firebase notifications, and real-time WebSocket chat."
      ],
      icon: <Briefcase className="h-5 w-5" />,
      type: "work"
    },
    {
      id: 2,
      role: "Full Stack Developer Intern",
      company: "Zummit Infolabs",
      period: "Mar 2025 - Jul 2025",
      description: [
        "Spearheaded Digital Nexus AI, a scalable EdTech platform for GenAI, Data Science, and Analytics courses.",
        "Engineered a fully mobile-responsive React.js and Tailwind CSS web app with 100% device compatibility.",
        "Owned frontend architecture decisions, established coding standards, and mentored 3+ interns to speed up onboarding and delivery."
      ],
      icon: <Briefcase className="h-5 w-5" />,
      type: "work"
    },
  ];

  return (
    <section id="experience" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 stripe-purple-pink-gradient" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-red-400">Experience</span>
          </h2>
          <div className="h-1 w-20 stripe-purple-pink-gradient rounded-full" />
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceProps {
  experience: {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string[];
    icon: React.ReactNode;
    type: string;
  };
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="gradient-card p-6"
    >
      <div className="flex items-start">
        <div className="p-2 rounded-md mr-4 bg-amber-400/10 text-amber-300">
          {experience.icon}
        </div>
        <div>
          <h4 className="text-xl font-semibold text-white mb-1">{experience.role}</h4>
          <p className="text-zinc-400 mb-2">{experience.company}</p>
          <div className="flex items-center text-zinc-500 text-sm mb-3">
            <Calendar className="h-4 w-4 mr-1" /> {experience.period}
          </div>
          {experience.description.length > 0 && (
            <ul className="list-disc pl-4 space-y-1">
              {experience.description.map((item) => (
                <li key={`${experience.id}-${item.substring(0, 20)}`} className="text-zinc-300 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
