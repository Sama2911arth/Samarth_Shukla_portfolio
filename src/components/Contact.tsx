"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 stripe-purple-pink-gradient" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-red-400">Touch</span>
          </h2>
          <div className="h-1 w-20 stripe-purple-pink-gradient rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-zinc-400 mb-8">
                Open to software engineering roles, freelance product builds, and collaborations around AI-enabled web or mobile apps.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-md bg-zinc-800 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-amber-300" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm">Email</p>
                    <a
                      href="mailto:samarthshukla994@gmail.com"
                      className="text-white hover:text-purple-400 transition-colors"
                    >
                      samarthshukla994@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-md bg-zinc-800 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm">Phone</p>
                    <a
                      href="tel:+917898183094"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      +91 7898183094
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-md bg-zinc-800 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-red-300" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm">Location</p>
                    <p className="text-white">Sagar, Madhya Pradesh, 470002</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-md bg-zinc-800 flex items-center justify-center mr-4">
                    <Globe className="h-5 w-5 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-zinc-500 text-sm">Portfolio</p>
                    <a
                      href="https://samarth-shukla-portfolio.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-300 transition-colors"
                    >
                      samarth-shukla-portfolio.vercel.app
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <SocialLink href="https://www.linkedin.com/in/sama2911arth" icon={<Linkedin />} color="bg-cyan-500/10 text-cyan-300" />
                <SocialLink href="https://github.com/Sama2911arth/" icon={<Github />} color="bg-zinc-500/10 text-zinc-400" />
                <SocialLink href="https://samarth-shukla-portfolio.vercel.app" icon={<Globe />} color="bg-emerald-500/10 text-emerald-300" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="gradient-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-zinc-400 text-sm mb-1 block">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-zinc-400 text-sm mb-1 block">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-zinc-400 text-sm mb-1 block">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                    placeholder="Your phone number (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-zinc-400 text-sm mb-1 block">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full gradient-button text-white mt-4 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting || submitted}
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : submitted ? (
                      <>Message Sent!</>
                    ) : (
                      <>Send Message <Send className="ml-2 h-4 w-4" /></>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  color: string;
}

const SocialLink = ({ href, icon, color }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`h-10 w-10 flex items-center justify-center rounded-full ${color} hover:scale-110 transition-transform`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
};

export default Contact;
