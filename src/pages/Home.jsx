import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiLayout,
  FiCloud,
} from "react-icons/fi";
import GlassCard from "../components/GlassCard";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  // Add the missing typedText state
  const [typedText, setTypedText] = useState("");

  // Add the typing effect
  useEffect(() => {
    const phrases = [
      "Frontend developer specializing in React",
      "Creating responsive and modern UIs",
      "Building scalable web applications",
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const typeText = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        // Deleting text
        setTypedText(currentPhrase.substring(0, currentCharIndex - 1));
        currentCharIndex--;
        typingSpeed = 50; // Faster when deleting
      } else {
        // Typing text
        setTypedText(currentPhrase.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        typingSpeed = 100; // Normal typing speed
      }

      // Check if completed typing the phrase
      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pause at the end
      }
      // Check if completed deleting
      else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before typing next phrase
      }

      setTimeout(typeText, typingSpeed);
    };

    const typingTimer = setTimeout(typeText, 1000);

    return () => clearTimeout(typingTimer);
  }, []);

  const services = [
    { title: "React.js & Tailwind SPAs", icon: <FiCode /> },
    { title: "API & Redux Integrations", icon: <FiDatabase /> },
    { title: "Custom UI/UX Design", icon: <FiLayout /> },
    { title: "Third-Party API Setup", icon: <FiCloud /> },
  ];

  // Updated projects array with real data from your Projects page
  const projects = [
    { 
      id: 1,
      title: "MarketAgents Landing Page", 
      description: "AI-powered market simulation platform featuring multi-agent systems and real-time analytics.",
      tech: ["React", "Tailwind"],
      github: "https://github.com/duwadikaustuv/market-agents",
      live: "https://www.marketagentsai.com/"
    },
    { 
      id: 2,
      title: "Routine Viewer App", 
      description: "A React-based routine/schedule viewer application built with Vite and TailwindCSS.",
      tech: ["React", "Tailwind"],
      github: "https://github.com/duwadikaustuv/routine-viewer-app",
      live: "https://routine-viewer-app.vercel.app/"
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
            Building Scalable, Modern Web Apps
            <br />
            <span className="bg-gradient-to-r from-light-blue to-deep-blue bg-clip-text text-transparent">
              with React & Tailwind CSS
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
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glassmorphism px-8 py-3 rounded-lg text-deep-blue dark:text-white border border-light-blue/20 hover:bg-light-blue/10 transition-all"
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* What I Do Section */}
      <section className="container mx-auto px-4 py-20" id="services">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-heading font-bold text-deep-blue dark:text-light-blue mb-4">
            What I Do
          </h2>
          <p className="text-dark-gray dark:text-gray-300 max-w-2xl mx-auto">
            I specialize in building modern, responsive web applications using
            the latest technologies and best practices.
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
                    Delivering high-quality, responsive solutions with clean and
                    maintainable code.
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
            Recent Work
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
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-light-blue hover:text-deep-blue dark:hover:text-blue-300 transition-colors"
                    >
                      <span>Live Demo</span>
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
            href="/projects"
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
                  Ready to Start Your Project?
                </h2>
                <p className="text-dark-gray dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  I'm currently available for freelance work. If you have a
                  project that needs some creative touch, I'd love to hear about
                  it.
                </p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-3 bg-light-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Let's Talk
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
