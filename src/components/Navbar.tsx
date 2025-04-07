"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold text-white"
        >
          Samarth Shukla
        </motion.div>

        <div className="hidden md:flex space-x-6">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <SocialIcon href="https://github.com/Sama2911arth/" icon={<Github className="w-5 h-5" />} />
          <SocialIcon href="https://www.linkedin.com/in/samarth-shukla-ab4391256/" icon={<Linkedin className="w-5 h-5" />} />
          <SocialIcon href="https://www.instagram.com" icon={<Instagram className="w-5 h-5" />} />
          <SocialIcon href="https://www.facebook.com" icon={<Facebook className="w-5 h-5" />} />

          <motion.a
            href="https://drive.google.com/drive/u/0/folders/1geQZ5qW8SGLqxsyVu3HkOWzyJZqq8RPG"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block gradient-button text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Download CV</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} className="text-zinc-400 hover:text-white transition-colors duration-200">
      {children}
    </Link>
  );
};

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-white transition-colors duration-200"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
};

export default Navbar;
