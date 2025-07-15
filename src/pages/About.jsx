import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiCalendar,
  FiAward,
  FiServer,
  FiGitBranch,
  FiTerminal,
} from "react-icons/fi";
import GlassCard from "../components/GlassCard";
import ThemeToggle from "../components/ThemeToggle";

const About = () => {
  const skills = [
    { name: "React.js", icon: <FiCode /> },
    { name: "Tailwind CSS", icon: <FiLayout /> },
    { name: "PostgreSQL", icon: <FiDatabase /> },
    { name: "ASP.NET Core", icon: <FiServer /> },
    { name: "Git & GitHub", icon: <FiGitBranch /> },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Full-Stack Developer (In Progress)",
      description:
        "Building full-stack projects using ASP.NET Core, C#, and SQL Server. Practicing backend development, API integration, and MVC architecture.",
    },
    {
      year: "2024",
      title: "Frontend Developer (Internship)",
      description:
        "Worked with a team at SMaRC to build and maintain React apps. Integrated APIs, participated in code reviews, and contributed to production-ready features.",
    },
    {
      year: "2024",
      title: "Web Dev Beginner",
      description:
        "Started learning HTML, CSS, JavaScript, and React. Built small UI projects and began exploring Tailwind CSS.",
    },
  ];

  return (
    <div className="min-h-screen bg-soft-white dark:bg-gray-900">
      <nav className="fixed w-full glassmorphism py-4 z-50 backdrop-blur-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-xl font-heading font-bold text-deep-blue dark:text-light-blue">
            About Me
          </span>
          <ThemeToggle />
        </div>
      </nav>

      {/* Bio Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <motion.div
            whileHover={{ rotate: 2, scale: 1.05 }}
            className="md:w-1/3 relative group"
          >
            <div className="w-64 h-64 rounded-full glassmorphism p-1">
              <img
                src="/images/projects/profile.jpg"
                alt="Kaustuv Duwadi"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.classList.add("bg-gray-200", "dark:bg-gray-700");
                }}
              />
            </div>
          </motion.div>

          <div className="md:w-2/3">
            <h2 className="text-4xl font-heading font-bold text-deep-blue dark:text-light-blue mb-6">
              About Me
            </h2>
            <p className="text-lg text-dark-gray dark:text-gray-300 mb-6 leading-relaxed">
              I’m Kaustuv Duwadi, a Computing student focused on full-stack
              development. I build responsive UIs with React and Tailwind, and
              I’m learning backend development with C# and ASP.NET Core to
              create clean, functional systems end to end.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-heading font-bold text-center mb-12 text-deep-blue dark:text-light-blue"
          >
            Tech Stack & Tools I Use
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard>
                  <div className="p-6 flex flex-col items-center">
                    <div className="text-light-blue dark:text-blue-300 text-4xl mb-4">
                      {skill.icon}
                    </div>
                    <span className="text-dark-gray dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-heading font-bold text-center mb-12 text-deep-blue dark:text-light-blue"
          >
            Learning Timeline
          </motion.h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 w-1 bg-gray-200 dark:bg-gray-700 h-full"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                viewport={{ once: true }}
                className={`mb-8 flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center`}
              >
                <div className="w-1/2 px-4 py-2">
                  <GlassCard>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-deep-blue dark:text-light-blue">
                        {item.title}
                      </h3>
                      <p className="text-dark-gray dark:text-gray-300 mb-2">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 text-light-blue dark:text-blue-300">
                        <FiCalendar />
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </GlassCard>
                </div>
                <div className="w-1/2 flex justify-center">
                  <div className="w-8 h-8 glassmorphism rounded-full flex items-center justify-center text-light-blue dark:text-blue-300">
                    <FiAward />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
