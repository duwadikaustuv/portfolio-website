import React from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";
import GlassCard from "../components/GlassCard";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const projects = [
    {
      id: "1",
      title: "Flood Risk Assessment API - Nepal DHM, GLOFAS, and Elevation Data",
      description:
        "Built a disaster preparedness API for Nepal that assesses flood risk for properties using Nepal DHM, GLOFAS, Open-Elevation, and OpenStreetMap data, integrated with AI image generation.",
      longDescription:
        "Built a property flood risk API by integrating DHM Nepal, GLOFAS API, Open-Elevation API, and OpenStreetMap API data into a unified risk assessment. Users enter an address and receive flood zone classification, elevation data, and proximity to water bodies. DHM Nepal API provides real-time river water levels. GLOFAS delivers global flood forecasting data. Open-Elevation API supplies terrain data. Integrated with AI image generation to create visual flood risk maps overlaid on property boundaries.",
      tech: ["ASP.NET Core", "TypeScript", "DHM Nepal API", "GLOFAS", "Open-Elevation API", "OpenStreetMap", "Replicate (Stable Diffusion)", "AI image generation"],
      category: "Backend & API",
      image: "images/projects/Flood Risk Assessment API - Nepal DHM, GLOFAS, and Elevation Data.png",
      gallery: ["images/projects/Flood Risk Assessment API - Nepal DHM, GLOFAS, and Elevation Data.png"],
      live: "",
      github: "",
      date: "2025-05-15",
      features: [
        "Real-time river water levels integration via Nepal DHM API",
        "Global flood forecasting data using GLOFAS API",
        "Terrain elevation analysis with Open-Elevation API",
        "AI-powered flood visualization workflows for property-specific risk maps",
        "Proximity-based water body risk calculations using OpenStreetMap Nominatim"
      ]
    },
    {
      id: "2",
      title: "HimalayaAI Landing Website",
      description:
        "Designed, developed, and deployed a responsive landing page for a Nepali Sovereign AI company, HimalayaAI, with reusable components and clean source control.",
      longDescription:
        "Designed, developed, and deployed a responsive landing page for HimalayaAI, a Nepali Sovereign AI company. The landing page showcases their AI solutions and models with a highly responsive, modern design, utilizing reusable React components and clean code architecture.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
      category: "Frontend",
      image: "images/projects/HimalayaAI Landing Website.png",
      gallery: ["images/projects/HimalayaAI Landing Website.png"],
      live: "https://himalayaai.org/",
      github: "",
      date: "2025-04-10",
      features: [
        "Highly responsive, mobile-first landing page design",
        "Modern aesthetic with Tailwind CSS animations",
        "Clean folder structure and reusable React components",
        "Integrated Express.js backend for lead capture and contact forms"
      ]
    },
    {
      id: "3",
      title: "AvatamLabs Landing Website",
      description:
        "Designed, developed, and deployed a responsive landing page for a forward deployment AI Agentic company using Next.js and Tailwind CSS.",
      longDescription:
        "Designed, developed, and deployed a fast, responsive landing page for AvatamLabs, a forward-deployment AI Agentic company. Leveraging Next.js for server-side rendering, static site generation, and optimized performance.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
      category: "Frontend",
      image: "images/projects/AvatamLabs Landing Website.png",
      gallery: ["images/projects/AvatamLabs Landing Website.png"],
      live: "https://www.avatam.ai/",
      github: "",
      date: "2025-03-30",
      features: [
        "Fast page loads using Next.js optimization and static rendering",
        "Sleek and professional dark mode design suited for AI companies",
        "Fully responsive layout across mobile, tablet, and desktop screens",
        "SEO optimization with Next.js Metadata API"
      ]
    },
    {
      id: "4",
      title: "MarketAgents Landing Website",
      description:
        "Designed, developed, and deployed a responsive landing page for MarketAgents, a US-based AI company, with reusable components and clean source control.",
      longDescription:
        "Designed, developed, and deployed a responsive landing page for MarketAgents, a US-based AI company. Built with React and Tailwind CSS, featuring reusable components, clean source control, and a sleek presentation of AI multi-agent simulation tools.",
      tech: ["React.js", "Tailwind CSS", "Vite", "Responsive Design"],
      category: "Frontend",
      image: "images/projects/marketAgentsLandingWebsite.png",
      gallery: ["images/projects/marketAgentsLandingWebsite.png"],
      live: "https://marketagentsai.com/",
      github: "",
      date: "2025-02-24",
      features: [
        "Interactive web elements describing AI-driven prediction markets",
        "Component-based architecture for clean code separation",
        "Pixel-perfect responsive design tailored for the US AI market",
        "SEO-friendly header tags and semantic layout structure"
      ]
    },
    {
      id: "5",
      title: "Pumori Coffee Landing Website",
      description:
        "Designed and developed a fast, SEO-optimized landing page for a coffee brand using Next.js, semantic HTML, and Tailwind CSS.",
      longDescription:
        "Designed and developed a fast, SEO-optimized landing page for Pumori Coffee. Focused on presenting a beautiful, premium visual style for the coffee brand while maintaining excellent performance and SEO practices using Next.js rendering, optimization features, and semantic HTML.",
      tech: ["Next.js", "Tailwind CSS", "Semantic HTML", "SEO Optimization", "Performance Tuning"],
      category: "Frontend",
      image: "images/projects/Pumori Coffee Landing Website.png",
      gallery: ["images/projects/Pumori Coffee Landing Website.png"],
      live: "https://pumoricoffee.com/",
      github: "",
      date: "2025-02-10",
      features: [
        "SEO-friendly page structure using semantic HTML and proper metadata",
        "High performance leveraging Next.js image loading and rendering",
        "Responsive, mobile-first layout built with Tailwind CSS",
        "Clean, maintainable code suitable for future e-commerce scaling"
      ]
    },
    {
      id: "6",
      title: "Full-Stack Blog Platform with Next.js & Prisma",
      description:
        "Built a production-ready blogging platform using Next.js, TypeScript, Prisma ORM, and Turso (LibSQL) with modern full-stack architecture.",
      longDescription:
        "Built a simple yet scalable full-stack blog platform using Next.js, Prisma, and Turso (libSQL). The project was designed to demonstrate end-to-end web application development, including database modeling, server-side logic, and a clean frontend architecture. Ready for extension with authentication, roles, SEO, and comments.",
      tech: ["Next.js", "TypeScript", "Prisma ORM", "Turso (LibSQL)", "Database Design"],
      category: "Full Stack",
      image: "images/projects/Full-Stack Blog Platform with Next.js & Prisma.png",
      gallery: ["images/projects/Full-Stack Blog Platform with Next.js & Prisma.png"],
      live: "https://github.com/duwadikaustuv/blog-website",
      github: "https://github.com/duwadikaustuv/blog-website",
      date: "2025-01-20",
      features: [
        "Full-stack architecture using Next.js server actions and API routes",
        "Database schema and data access managed efficiently with Prisma ORM",
        "Lightweight, serverless relational database using Turso (libSQL)",
        "Responsive dashboard for content writing and blog management"
      ]
    },
    {
      id: "7",
      title: "GitHub Repository Health API with PDF Reports and MinIO Storage",
      description:
        "Built a GitHub repository health dashboard API that analyzes public repos, returns metrics, health scores, and downloadable PDF reports.",
      longDescription:
        "Built a GitHub repository health dashboard that analyzes public repos and returns metrics, health scores (0-100 with A-F grade), and downloadable PDF reports. Aggregated GitHub metadata (stars, forks, issues, PRs, velocity, dependencies, vulnerabilities) into a single API response. Employs Redis caching with 24-hour TTL, Polly retries to handle rate limits, Hangfire background jobs, and MinIO storage with presigned URLs.",
      tech: ["ASP.NET Core Web API", "Redis", "Polly", "Hangfire", "MinIO", "GitHub REST API", "Snyk API"],
      category: "Backend & API",
      image: "images/projects/GitHub Repository Health API with PDF Reports and MinIO Storage.png",
      gallery: ["images/projects/GitHub Repository Health API with PDF Reports and MinIO Storage.png"],
      live: "https://github.com/duwadikaustuv/RepoRadar",
      github: "https://github.com/duwadikaustuv/RepoRadar",
      date: "2024-12-15",
      features: [
        "Aggregates repository metadata and Snyk vulnerabilities into a unified score",
        "Redis caching with 24-hour TTL achieving a 90% hit rate",
        "Polly retry policies to handle GitHub API's rate limits resiliently",
        "Hangfire background jobs for PDF report generation",
        "MinIO object storage integration with secure presigned download URLs"
      ]
    },
    {
      id: "8",
      title: "Weather Aggregation API with Redis Caching",
      description:
        "Built a unified weather intelligence API that aggregates weather, air pollution, and UV Index data into an Outdoor Score with parallel fetching and Redis caching.",
      longDescription:
        "Built a unified weather intelligence API by aggregating weather API, air quality API, and UV API data from multiple external API providers. Parallel async fetching (Task.WhenAll) drops response time from 1.2s to under 400ms. Implements Redis caching, Hangfire background jobs for processing image overlays, and Polly retries for API failures.",
      tech: [".NET 10", "ASP.NET Core Web API", "Redis", "Polly", "Hangfire", "PostgreSQL", "Next.js", "TypeScript", "Tailwind CSS"],
      category: "Backend & API",
      image: "images/projects/Weather Aggregation API with Redis Caching.png",
      gallery: ["images/projects/Weather Aggregation API with Redis Caching.png"],
      live: "https://github.com/duwadikaustuv/WeatherPulse",
      github: "https://github.com/duwadikaustuv/WeatherPulse",
      date: "2024-11-20",
      features: [
        "Aggregates weather, air quality, and UV indexes into a single 0-100 'Outdoor Score'",
        "Parallel async fetching dropping response times by 65%+",
        "Redis caching with a 30-minute TTL and 90% cache hit rate",
        "Hangfire background processing for overlaying weather data on map layers",
        "Polly policy-driven resilient REST API calls"
      ]
    },
    {
      id: "9",
      title: "Farmland Suitability API - NASA, and Weather Data Integration",
      description:
        "Built a crop suitability API integrating NASA POWER, weather, elevation, and Nepal agricultural datasets with Redis caching and Hangfire PDF generation.",
      longDescription:
        "Built a crop suitability API by integrating NASA POWER API, weather API, elevation API, and Nepal agricultural datasets into a unified analysis platform. Replaces four government websites farmers check before planting. Employs Redis caching (7-day TTL, sub-50ms responses), Polly retries with exponential backoff, and Hangfire background jobs for PDF suitability reports.",
      tech: ["ASP.NET Core Web API", "NASA POWER API", "OpenWeatherMap API", "Redis", "Polly", "Hangfire", "Clean Architecture"],
      category: "Backend & API",
      image: "images/projects/Farmland Suitability API - NASA, and Weather Data Integration.png",
      gallery: ["images/projects/Farmland Suitability API - NASA, and Weather Data Integration.png"],
      live: "https://github.com/duwadikaustuv/AgriIntel",
      github: "https://github.com/duwadikaustuv/AgriIntel",
      date: "2024-10-10",
      features: [
        "Aggregates climate and terrain data into suitability scores for 8 staple crops",
        "Redis caching with 7-day TTL delivering sub-50ms query responses",
        "Polly exponential backoff retry policies for government APIs",
        "Hangfire background tasks generating comprehensive crop suitability reports",
        "Adherence to Clean Architecture practices for codebase maintainability"
      ]
    },
    {
      id: "10",
      title: "Solar Feasibility - NASA POWER, Open-Elevation, and Nepal Land Data",
      description:
        "Built a solar feasibility API for Nepal determining optimal solar panel placement using NASA POWER, Open-Elevation, and Nepal Land Data, with AI visual simulation.",
      longDescription:
        "Built a solar feasibility API for Nepal that determines optimal solar panel placement for properties. Users input an address and receive solar radiation data, roof slope analysis, and AI-generated visualizations. Integrates NASA POWER, Open-Elevation API, Open Data Nepal land boundaries, and Replicate API to overlay solar panels onto property photos.",
      tech: ["ASP.NET Core Web API", "NASA POWER API", "Open-Elevation API", "Open Data Nepal", "OpenStreetMap Nominatim", "Replicate API", "AI image generation"],
      category: "Backend & API",
      image: "images/projects/Solar Feasibility - NASA POWER, Open-Elevation, and Nepal Land Data.png",
      gallery: ["images/projects/Solar Feasibility - NASA POWER, Open-Elevation, and Nepal Land Data.png"],
      live: "",
      github: "",
      date: "2024-09-15",
      features: [
        "Optimal solar panel placement using NASA POWER radiation data",
        "Terrain slope and roof angle estimation with Open-Elevation API",
        "Land boundaries validation using Open Data Nepal datasets",
        "AI-generated rooftop solar visualizations simulating panel layouts visually",
        "Geocoding and address normalization via OpenStreetMap Nominatim"
      ]
    }
  ];

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === id);

    if (foundProject) {
      setProject(foundProject);
    } else {
      setTimeout(() => {
        navigate("/projects");
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
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='675' viewBox='0 0 1200 675'%3E%3Crect width='1200' height='675' fill='%23f3f4f6'/%3E%3Ctext x='600' y='337' font-family='Arial' font-size='24' fill='%23374151' text-anchor='middle' dominant-baseline='middle'%3EProject Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>

                {project.gallery && project.gallery.length > 1 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {project.gallery.slice(1).map((img, index) => (
                      <div
                        key={index}
                        className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden"
                      >
                        <img
                          src={`${import.meta.env.BASE_URL}${img}`}
                          alt={`${project.title} screenshot ${index + 2}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='338' viewBox='0 0 600 338'%3E%3Crect width='600' height='338' fill='%23f3f4f6'/%3E%3Ctext x='300' y='169' font-family='Arial' font-size='16' fill='%23374151' text-anchor='middle' dominant-baseline='middle'%3EScreenshot%3C/text%3E%3C/svg%3E";
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
                <ul className="space-y-2 text-dark-gray dark:text-gray-300">
                  {project.features.map((feature, index) => (
                    <li key={index} className="py-1">
                      <span>{feature}</span>
                    </li>
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
