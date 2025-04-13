"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  const coreSkills = [
    'React.js',
    'Node.js',
    'MongoDB',
    'Express',
    'React Native',
    'JavaScript',
    'TypeScript'
  ];

  return (
    <section id="about" className="py-24 bg-zinc-900 relative">
      {/* Gradient decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 stripe-gradient-bg" />
      <div className="absolute -top-10 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h2>
          <div className="h-1 w-20 stripe-gradient-bg rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 shadow-xl">
              <Image
                src="https://img.freepik.com/free-photo/gamer-live-streaming-setup_23-2151948239.jpg?ga=GA1.1.1106625350.1744549871&semt=ais_hybrid&w=740"
                alt="Samarth Shukla"
                width={500}
                height={400}
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent mix-blend-overlay" />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-zinc-800 border border-zinc-700 rounded-xl p-4 shadow-xl">
              <p className="text-zinc-400 text-sm">Bachelor of Technology</p>
              <p className="text-white font-semibold">Computer Science</p>
              <p className="text-zinc-400 text-sm">2022-Present</p>
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
              Hi, I'm Samarth Shukla, a passionate Full Stack Developer and
              Mobile App Developer. I specialize in building responsive web applications using the MERN stack and
              designing mobile apps with amazing user interfaces using React Native.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              I have a proven track record of delivering high-quality projects that meet the needs of the hour.
              I am always eager to learn new technologies and take on new challenges.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              When I'm not coding, you can find me exploring new places, reading tech blogs, or spending time with
              my family and friends. Let's connect and create something amazing together!
            </p>

            {/* Skills pills */}
            <div className="pt-4">
              <h3 className="text-white font-semibold mb-3">Core Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-zinc-800 border border-zinc-700 text-zinc-300"
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
