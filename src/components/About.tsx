"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Database, GraduationCap } from 'lucide-react';

const About = () => {
  const coreSkills = [
    'Python',
    'MERN Stack',
    'AWS',
    'Flutter',
    'React Native',
    'Node.js',
    'OpenCV',
    'YOLO Object Detection Models',
    'Computer Vision'
  ];

  const strengths = [
    {
      icon: <Code2 className="h-5 w-5" />,
      title: 'Full-stack delivery',
      text: 'Next.js, React, Node.js, Express, FastAPI, and deployment on Vercel, Render, and AWS.'
    },
    {
      icon: <BrainCircuit className="h-5 w-5" />,
      title: 'Applied AI',
      text: 'Gemini, Whisper, LangChain, RAG, image queries, and AI-assisted education workflows.'
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: 'Product data flows',
      text: 'MongoDB, PostgreSQL, MySQL, Supabase, Firebase, and Appwrite-backed applications.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-900 relative overflow-hidden">
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
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-amber-300">Me</span>
          </h2>
          <div className="h-1 w-20 stripe-gradient-bg rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="gradient-card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-emerald-400/10 text-emerald-300">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Education</p>
                <h3 className="mt-2 text-xl font-semibold text-white">B.Tech in Computer Science</h3>
                <p className="mt-2 text-zinc-400">Jaypee University of Engineering and Technology, Guna</p>
                <p className="mt-1 text-sm text-zinc-500">Sept 2022 - July 2026</p>
              </div>
            </div>

            <div className="mt-8 grid gap-3">
              {['Data Structures & Algorithms', 'Databases', 'Operating Systems', 'Software Engineering'].map((course) => (
                <div key={course} className="rounded-md border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300">
                  {course}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-zinc-300 leading-relaxed">
              I build product-focused software across web, mobile, backend, and AI workflows. My recent work spans
              cricket video analytics, classroom platforms, AI doubt-solving, voice processing, and responsive EdTech
              applications.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              I care about shipping complete systems: clean user interfaces, practical architecture, reliable data
              models, cloud sync, and AI features that reduce real user effort instead of just adding novelty.
            </p>

            <div className="grid sm:grid-cols-3 gap-3">
              {strengths.map((strength) => (
                <div key={strength.title} className="rounded-lg border border-white/10 bg-zinc-950/50 p-4">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-400/10 text-emerald-300">
                    {strength.icon}
                  </div>
                  <h3 className="font-semibold text-white">{strength.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{strength.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h3 className="text-white font-semibold mb-3">Core stack</h3>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-zinc-950 border border-white/10 text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
