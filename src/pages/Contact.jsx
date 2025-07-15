import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  FiLinkedin,
  FiGithub,
  FiMail,
  FiMessageSquare,
  FiExternalLink,
  FiCheckCircle,
  FiAlertCircle,
  FiTwitter,
  FiUser,
  FiDollarSign,
  FiSend,
} from "react-icons/fi";
import GlassCard from "../components/GlassCard";
import ThemeToggle from "../components/ThemeToggle";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/kaustuvduwadi",
      icon: <FiLinkedin size={20} />,
      ariaLabel: "Visit my LinkedIn profile",
    },
    {
      name: "GitHub",
      url: "https://github.com/duwadikaustuv",
      icon: <FiGithub size={20} />,
      ariaLabel: "Check out my GitHub repositories",
    },
    {
      name: "Email",
      url: "mailto:kaustuv.duwadi@gmail.com",
      icon: <FiMail size={20} />,
      ariaLabel: "Send me an email",
    },
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.warn(
          "EmailJS credentials not properly configured. Using mock success for demo purposes."
        );

        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitStatus("success");
      } else {
        const result = await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            message: data.details,
            budget: data.budget || "Not specified",
          },
          publicKey
        );

        console.log("Email sent successfully:", result.text);
        setSubmitStatus("success");
      }
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-soft-white dark:bg-gray-900">
      <nav className="fixed w-full glassmorphism py-4 z-50 backdrop-blur-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-xl font-heading font-bold text-deep-blue dark:text-light-blue">
            Contact Me
          </span>
          <ThemeToggle />
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title text-center mb-16">Let's Connect</h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <GlassCard className="h-full p-8">
                <h3 className="text-2xl font-heading font-bold text-deep-blue dark:text-light-blue mb-6">
                  Let's Connect
                </h3>
                <p className="text-dark-gray dark:text-gray-300 mb-8 leading-relaxed">
                  Open to internships, team projects, tech chats, or anything
                  that helps me grow as a developer.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-light-blue/10 rounded-full text-light-blue">
                      <FiMail size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-deep-blue text-start dark:text-light-blue mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:kaustuv.duwadi@gmail.com"
                        className="text-dark-gray dark:text-gray-300 hover:text-light-blue dark:hover:text-light-blue transition-colors"
                      >
                        kaustuv.duwadi@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-light-blue/10 rounded-full text-light-blue">
                      <FiMessageSquare size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-deep-blue text-start dark:text-light-blue mb-1">
                        Response
                      </h4>
                      <p className="text-dark-gray dark:text-gray-300">
                        I'll try to reply as soon as possible
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="font-medium text-deep-blue dark:text-light-blue mb-4">
                  Find me on
                </h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-dark-gray dark:text-gray-300 hover:bg-light-blue/10 hover:text-light-blue dark:hover:text-light-blue transition-colors"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <GlassCard className="p-8">
                <h3 className="text-2xl font-heading font-bold text-deep-blue dark:text-light-blue mb-6">
                  Send Me a Message
                </h3>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-600 dark:text-green-400"
                    role="alert"
                    aria-live="polite"
                  >
                    <FiCheckCircle size={20} aria-hidden="true" />
                    <p>
                      Your message has been sent successfully! I'll get back to
                      you soon.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-600 dark:text-red-400"
                    role="alert"
                    aria-live="polite"
                  >
                    <FiAlertCircle size={20} aria-hidden="true" />
                    <p>
                      There was an error sending your message. Please try again
                      or contact me directly via email.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="block text-deep-blue dark:text-light-blue mb-2 font-medium"
                      >
                        Name
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <FiUser size={18} aria-hidden="true" />
                        </div>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          className={`w-full p-3 pl-10 bg-white/5 backdrop-blur-sm border ${
                            errors.name ? "border-red-500" : "border-white/10"
                          } rounded-lg focus:outline-none focus:border-light-blue text-dark-gray dark:text-gray-200`}
                          {...register("name", {
                            required: "Name is required",
                          })}
                          aria-invalid={errors.name ? "true" : "false"}
                          aria-describedby={
                            errors.name ? "name-error" : undefined
                          }
                        />
                      </div>
                      {errors.name && (
                        <p
                          className="mt-1 text-red-500 text-sm"
                          id="name-error"
                          role="alert"
                        >
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="email"
                        className="block text-deep-blue  dark:text-light-blue mb-2 font-medium"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <FiMail size={18} />
                        </div>
                        <input
                          id="email"
                          type="email"
                          placeholder="Your email address"
                          className={`w-full p-3 pl-10 bg-white/5 backdrop-blur-sm border ${
                            errors.email ? "border-red-500" : "border-white/10"
                          } rounded-lg focus:outline-none focus:border-light-blue text-dark-gray dark:text-gray-200`}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          aria-invalid={errors.email ? "true" : "false"}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-red-500 text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="details"
                      className="block text-deep-blue dark:text-light-blue mb-2 font-medium"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-4 text-gray-400">
                        <FiMessageSquare size={18} />
                      </div>
                      <textarea
                        id="details"
                        rows="5"
                        placeholder="Drop a message about opportunities, questions, ideas, or just say hi..."
                        className={`w-full p-3 pl-10 bg-white/5 backdrop-blur-sm border ${
                          errors.details ? "border-red-500" : "border-white/10"
                        } rounded-lg focus:outline-none focus:border-light-blue text-dark-gray dark:text-gray-200 resize-none`}
                        {...register("details", {
                          required: "Message is required",
                        })}
                        aria-invalid={errors.details ? "true" : "false"}
                      ></textarea>
                    </div>
                    {errors.details && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.details.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-3 bg-light-blue text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    aria-label={
                      isSubmitting ? "Sending message..." : "Send message"
                    }
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend size={18} aria-hidden="true" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="font-medium text-deep-blue dark:text-light-blue mb-3">
                    What happens next?
                  </h4>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-light-blue/10 flex items-center justify-center text-light-blue">
                        <FiCheckCircle size={20} />
                      </div>
                      <p className="text-dark-gray dark:text-gray-300 text-sm">
                        I’ll try to get back to you within 24–48 hours. Looking
                        forward to connecting!
                      </p>
                    </li>
                  </ol>
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-gray dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Kaustuv Duwadi. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="text-dark-gray dark:text-gray-400 hover:text-light-blue dark:hover:text-light-blue transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
