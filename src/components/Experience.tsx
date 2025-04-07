"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Development Intern",
      company: "Zummit Infolabs",
      period: "Feb 2025 - Present",
      description: [
        "Participating in team meetings and code reviews to understand agile development workflows.",
        "Assisting in developing and maintaining web applications using React.js, Node.js, and MongoDB."
      ],
      icon: <Briefcase className="h-5 w-5" />,
      type: "work"
    },
    {
      id: 2,
      role: "Web Development Intern",
      company: "TechOctanet Services Pvt ltd.",
      period: "June 2023 - July 2023",
      description: [
        "During my internship, I built multiple projects using diverse frameworks, enhancing my overall development skills.",
        "I enhanced my skills in building and debugging complex features, from UI design to API integration."
      ],
      icon: <Briefcase className="h-5 w-5" />,
      type: "work"
    },
    {
      id: 3,
      role: "Bachelor of Technology in Computer Science",
      company: "Jaypee University Of Engineering And Technology, Guna (M.P.)",
      period: "2022-Present",
      description: [],
      icon: <GraduationCap className="h-5 w-5" />,
      type: "education"
    },
    {
      id: 4,
      role: "12th Standard",
      company: "Joy and Campion Sr. Sec. School, Sagar (M.P.)",
      period: "2021-22",
      description: [],
      icon: <GraduationCap className="h-5 w-5" />,
      type: "education"
    },
    {
      id: 5,
      role: "10th Standard",
      company: "Mahar Regiment Public School, Sagar (M.P.)",
      period: "2019-20",
      description: [],
      icon: <GraduationCap className="h-5 w-5" />,
      type: "education"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-zinc-950 relative">
      <div className="absolute top-0 left-0 right-0 h-1 stripe-purple-pink-gradient" />
      <div className="absolute -top-10 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Education & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Experience</span>
          </h2>
          <div className="h-1 w-20 stripe-purple-pink-gradient rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Briefcase className="mr-3 text-purple-400" /> Work Experience
            </h3>
            {experiences
              .filter(exp => exp.type === 'work')
              .map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                />
              ))
            }
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <GraduationCap className="mr-3 text-blue-400" /> Education
            </h3>
            {experiences
              .filter(exp => exp.type === 'education')
              .map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

interface ExperienceProps {
  experience: {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string[];
    icon: React.ReactNode;
    type: string;
  };
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="gradient-card p-6"
    >
      <div className="flex items-start">
        <div className={`p-2 rounded-full mr-4 ${experience.type === 'work' ? 'bg-purple-500/20' : 'bg-blue-500/20'}`}>
          {experience.icon}
        </div>
        <div>
          <h4 className="text-xl font-semibold text-white mb-1">{experience.role}</h4>
          <p className="text-zinc-400 mb-2">{experience.company}</p>
          <div className="flex items-center text-zinc-500 text-sm mb-3">
            <Calendar className="h-4 w-4 mr-1" /> {experience.period}
          </div>
          {experience.description.length > 0 && (
            <ul className="list-disc pl-4 space-y-1">
              {experience.description.map((item) => (
                <li key={`${experience.id}-${item.substring(0, 20)}`} className="text-zinc-300 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
