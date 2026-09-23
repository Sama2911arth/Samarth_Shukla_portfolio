"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const highlights = [
    { value: '3+', label: 'production apps shipped at Advanced Impactor' },
    { value: '1+', label: 'years of professional software engineering' },
    { value: '8+', label: 'AI, web, and mobile projects built' },
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden">
      <div className="aurora-field">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
        <div className="grid-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl flex flex-col items-center text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[hsl(var(--aurora-1)/0.1)] px-4 py-2 text-sm text-[hsl(var(--aurora-1))] dark:text-[hsl(var(--aurora-2))]">
            <Sparkles className="h-4 w-4" />
            Software Engineer at Advanced Impactor
          </div>

          <motion.h1
            className="font-display text-4xl md:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building <span className="text-gradient">useful AI</span> products, end to end.
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I am Samarth Shukla, a software engineer working across React, Next.js, FastAPI,
            Flutter, and AWS. I build production CRMs, analytics dashboards, and computer-vision
            pipelines for sports analytics, EdTech, and voice tooling.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#projects" className="gradient-button">
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="/Samarth-Shukla_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-foreground/[0.03] px-5 py-3 font-medium text-foreground transition hover:bg-foreground/[0.08]"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-xl pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {highlights.map((item) => (
              <div key={item.label} className="gradient-card p-4">
                <p className="font-display text-2xl font-bold text-foreground">{item.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          type="button"
          onClick={scrollToExperience}
          className="flex flex-col items-center text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="mb-2 text-sm">Scroll to explore</span>
          <ArrowDown className="animate-bounce h-4 w-4" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
