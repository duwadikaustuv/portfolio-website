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
  FiGlobe,
  FiCpu,
} from "react-icons/fi";
import GlassCard from "../components/GlassCard";
import ThemeToggle from "../components/ThemeToggle";

const About = () => {
  const skills = [
    { name: "React.js", icon: <FiCode /> },
    { name: "Next.js", icon: <FiGlobe /> },
    { name: "TypeScript", icon: <FiTerminal /> },
    { name: "ASP.NET Core", icon: <FiServer /> },
    { name: "Tailwind CSS", icon: <FiLayout /> },
    { name: "PostgreSQL", icon: <FiDatabase /> },
    { name: "Git & GitHub", icon: <FiGitBranch /> },
    { name: "AI & Image Gen", icon: <FiCpu /> },
  ];

  const timeline = [
    {
      year: "2025 - Present",
      title: "Freelance Full-Stack Engineer",
      description:
        "Building and deploying production web applications. Specializing in integrating third-party APIs (geospatial, weather, agricultural) and AI image generation workflows using React/Next.js, C#, .NET, SQL, and Redis.",
    },
    {
      year: "2024 - 2025",
      title: "Web Developer (Intern)",
      description:
        "Developed 10+ full-stack web applications at ING Skill Academy using React.js, Next.js, TypeScript, Redux, and ASP.NET Core. Integrated 20+ external APIs and reduced implementation time by ~30%.",
    },
    {
      year: "2024",
      title: "Web Dev Beginner",
      description:
        "Started learning HTML, CSS, JavaScript, and React. Built UI projects and explored Tailwind CSS, establishing a solid frontend foundation.",
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
                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                alt="Kaustuv Duwadi"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Ccircle cx='128' cy='128' r='128' fill='%23f3f4f6'/%3E%3Ctext x='128' y='128' font-family='Arial' font-size='16' fill='%23374151' text-anchor='middle' dominant-baseline='middle'%3EProfile%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </motion.div>

          <div className="md:w-2/3">
            <h2 className="text-4xl font-heading font-bold text-deep-blue dark:text-light-blue mb-6">
              About Me
            </h2>
            <p className="text-lg text-dark-gray dark:text-gray-300 mb-6 leading-relaxed">
              I’m Kaustuv Duwadi, a Full-Stack Software Developer and Computing student. I have hands-on experience integrating complex third-party APIs (geospatial, weather, agricultural) and AI image generation workflows into production web applications. I specialize in building robust solutions using React/Next.js, TypeScript, .NET, SQL, Redis, and background jobs.
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
