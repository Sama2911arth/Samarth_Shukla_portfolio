"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I am <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                <span className="text-5xl md:text-7xl font-extrabold">Samarth</span> <br />
                <span className="text-4xl md:text-6xl font-extrabold">Shukla</span>

              </span>
            </motion.h1>

            <motion.p
              className="text-zinc-400 text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I'm a passionate tech enthusiast who loves building things. Here's what I do!
            </motion.p>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="gradient-card p-6">
              <div className="flex items-center mb-3">
                <Code className="text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Full Stack Development</h3>
              </div>
              <p className="text-zinc-400">
                Building responsive Web-Apps using MERN Stack. Sometimes I also use other databases.
              </p>
            </div>

            <div className="gradient-card p-6">
              <div className="flex items-center mb-3">
                <Smartphone className="text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Mobile App Development</h3>
              </div>
              <p className="text-zinc-400">
                I design mobile apps with amazing user interfaces using ReactNative.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-4"
          >
            <a
              href="https://drive.google.com/drive/u/0/folders/1geQZ5qW8SGLqxsyVu3HkOWzyJZqq8RPG"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button text-white"
            >
              <span className="relative z-10">Download CV</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700 shadow-xl">
            <Image
              src="https://ext.same-assets.com/508262888/1725302978.webp"
              alt="Samarth's workspace"
              width={500}
              height={400}
              className="rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-center text-zinc-400 text-sm">
                According to ChatGPT, this is how my workspace looks like!
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
      >
        <p className="text-zinc-400 mb-2">Scroll to explore</p>
        <ArrowDown className="animate-bounce" />
      </motion.div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default Hero;
