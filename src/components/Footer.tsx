"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-800" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/">
              <h2 className="text-white text-2xl font-bold mb-4">Samarth Shukla</h2>
            </Link>
            <p className="mb-4 text-zinc-500">
              Full Stack Developer specializing in MERN and React Native development.
              Building innovative web and mobile solutions with modern technologies.
            </p>
            <div className="flex space-x-4 mt-4">
              <SocialIcon href="https://github.com/Sama2911arth/" icon={<Github size={18} />} />
              <SocialIcon href="https://www.linkedin.com/in/samarth-shukla-ab4391256/" icon={<Linkedin size={18} />} />
              <SocialIcon href="https://www.instagram.com" icon={<Instagram size={18} />} />
              <SocialIcon href="https://www.facebook.com" icon={<Facebook size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:samarthshukla994@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  samarthshukla994@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917898183094"
                  className="hover:text-white transition-colors"
                >
                  +91 7898183094
                </a>
              </li>
              <li>Sagar, Madhya Pradesh, 470002</li>
              <li className="pt-2">
                <a
                  href="https://drive.google.com/drive/u/0/folders/1geQZ5qW8SGLqxsyVu3HkOWzyJZqq8RPG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Samarth Shukla. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon = ({ href, icon }: SocialIconProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 flex items-center justify-center rounded-full border border-zinc-800 hover:border-zinc-700 hover:text-white transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
};

export default Footer;
