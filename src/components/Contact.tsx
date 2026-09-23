"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-24 relative overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Open to software engineering roles, freelance product builds, and collaborations
              around AI-enabled web or mobile apps. Reach out directly, I usually reply within a day.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <SocialLink href="https://www.linkedin.com/in/sama2911arth" icon={<Linkedin className="h-4 w-4" />} />
              <SocialLink href="https://github.com/Sama2911arth/" icon={<Github className="h-4 w-4" />} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="gradient-card divide-y divide-border"
          >
            <DetailRow
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              value="samarthshukla994@gmail.com"
              href="mailto:samarthshukla994@gmail.com"
              accent="var(--aurora-3)"
            />
            <DetailRow
              icon={<Phone className="h-5 w-5" />}
              label="Phone"
              value="+91 7898183094"
              href="tel:+917898183094"
              accent="var(--aurora-1)"
            />
            <DetailRow
              icon={<Globe className="h-5 w-5" />}
              label="Portfolio"
              value="samarthshukla.site"
              href="https://samarthshukla.site"
              accent="var(--aurora-4)"
              external
            />
            <DetailRow
              icon={<MapPin className="h-5 w-5" />}
              label="Location"
              value="Sagar, Madhya Pradesh, 470002"
              accent="var(--aurora-2)"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface DetailRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  accent: string;
  external?: boolean;
}

const DetailRow = ({ icon, label, value, href, accent, external }: DetailRowProps) => {
  const content = (
    <div className="flex items-center gap-4 px-6 py-5">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: `hsl(${accent} / 0.12)`, color: `hsl(${accent})` }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-medium text-foreground truncate">{value}</p>
      </div>
      {href && (
        <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group block transition-colors hover:bg-foreground/[0.03]"
    >
      {content}
    </a>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
};

export default Contact;
