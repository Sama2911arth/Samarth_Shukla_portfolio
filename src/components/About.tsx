"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cloud, Code2, GraduationCap, MapPin, Sparkles } from 'lucide-react';

const About = () => {
  const coreSkills = [
    'Python',
    'TypeScript',
    'React.js',
    'Next.js',
    'FastAPI',
    'AWS Lambda',
    'MongoDB',
    'YOLO',
    'OpenCV'
  ];

  const focusAreas = [
    {
      icon: <Code2 className="h-5 w-5" />,
      title: 'Full-stack delivery',
      text: 'React, Vite, Next.js, Node.js, Express, and FastAPI, deployed on AWS, Vercel, and Render.'
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: 'Cloud & performance',
      text: 'AWS Lambda, API Gateway, and S3-backed APIs, with lazy loading, code splitting, and connection pooling for scale.'
    },
    {
      icon: <BrainCircuit className="h-5 w-5" />,
      title: 'Applied AI & CV',
      text: 'YOLO, YOLO Pose, OpenCV, LangChain, Gemini, and Whisper across cricket analytics, EdTech, and voice tooling.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[hsl(var(--aurora-1))] to-[hsl(var(--aurora-3))]" />
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
          {/* Narrative column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-5">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground leading-snug">
                I like building software that actually gets used.
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                As a Software Engineer at Advanced Impactor, I work on a React + Vite CRM running on AWS,
                internal analytics dashboards, and a computer-vision pipeline for cricket analytics.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                I care about shipping complete systems: clean interfaces, practical architecture, reliable
                data models, cloud infrastructure that holds up under load, and AI features that reduce real
                user effort instead of just adding novelty.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                What I focus on
              </p>
              <div className="divide-y divide-border">
                {focusAreas.map((area) => (
                  <div key={area.title} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--aurora-1)/0.1)] text-[hsl(var(--aurora-1))] dark:text-[hsl(var(--aurora-2))]">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{area.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{area.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Info sidebar card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="gradient-card p-6 lg:sticky lg:top-28"
          >
            <div className="flex items-start gap-4 pb-6 border-b border-border">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--aurora-1)/0.1)] text-[hsl(var(--aurora-1))] dark:text-[hsl(var(--aurora-2))]">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Education</p>
                <h4 className="mt-1 font-semibold text-foreground">B.Tech in Computer Science</h4>
                <p className="mt-1 text-sm text-muted-foreground">Jaypee University of Engineering and Technology, Guna</p>
                <p className="mt-1 text-xs text-muted-foreground/70">Sept 2022 - May 2026</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 py-6 border-b border-border">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[hsl(var(--aurora-3))]" />
                <div>
                  <p className="text-xs text-muted-foreground">Based in</p>
                  <p className="text-sm text-foreground">Sagar, MP</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="h-4 w-4 mt-0.5 shrink-0 text-[hsl(var(--aurora-4))]" />
                <div>
                  <p className="text-xs text-muted-foreground">Experience</p>
                  <p className="text-sm text-foreground">1+ years, remote</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-foreground font-semibold mb-3 text-sm">Core stack</h3>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-secondary border border-border text-foreground/80"
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
