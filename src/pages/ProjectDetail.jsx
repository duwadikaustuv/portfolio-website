import React from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";
import GlassCard from "../components/GlassCard";
import { Helmet } from "react-helmet-async";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Updated project data with your actual projects
  const projects = [
    {
      id: "1",
      title: "MarketAgents Landing Page",
      description: "AI-powered market simulation platform featuring multi-agent systems, prediction markets, and real-time analytics.",
      longDescription: "MarketAgents is an AI-powered market simulation platform featuring multi-agent systems, prediction markets, and real-time analytics with a modern React-based interface for economic modeling and market research. The landing page showcases the platform's features, benefits, and use cases with a clean, responsive design.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      category: "SPA",
      image: "/src/assets/projects/marketAgentsLanding.png",
      gallery: [
        "/src/assets/projects/marketAgentsLanding.png",
      ],
      live: "https://www.marketagentsai.com/",
      github: "https://github.com/duwadikaustuv/market-agents",
      date: "2025-02-24",
      features: [
        "Responsive design for all devices",
        "Modern UI with animations",
        "Clear presentation of platform features",
        "Optimized performance",
        "SEO-friendly structure"
      ]
    },
    {
      id: "2",
      title: "Routine Viewer App",
      description: "A React-based routine/schedule viewer application built with Vite, utilizing modern tooling like TailwindCSS for styling.",
      longDescription: "The Routine Viewer App is a React-based application built with Vite, utilizing modern tooling like TailwindCSS for styling and ESLint for code quality. It's designed to help users manage and view their routines in an interactive way. The app features a clean, intuitive interface that makes it easy to visualize daily, weekly, and monthly schedules.",
      tech: ["React", "Vite", "Tailwind CSS", "ESLint", "Responsive Design"],
      category: "Web App",
      image: "/src/assets/projects/routineViewer.png",
      gallery: [
        "/src/assets/projects/routineViewer.png",
      ],
      live: "https://routine-viewer-app.vercel.app/",
      github: "https://github.com/duwadikaustuv/routine-viewer-app",
      date: "2025-03-09",
      features: [
        "Interactive schedule visualization",
        "Daily, weekly, and monthly views",
        "Responsive design for all devices",
        "Dark/light mode toggle",
        "Fast performance with Vite"
      ]
    },
    {
      id: "3",
      title: "MarketAgents Technical Documentation",
      description: "Comprehensive technical documentation for the MarketAgents platform with interactive examples and API references.",
      longDescription: "The MarketAgents Technical Documentation is a comprehensive resource for developers working with the MarketAgents platform. It includes detailed API references, integration guides, code examples, and best practices. The documentation is built with React and features a clean, searchable interface with syntax highlighting for code examples.",
      tech: ["React", "Email.js", "Tailwind CSS", "Documentation", "API Reference"],
      category: "Documentation",
      image: "/src/assets/projects/marketAgentsDocs.png",
      gallery: [
        "/src/assets/projects/marketAgentsDocs.png",
      ],
      live: "https://docs.marketagentsai.com/",
      github: "https://github.com/duwadikaustuv/market-agents-docs",
      date: "2025-01-15",
      features: [
        "Comprehensive API documentation",
        "Interactive code examples",
        "Searchable interface",
        "Syntax highlighting",
        "Responsive design",
        "Dark/light mode toggle"
      ]
    }
  ];

  useEffect(() => {
    // Find the project by ID
    const foundProject = projects.find(p => p.id === id);
    
    if (foundProject) {
      setProject(foundProject);
    } else {
      // If project not found, redirect to projects page after a short delay
      setTimeout(() => {
        navigate('/projects');
      }, 1500);
    }
    
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-soft-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse text-deep-blue dark:text-light-blue text-xl">
          Loading project...
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-soft-white dark:bg-gray-900 flex items-center justify-center p-4">
        <GlassCard>
          <div className="p-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-deep-blue dark:text-light-blue mb-4">
              Project Not Found
            </h2>
            <p className="text-dark-gray dark:text-gray-300 mb-6">
              The project you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/projects"
              className="px-6 py-2 bg-light-blue text-white rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
            >
              <FiArrowLeft />
              Back to Projects
            </Link>
          </div>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-white dark:bg-gray-900 pt-20 pb-12 px-4">
      <Helmet>
        <title>{project.title} | Kaustuv Duwadi</title>
        <meta name="description" content={project.description} />
      </Helmet>
      
      <div className="container mx-auto">
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-deep-blue dark:text-light-blue hover:underline gap-1"
          >
            <FiArrowLeft />
            <span>Back to Projects</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard>
            <div className="p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-deep-blue dark:text-light-blue mb-4">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-light-blue/10 rounded-full text-light-blue dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mb-8">
                <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/1200x675?text=Project+Image';
                    }}
                  />
                </div>
                
                {project.gallery && project.gallery.length > 1 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {project.gallery.slice(1).map((img, index) => (
                      <div key={index} className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${index + 2}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/600x338?text=Screenshot';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-heading font-bold text-deep-blue dark:text-light-blue mb-4">
                  Project Overview
                </h2>
                <p className="text-dark-gray dark:text-gray-300 mb-4 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-heading font-bold text-deep-blue dark:text-light-blue mb-4">
                  Key Features
                </h2>
                <ul className="list-disc pl-5 text-dark-gray dark:text-gray-300 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <FiGithub />
                    <span>View Code</span>
                  </a>
                )}
                
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-light-blue text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;