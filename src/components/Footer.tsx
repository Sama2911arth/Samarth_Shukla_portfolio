"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import BrandMark from './BrandMark';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="text-muted-foreground py-10 relative border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <BrandMark />
            </div>
            <p className="mb-4 text-muted-foreground max-w-sm">
              Software engineer building AI-enabled products with React, Next.js,
              FastAPI, Flutter, and AWS-backed cloud workflows.
            </p>
            <div className="flex space-x-4 mt-4">
              <SocialIcon href="https://github.com/Sama2911arth/" icon={<Github size={18} />} />
              <SocialIcon href="https://www.linkedin.com/in/sama2911arth" icon={<Linkedin size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="text-foreground text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="#about">About</FooterLink>
              </li>
              <li>
                <FooterLink href="#experience">Experience</FooterLink>
              </li>
              <li>
                <FooterLink href="#projects">Projects</FooterLink>
              </li>
              <li>
                <FooterLink href="#skills">Skills</FooterLink>
              </li>
              <li>
                <FooterLink href="#contact">Contact</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:samarthshukla994@gmail.com" className="hover:text-foreground transition-colors">
                  samarthshukla994@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917898183094" className="hover:text-foreground transition-colors">
                  +91 7898183094
                </a>
              </li>
              <li>Sagar, Madhya Pradesh, 470002</li>
              <li>
                <a
                  href="https://samarthshukla.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  samarthshukla.site
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="/Samarth-Shukla_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground/70">(c) {new Date().getFullYear()} Samarth Shukla. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="p-2.5 bg-secondary rounded-full hover:bg-secondary/70 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
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

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="group relative inline-block py-1 transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
    >
      {children}
      <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-[hsl(var(--aurora-1))] to-[hsl(var(--aurora-3))] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
    </Link>
  );
};

const SocialIcon = ({ href, icon }: SocialIconProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 flex items-center justify-center rounded-full border border-border hover:border-foreground/30 hover:text-foreground transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
};

export default Footer;
