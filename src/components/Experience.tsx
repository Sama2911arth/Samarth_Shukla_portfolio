"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Linkedin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Advanced Impactor",
    companyUrl: "https://advancedimpactor.com",
    linkedinUrl: "https://www.linkedin.com/company/advancedimpactor/posts/?feedView=all",
    period: "Mar 2026 - Present",
    metrics: ["3+ apps shipped", "10+ metrics tracked", "100+ videos analyzed"],
    description: [
      "Engineered 3+ production applications, including Advanced Impactor, AIFaktory, and CoachPlex, with React.js and modern full-stack technologies.",
      "Architected the Advanced Impactor CRM (React + Vite) on AWS Lambda, API Gateway, and S3, standardizing MongoDB connection pooling across Lambda functions to fix recurring serverless database issues.",
      "Built an internal analytics dashboard tracking 10+ platform metrics, and improved performance through lazy loading, code splitting, and API optimization.",
      "Developed 4+ AI-powered cricket analytics modules (Pitch Maps, Wagon Wheels, Shot Maps, biomechanics) with Python, OpenCV, YOLO, and YOLO Pose, validated across 100+ videos."
    ],
  },
  {
    id: 2,
    role: "SDE Intern",
    company: "Aura-AI",
    companyUrl: "https://aurait.ai",
    linkedinUrl: "https://www.linkedin.com/company/aurai-ai/posts/?feedView=all",
    period: "Aug 2025 - Feb 2026",
    metrics: ["15+ features shipped", "5+ modules built", "100+ videos validated"],
    description: [
      "Engineered 4+ cricket analytics modules (Pitch Maps, Wagon Wheels, Shot Maps) using Flutter and Python for Advanced Impactor.",
      "Implemented and tested 15+ Flutter features for video upload, playback, AI analytics, and authentication across Android and iOS.",
      "Managed the Ubuntu-based AI pipeline (AWS S3, MongoDB, Python) and validated a custom YOLO model with OpenCV across 100+ cricket videos.",
      "Architected PadhAI, a full-stack learning platform with 5+ modules and a RAG-based AI assistant for contextual PDF Q&A, image queries, and persistent chat history."
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
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
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[hsl(var(--aurora-2))] to-[hsl(var(--aurora-4))]" />
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[hsl(var(--aurora-1))] via-[hsl(var(--aurora-3))] to-transparent sm:left-[23px]" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
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
    companyUrl: string;
    linkedinUrl: string;
    period: string;
    metrics: string[];
    description: string[];
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
      className="relative pl-12 sm:pl-16"
    >
      <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-[hsl(var(--aurora-2))] shadow-sm">
        <Briefcase className="h-4 w-4" />
      </div>

      <div className="gradient-card p-6">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h4 className="text-xl font-semibold text-foreground">{experience.role}</h4>
            <div className="flex items-center gap-2 mt-0.5">
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors underline decoration-dotted underline-offset-4"
              >
                {experience.company}
              </a>
              <a
                href={experience.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${experience.company} on LinkedIn`}
                className="text-muted-foreground hover:text-[hsl(var(--aurora-4))] transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" /> {experience.period}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {experience.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-full border border-[hsl(var(--aurora-1)/0.25)] bg-[hsl(var(--aurora-1)/0.08)] px-3 py-1 text-xs font-medium text-[hsl(var(--aurora-1))] dark:text-[hsl(var(--aurora-2))]"
            >
              {metric}
            </span>
          ))}
        </div>

        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
          {experience.description.map((item) => (
            <li
              key={`${experience.id}-${item.substring(0, 20)}`}
              className="flex gap-2 text-sm leading-relaxed text-foreground/80"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--aurora-3))]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
