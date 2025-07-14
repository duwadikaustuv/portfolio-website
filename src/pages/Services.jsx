import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiClock, FiDollarSign, FiSettings } from "react-icons/fi";
import GlassCard from "../components/GlassCard";
import ThemeToggle from "../components/ThemeToggle";

const Services = () => {
  const offerings = [
    {
      title: "Frontend Development",
      description:
        "Build responsive applications using React and modern UI practices",
      features: ["State Management with Redux", "Component-Based Architecture"],
    },
    {
      title: "Tailwind UI/UX",
      description:
        "Translate designs into clean, responsive layouts using Tailwind CSS",
      features: ["Utility-First Styling", "Mobile-First Design"],
    },
    {
      title: "Backend & API Work",
      description:
        "Work with RESTful APIs and backend logic using ASP.NET Core",
      features: ["C# Controllers", "SQL Integration"],
    },
    {
      title: "Full-Stack Projects",
      description: "End-to-end project structure from UI to database",
      features: ["ASP.NET Core + React", "CRUD Operations"],
    },
  ];

  return (
    <div className="min-h-screen bg-soft-white dark:bg-gray-900">
      <nav className="fixed w-full glassmorphism py-4 z-50 backdrop-blur-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-xl font-heading font-bold text-deep-blue dark:text-light-blue">
            Services
          </span>
          <ThemeToggle />
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Core Services */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-heading font-bold text-center text-deep-blue dark:text-light-blue mb-16">
            What I Work With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {offerings.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-deep-blue dark:text-light-blue mb-4">
                      {service.title}
                    </h3>
                    <p className="text-dark-gray text-start dark:text-gray-400 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-dark-gray dark:text-gray-300"
                        >
                          <FiCheck className="text-light-blue dark:text-blue-300" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Workflow Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-16"
        >
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-deep-blue dark:text-light-blue">
            My Project Workflow
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {["Plan", "Design", "Develop", "Review"].map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 text-center"
                >
                  <GlassCard>
                    <div className="p-6">
                      <div className="w-16 h-16 bg-light-blue/20 text-light-blue dark:text-blue-300 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-deep-blue dark:text-light-blue">
                        {step}
                      </h3>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12 text-center text-dark-gray dark:text-gray-400 max-w-2xl mx-auto"
            >
              My personal workflow for learning, building, and refining
              full-stack projects — from idea to deployment.
            </motion.p>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-16"
        >
          <GlassCard>
            <div className="p-8">
              <h3 className="text-2xl font-heading font-bold text-deep-blue dark:text-light-blue mb-4">
                Let’s Connect
              </h3>
              <p className="text-dark-gray dark:text-gray-400 mb-6">
                Open to internships, collaborations, and conversations around
                web development, .NET, or anything tech. Feel free to reach out.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glassmorphism px-8 py-3 rounded-lg text-light-blue dark:text-white hover:bg-light-blue/10 transition-all"
              >
                Reach Out
              </motion.button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
