"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Code2, Download, Smartphone, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const highlights = [
    { value: '2+', label: 'years building web and mobile apps' },
    { value: '1+', label: 'years of internship experience' },
    { value: '6+', label: 'AI, web, and mobile projects shipped' },
  ];

  return (
    <section className="hero-gradient min-h-screen pt-28 pb-20 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
              <Sparkles className="h-4 w-4" />
              Junior SDE at Aura-AI
            </div>

            <motion.h1
              className="text-4xl md:text-6xl xl:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Building useful AI, web, and mobile products.
            </motion.h1>

            <motion.p
              className="text-zinc-300 text-lg md:text-xl max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I am Samarth Shukla, a full-stack and mobile developer working across Next.js,
              FastAPI, Flutter, React Native, and AI workflows for education, sports analytics,
              travel, and voice tooling.
            </motion.p>
          </div>

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
              href="/Samarth_Shukla_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-3 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {highlights.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="gradient-card p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-zinc-400">Current focus</p>
                <h2 className="mt-1 text-2xl font-bold text-white">AI product engineering</h2>
              </div>
              <Code2 className="h-8 w-8 text-emerald-300" />
            </div>

            <div className="mt-6 space-y-5">
              <FocusItem
                icon={<Smartphone className="h-5 w-5" />}
                title="Advanced Impactor"
                text="Flutter cricket video analysis app with computer vision, YOLO object detection models, clip review, pitch maps, wagon wheels, and cloud sync."
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white"
      >
        <button
          type="button"
          onClick={scrollToExperience}
          className="flex flex-col items-center text-zinc-400 transition-colors hover:text-white"
        >
          <span className="mb-2">Scroll to explore</span>
          <ArrowDown className="animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};

const FocusItem = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <div className="flex gap-4 rounded-lg border border-white/10 bg-black/20 p-4">
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-emerald-400/10 text-emerald-300">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-zinc-400">{text}</p>
      </div>
    </div>
  );
};

export default Hero;
