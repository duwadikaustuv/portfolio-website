import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiSearch,
  FiFilter,
  FiEye,
} from "react-icons/fi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard";
import ThemeToggle from "../components/ThemeToggle";

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const projects = [
    {
      id: 1,
      title: "MarketAgents Landing Page",
      description:
        "AI-powered market simulation platform featuring multi-agent systems, prediction markets, and real-time analytics with a modern React-based interface for economic modeling and market research.",
      tech: ["React", "Tailwind"],
      category: "SPA",
      image: "/portfolio-website/images/projects/marketAgentsLanding.png",
      live: "https://www.marketagentsai.com/",
      github: "https://github.com/duwadikaustuv/market-agents",
      date: "2025-02-24",
    },
    {
      id: 2,
      title: "Routine Viewer App",
      description:
        "A React-based routine/schedule viewer application built with Vite, utilizing modern tooling like TailwindCSS for styling and ESLint for code quality, designed to help users manage and view their routines in an interactive way.",
      tech: ["React", "Tailwind"],
      category: "Web App",
      image: "/portfolio-website/images/projects/routineViewer.png",
      live: "https://routine-viewer-app.vercel.app/",
      github: "https://github.com/duwadikaustuv/routine-viewer-app",
      date: "2025-03-09",
    },
    {
      id: 3,
      title: "MarketAgents Technical Documentation",
      description:
        "Analytics platform with data visualization for social media metrics. Includes customizable widgets and automated reporting.",
      tech: ["React", "Email.js", "Tailwind"],
      category: "Dashboard",
      image: "/portfolio-website/images/projects/marketAgentsDocs.png",
      live: "https://market-agent-docs-test.vercel.app/overview",
      github: "https://github.com/duwadikaustuv/marketAgent-docs-test",
      date: "2025-03-20",
    },
  ];

  const technologies = [
    "all",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Firebase",
    "MongoDB",
    "Express",
    "Chart.js",
    "AWS",
    "Redux",
    "Tailwind",
  ];

  const categories = [
    "all",
    "Full Stack",
    "Web App",
    "Dashboard",
    "SAAS",
    "Mobile",
  ];

  useEffect(() => {
    let result = [...projects];

    if (selectedTech !== "all") {
      result = result.filter((project) => project.tech.includes(selectedTech));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query) ||
          project.tech.some((tech) => tech.toLowerCase().includes(query))
      );
    }

    switch (sortBy) {
      case "newest":
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "oldest":
        result.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "a-z":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    setFilteredProjects(result);
    setCurrentPage(1);
  }, [selectedTech, searchQuery, sortBy]);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-soft-white dark:bg-gray-900">
      <nav className="fixed w-full glassmorphism py-4 z-50 backdrop-blur-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-xl font-heading font-bold text-deep-blue dark:text-light-blue">
            Projects
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
          <h2 className="text-4xl font-heading font-bold text-center text-deep-blue dark:text-light-blue mb-12">
            My Recent Work
          </h2>

          {/* Search and Filter Controls */}
          <div className="mb-10 grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 dark:bg-gray-800/50 dark:border-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-light-blue/50 transition-all"
              />
            </div>

            {/* Technology Filter */}
            <div>
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 dark:bg-gray-800/50 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-light-blue/50 transition-all"
              >
                <option value="all">All Technologies</option>
                {technologies
                  .filter((tech) => tech !== "all")
                  .map((tech) => (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  ))}
              </select>
            </div>

            {/* Sort Options */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 dark:bg-gray-800/50 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-light-blue/50 transition-all"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
            </div>
          </div>

          {/* Project Results Count */}
          <p className="text-dark-gray dark:text-gray-300 mb-6">
            Showing {currentProjects.length} of {filteredProjects.length}{" "}
            projects
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {currentProjects.length > 0 ? (
              currentProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <GlassCard>
                    <div className="overflow-hidden rounded-t-xl h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f3f4f6'/%3E%3Ctext x='200' y='100' font-family='Arial' font-size='16' fill='%23374151' text-anchor='middle' dominant-baseline='middle'%3EProject Image%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-heading font-bold text-deep-blue dark:text-light-blue">
                          {project.title}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-light-blue/10 text-light-blue dark:bg-blue-500/20 dark:text-blue-300 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-dark-gray dark:text-gray-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-white/50 dark:bg-gray-800/50 rounded-full text-dark-gray dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-dark-gray dark:text-gray-300 hover:text-light-blue dark:hover:text-light-blue transition-colors"
                          aria-label={`View source code for ${project.title}`}
                        >
                          <FiGithub />
                          <span>Code</span>
                        </a>
                        <Link
                          to={`/projects/${project.id}`}
                          className="flex items-center gap-1 text-light-blue hover:text-deep-blue dark:hover:text-blue-300 transition-colors"
                          aria-label={`View details for ${project.title}`}
                        >
                          <span>Details</span>
                          <FiEye />
                        </Link>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-xl text-dark-gray dark:text-gray-300">
                  No projects match your search criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedTech("all");
                    setSearchQuery("");
                    setSortBy("newest");
                  }}
                  className="mt-4 px-6 py-2 bg-light-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredProjects.length > projectsPerPage && (
            <div className="flex justify-center gap-2">
              <button
                onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700"
                    : "bg-white/10 backdrop-blur-sm border border-white/20 text-dark-gray dark:text-gray-300 hover:bg-light-blue/10"
                }`}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === number
                        ? "bg-light-blue text-white"
                        : "bg-white/10 backdrop-blur-sm border border-white/20 text-dark-gray dark:text-gray-300 hover:bg-light-blue/10"
                    }`}
                  >
                    {number}
                  </button>
                )
              )}

              <button
                onClick={() =>
                  paginate(
                    currentPage < totalPages ? currentPage + 1 : totalPages
                  )
                }
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700"
                    : "bg-white/10 backdrop-blur-sm border border-white/20 text-dark-gray dark:text-gray-300 hover:bg-light-blue/10"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
