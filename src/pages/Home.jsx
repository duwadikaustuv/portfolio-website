import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiTool,
  FiCode,
  FiDatabase,
  FiRepeat,
} from "react-icons/fi";
import GlassCard from "../components/GlassCard";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const phrases = [
      "Creating modern web applications",
      "Building interactive user interfaces with React",
      "Developing modern dynamic designs with Tailwind",
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const typeText = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, currentCharIndex - 1));
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        setTypedText(currentPhrase.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1000;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }

      setTimeout(typeText, typingSpeed);
    };

    const typingTimer = setTimeout(typeText, 1000);

    return () => clearTimeout(typingTimer);
  }, []);

  const services = [
    {
      title: "Frontend",
      icon: <FiCode />,
      content: "React.js, Tailwind CSS, Vite, JavaScript (ES6+)",
    },
    {
      title: "Backend",
      icon: <FiDatabase />,
      content: "Python, Django, C#, ASP.NET Core MVC, Entity Framework, PostgreSQL",
    },
    {
      title: "Tools",
      icon: <FiTool />,
      content: "Git & Github, Visual Studio, VS Code, Postman",
    },
    {
      title: "Workflows",
      icon: <FiRepeat />,
      content: "Agile (Scrum-style teamwork), Kanban, Prototype, XP",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "MarketAgents Landing Page",
      description:
        "AI-powered market simulation platform featuring multi-agent systems and real-time analytics.",
      tech: ["React", "Tailwind"],
      github: "https://github.com/duwadikaustuv/market-agents",
      live: "https://www.marketagentsai.com/",
    },
    {
      id: 2,
      title: "Routine Viewer App",
      description:
        "A React-based routine/schedule viewer application built with Vite and TailwindCSS.",
      tech: ["React", "Tailwind"],
      github: "https://github.com/duwadikaustuv/routine-viewer-app",
      live: "https://routine-viewer-app.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-soft-white dark:bg-gray-900">
      <nav className="fixed w-full glassmorphism py-4 z-50 backdrop-blur-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-xl font-heading font-bold text-deep-blue dark:text-light-blue">
            Portfolio
          </span>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-heading font-bold text-deep-blue dark:text-light-blue mb-6 leading-tight">
            Web Developer
            <br />
            <span className="bg-gradient-to-r from-light-blue to-deep-blue bg-clip-text text-transparent">
              React.js · Django . ASP.NET Core
            </span>
          </h1>
          <p className="text-xl text-dark-gray dark:text-gray-300 mb-8 max-w-2xl mx-auto h-16">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glassmorphism px-8 py-3 rounded-lg text-light-blue dark:text-white hover:bg-light-blue/10 transition-all"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glassmorphism px-8 py-3 rounded-lg text-deep-blue dark:text-white border border-light-blue/20 hover:bg-light-blue/10 transition-all"
            >
              Explore My Journey
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* What I’m Learning & Practicing Section */}
      <section className="container mx-auto px-4 py-20" id="services">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-heading font-bold text-deep-blue dark:text-light-blue mb-4">
            What I’m Learning & Practicing
          </h2>
          <p className="text-dark-gray dark:text-gray-300 max-w-2xl mx-auto">
            Web developer with a focus on clean, responsive UIs
            using React.js and Tailwind CSS. Backend
            in Django DRF, C#, ASP.NET Core, and SQL, with a strong focus in
            structured, maintainable code and system design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard>
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-3xl text-light-blue bg-light-blue/10 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-deep-blue dark:text-light-blue mb-2">
                    {service.title}
                  </h3>
                  <p className="text-dark-gray dark:text-gray-300">
                    {service.content}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="container mx-auto px-4 py-20" id="projects">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-heading font-bold text-deep-blue dark:text-light-blue mb-4">
            Recent Projects
          </h2>
          <p className="text-dark-gray dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Check out my projects page for
            more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-deep-blue dark:text-light-blue mb-4">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-light-blue/10 rounded-full text-light-blue dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-dark-gray dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-dark-gray dark:text-gray-300 hover:text-light-blue dark:hover:text-light-blue transition-colors"
                    >
                      <FiGithub />
                      <span>Github Repo</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-light-blue hover:text-deep-blue dark:hover:text-blue-300 transition-colors"
                    >
                      <span>Project Details</span>
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <motion.a
            href="/portfolio-website/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block glassmorphism px-8 py-3 rounded-lg text-light-blue dark:text-white hover:bg-light-blue/10 transition-all"
          >
            View All Projects
          </motion.a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20" id="contact">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <GlassCard>
            <div className="p-10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-light-blue/10 to-deep-blue/10 rounded-full"></div>
              <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-gradient-to-tl from-light-blue/10 to-deep-blue/10 rounded-full"></div>

              <div className="relative z-10">
                <h2 className="text-4xl font-heading font-bold text-deep-blue dark:text-light-blue mb-6">
                  Let’s Connect
                </h2>
                <p className="text-dark-gray dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Whether you're working on something interesting or just want
                  to talk code, feel free to reach out. I'm always open to
                  learning and collaboration.
                </p>
                <motion.a
                  href="/portfolio-website/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-3 bg-light-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Reach Out
                </motion.a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
