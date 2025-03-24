import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiClock, FiDollarSign, FiSettings } from "react-icons/fi";
import GlassCard from "../components/GlassCard";
import ThemeToggle from "../components/ThemeToggle";

const Services = () => {
  const offerings = [
    {
      title: "React.js SPAs",
      description: "Modern single-page applications with optimized performance",
      features: ["State Management"],
    },
    {
      title: "Tailwind UI/UX",
      description: "Pixel-perfect designs with responsive layouts",
      features: ["Responsive Design"],
    },
    {
      title: "API Integration",
      description: "Seamless third-party API connections",
      features: ["REST APIs"],
    },
  ];

  const pricing = [
    {
      plan: "Hourly",
      rate: "$20-$35/hr",
      features: ["Small fixes", "Consultations", "Maintenance"],
      icon: <FiClock className="w-8 h-8" />,
    },
    {
      plan: "Project",
      rate: "$300+",
      features: ["Complete SPAs", "API Integrations", "Documentation"],
      icon: <FiDollarSign className="w-8 h-8" />,
    },
    {
      plan: "Retainer",
      rate: "$500+/mo",
      features: ["Priority support", "Regular updates", "Performance audits"],
      icon: <FiSettings className="w-8 h-8" />,
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
            Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <p className="text-dark-gray dark:text-gray-400 mb-4">
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

        {/* Pricing Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-16"
        >
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-deep-blue dark:text-light-blue">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                viewport={{ once: true }}
              >
                <GlassCard>
                  <div className="p-8 text-center">
                    <div className="text-light-blue dark:text-blue-300 mb-4 mx-auto">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-deep-blue dark:text-light-blue mb-2">
                      {plan.plan}
                    </h3>
                    <p className="text-3xl font-semibold text-dark-gray dark:text-gray-300 mb-6">
                      {plan.rate}
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-dark-gray dark:text-gray-400 justify-center"
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
            Development Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {["Discovery", "Design", "Develop", "Deliver"].map(
                (step, index) => (
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
                )
              )}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12 text-center text-dark-gray dark:text-gray-400 max-w-2xl mx-auto"
            >
              Structured 4-phase approach ensuring clear communication,
              milestone tracking, and quality assurance at every stage of your
              project's development.
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
                Ready to Start Your Project?
              </h3>
              <p className="text-dark-gray dark:text-gray-400 mb-6">
                Let's discuss how I can help bring your ideas to life
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glassmorphism px-8 py-3 rounded-lg text-light-blue dark:text-white hover:bg-light-blue/10 transition-all"
              >
                Get in Touch
              </motion.button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
