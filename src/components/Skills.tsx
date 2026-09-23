"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cloud, Code2, Database, Server, Smartphone } from 'lucide-react';

const skillGroups = [
  {
    title: 'Languages',
    icon: <Code2 className="h-5 w-5" />,
    skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
    accent: 'var(--aurora-1)',
  },
  {
    title: 'Backend & APIs',
    icon: <Server className="h-5 w-5" />,
    skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs'],
    accent: 'var(--aurora-2)',
  },
  {
    title: 'AI & ML',
    icon: <BrainCircuit className="h-5 w-5" />,
    skills: ['YOLO', 'YOLO Pose', 'OpenCV', 'LangChain', 'Google Gemini', 'OpenAI Whisper'],
    accent: 'var(--aurora-3)',
  },
  {
    title: 'Frontend & Mobile',
    icon: <Smartphone className="h-5 w-5" />,
    skills: ['React.js', 'Next.js', 'Vite', 'React Native', 'Flutter'],
    accent: 'var(--aurora-4)',
  },
  {
    title: 'Databases',
    icon: <Database className="h-5 w-5" />,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Firebase'],
    accent: 'var(--aurora-1)',
  },
  {
    title: 'Cloud & Tools',
    icon: <Cloud className="h-5 w-5" />,
    skills: ['AWS Lambda', 'API Gateway', 'Amazon S3', 'Docker', 'Git', 'GitHub', 'Ubuntu', 'Vercel'],
    accent: 'var(--aurora-2)',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-24 relative overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[hsl(var(--aurora-4))] to-[hsl(var(--aurora-1))]" />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.06 }}
              className="gradient-card p-6"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `hsl(${group.accent} / 0.12)`, color: `hsl(${group.accent})` }}
                >
                  {group.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
