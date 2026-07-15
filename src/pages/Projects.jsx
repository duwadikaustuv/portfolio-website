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
      id: "1",
      title: "Flood Risk Assessment API - Nepal DHM, GLOFAS, and Elevation Data",
      description:
        "Built a disaster preparedness API for Nepal that assesses flood risk for properties using Nepal DHM, GLOFAS, Open-Elevation, and OpenStreetMap data, integrated with AI image generation.",
      tech: ["ASP.NET Core", "TypeScript", "DHM Nepal API", "GLOFAS", "Open-Elevation API", "OpenStreetMap", "Replicate (Stable Diffusion)", "AI image generation"],
      category: "Backend & API",
      image: "images/projects/Flood Risk Assessment API - Nepal DHM, GLOFAS, and Elevation Data.png",
      live: "",
      github: "",
      date: "2025-05-15",
    },
    {
      id: "2",
      title: "HimalayaAI Landing Website",
      description:
        "Designed, developed, and deployed a responsive landing page for a Nepali Sovereign AI company, HimalayaAI, with reusable components and clean source control.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
      category: "Frontend",
      image: "images/projects/HimalayaAI Landing Website.png",
      live: "https://himalayaai.org/",
      github: "",
      date: "2025-04-10",
    },
    {
      id: "3",
      title: "AvatamLabs Landing Website",
      description:
        "Designed, developed, and deployed a responsive landing page for a forward deployment AI Agentic company using Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
      category: "Frontend",
      image: "images/projects/AvatamLabs Landing Website.png",
      live: "https://www.avatam.ai/",
      github: "",
      date: "2025-03-30",
    },
    {
      id: "4",
      title: "MarketAgents Landing Website",
      description:
        "Designed, developed, and deployed a responsive landing page for MarketAgents, a US-based AI company, with reusable components and clean source control.",
      tech: ["React.js", "Tailwind CSS", "Vite", "Responsive Design"],
      category: "Frontend",
      image: "images/projects/marketAgentsLandingWebsite.png",
      live: "https://marketagentsai.com/",
      github: "",
      date: "2025-02-24",
    },
    {
      id: "5",
      title: "Pumori Coffee Landing Website",
      description:
        "Designed and developed a fast, SEO-optimized landing page for a coffee brand using Next.js, semantic HTML, and Tailwind CSS.",
      tech: ["Next.js", "Tailwind CSS", "Semantic HTML", "SEO Optimization", "Performance Tuning"],
      category: "Frontend",
      image: "images/projects/Pumori Coffee Landing Website.png",
      live: "https://pumoricoffee.com/",
      github: "",
      date: "2025-02-10",
    },
    {
      id: "6",
      title: "Full-Stack Blog Platform with Next.js & Prisma",
      description:
        "Built a production-ready blogging platform using Next.js, TypeScript, Prisma ORM, and Turso (LibSQL) with modern full-stack architecture.",
      tech: ["Next.js", "TypeScript", "Prisma ORM", "Turso (LibSQL)", "Database Design"],
      category: "Full Stack",
      image: "images/projects/Full-Stack Blog Platform with Next.js & Prisma.png",
      live: "https://github.com/duwadikaustuv/blog-website",
      github: "https://github.com/duwadikaustuv/blog-website",
      date: "2025-01-20",
    },
    {
      id: "7",
      title: "GitHub Repository Health API with PDF Reports and MinIO Storage",
      description:
        "Built a GitHub repository health dashboard API that analyzes public repos, returns metrics, health scores, and downloadable PDF reports.",
      tech: ["ASP.NET Core", "Redis", "Polly", "Hangfire", "MinIO", "GitHub REST API", "Snyk API"],
      category: "Backend & API",
      image: "images/projects/GitHub Repository Health API with PDF Reports and MinIO Storage.png",
      live: "https://github.com/duwadikaustuv/RepoRadar",
      github: "https://github.com/duwadikaustuv/RepoRadar",
      date: "2024-12-15",
    },
    {
      id: "8",
      title: "Weather Aggregation API with Redis Caching",
      description:
        "Built a unified weather intelligence API that aggregates weather, air pollution, and UV Index data into an Outdoor Score with parallel fetching and Redis caching.",
      tech: [".NET 10", "ASP.NET Core", "Redis", "Polly", "Hangfire", "PostgreSQL", "Next.js", "TypeScript", "Tailwind CSS"],
      category: "Backend & API",
      image: "images/projects/Weather Aggregation API with Redis Caching.png",
      live: "https://github.com/duwadikaustuv/WeatherPulse",
      github: "https://github.com/duwadikaustuv/WeatherPulse",
      date: "2024-11-20",
    },
    {
      id: "9",
      title: "Farmland Suitability API - NASA, and Weather Data Integration",
      description:
        "Built a crop suitability API integrating NASA POWER, weather, elevation, and Nepal agricultural datasets with Redis caching and Hangfire PDF generation.",
      tech: ["ASP.NET Core", "NASA POWER API", "OpenWeatherMap API", "Redis", "Polly", "Hangfire", "Clean Architecture"],
      category: "Backend & API",
      image: "images/projects/Farmland Suitability API - NASA, and Weather Data Integration.png",
      live: "https://github.com/duwadikaustuv/AgriIntel",
      github: "https://github.com/duwadikaustuv/AgriIntel",
      date: "2024-10-10",
    },
    {
      id: "10",
      title: "Solar Feasibility - NASA POWER, Open-Elevation, and Nepal Land Data",
      description:
        "Built a solar feasibility API for Nepal determining optimal solar panel placement using NASA POWER, Open-Elevation, and Nepal Land Data, with AI visual simulation.",
      tech: ["ASP.NET Core", "NASA POWER API", "Open-Elevation API", "Open Data Nepal", "OpenStreetMap Nominatim", "Replicate API", "AI image generation"],
      category: "Backend & API",
      image: "images/projects/Solar Feasibility - NASA POWER, Open-Elevation, and Nepal Land Data.png",
      live: "",
      github: "",
      date: "2024-09-15",
    },
  ];

  const technologies = [
    "all",
    "React.js",
    "Next.js",
    "TypeScript",
    "ASP.NET Core",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Redis",
    "Prisma ORM",
    "Hangfire",
    "MinIO",
  ];

  const categories = [
    "all",
    "Frontend",
    "Backend & API",
    "Full Stack",
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
                        src={`${import.meta.env.BASE_URL}${project.image}`}
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
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex gap-4">
                          {project.github && (
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
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-light-blue hover:text-deep-blue dark:hover:text-blue-300 transition-colors"
                              aria-label={`View live site for ${project.title}`}
                            >
                              <FiExternalLink />
                              <span>Live</span>
                            </a>
                          )}
                        </div>
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
