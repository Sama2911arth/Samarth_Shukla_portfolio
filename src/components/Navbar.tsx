"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Github, Linkedin, Menu, X } from 'lucide-react';
import BrandMark from './BrandMark';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <BrandMark compact />
        </motion.div>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-3">
            <SocialIcon href="https://github.com/Sama2911arth/" icon={<Github className="w-5 h-5" />} />
            <SocialIcon href="https://www.linkedin.com/in/sama2911arth" icon={<Linkedin className="w-5 h-5" />} />
          </div>

          <ThemeToggle />

          <motion.a
            href="/Samarth-Shukla_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex gradient-button text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="h-4 w-4" />
              Resume
            </span>
          </motion.a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-foreground/90 hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}

              <div className="flex items-center gap-4 pt-2">
                <SocialIcon href="https://github.com/Sama2911arth/" icon={<Github className="w-5 h-5" />} />
                <SocialIcon href="https://www.linkedin.com/in/sama2911arth" icon={<Linkedin className="w-5 h-5" />} />
              </div>

              <a
                href="/Samarth-Shukla_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button justify-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Resume
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="group relative py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
    >
      {children}
      <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-[hsl(var(--aurora-1))] to-[hsl(var(--aurora-3))] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
    </Link>
  );
};

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
};

export default Navbar;
