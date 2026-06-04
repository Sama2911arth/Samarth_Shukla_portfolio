"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cloud, Code2, Database, ScanEye, Wrench } from 'lucide-react';

const skillGroups = [
  {
    title: 'Languages',
    icon: <Code2 className="h-5 w-5" />,
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Frameworks',
    icon: <BrainCircuit className="h-5 w-5" />,
    skills: ['React.js', 'Next.js', 'Express.js', 'Node.js', 'FastAPI', 'React Native', 'Flutter', 'OpenCV']
  },
  {
    title: 'Databases',
    icon: <Database className="h-5 w-5" />,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Firebase', 'Appwrite']
  },
  {
    title: 'AI & Cloud',
    icon: <Cloud className="h-5 w-5" />,
    skills: ['LangChain', 'Google Gemini', 'OpenAI Whisper', 'RAG', 'AWS', 'Render', 'Vercel']
  },
  {
    title: 'Computer Vision',
    icon: <ScanEye className="h-5 w-5" />,
    skills: ['OpenCV', 'YOLO Object Detection Models', 'Video Segmentation', 'Impact Detection', 'Frame Extraction', 'Visual Analytics']
  },
  {
    title: 'Tools',
    icon: <Wrench className="h-5 w-5" />,
    skills: ['Git', 'GitHub', 'Docker', 'Ubuntu', 'Canva', 'Responsive Testing']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 stripe-blue-gradient" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-emerald-300">Technologies</span>
          </h2>
          <div className="h-1 w-20 stripe-blue-gradient rounded-full" />
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
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-400/10 text-cyan-300">
                  {group.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-zinc-950 px-3 py-1 text-sm text-zinc-300"
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
