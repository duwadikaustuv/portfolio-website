import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Map section IDs to navbar section IDs
  const sectionMapping = {
    "home": "home",
    "about": "about",
    "development-services": "services", // Map Development Services section to services nav item
    "recent-projects": "projects",      // Map Recent Projects section to projects nav item
    "contact-section": "contact"        // Map Contact section to contact nav item
  };

  // Reordered sections to match the order on the homepage
  const sections = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "services", label: "Services", path: "/services" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    // Set active section based on current path
    if (location.pathname === "/") {
      // On homepage, determine active section based on scroll
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }

        const pageYOffset = window.pageYOffset;
        let newActiveSection = "home";

        // Get all section elements on the page
        const sectionElements = [];
        Object.keys(sectionMapping).forEach(sectionId => {
          const element = document.getElementById(sectionId);
          if (element) {
            sectionElements.push({
              id: sectionId,
              element: element,
              navId: sectionMapping[sectionId]
            });
          }
        });

        // Sort sections by their position on the page
        sectionElements.sort((a, b) => a.element.offsetTop - b.element.offsetTop);

        // Find the current active section
        const viewportHeight = window.innerHeight;
        const threshold = viewportHeight * 0.3;

        for (let i = sectionElements.length - 1; i >= 0; i--) {
          const { element, navId } = sectionElements[i];
          const offsetTop = element.offsetTop;
          
          if (pageYOffset >= offsetTop - threshold) {
            newActiveSection = navId;
            break;
          }
        }

        setActiveSection(newActiveSection);
      };

      // Initial call to set correct section on page load
      setTimeout(handleScroll, 100);
      
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // On other pages, set active section based on path
      const currentPath = location.pathname;
      const currentSection = sections.find(section => 
        currentPath === section.path || currentPath.startsWith(section.path + "/")
      );
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
      
      // Always set scrolled to true on non-homepage routes
      setScrolled(true);
    }
  }, [location.pathname, sections, sectionMapping]);

  const navigateToSection = (sectionId, path) => {
    if (location.pathname === "/" && sectionId !== "home") {
      // On homepage, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
    
    setActiveSection(sectionId);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed w-full glassmorphism py-4 z-[1000] backdrop-blur-lg ${
          scrolled ? "shadow-lg" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-heading font-bold text-deep-blue dark:text-light-blue"
              aria-label="Home"
            >
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <Link
                key={section.id}
                to={section.path}
                onClick={() => navigateToSection(section.id, section.path)}
                className={`relative text-sm font-medium ${
                  activeSection === section.id
                    ? "text-light-blue dark:text-blue-300"
                    : "text-dark-gray dark:text-gray-300 hover:text-light-blue dark:hover:text-blue-300"
                }`}
                aria-label={section.label}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-light-blue dark:bg-blue-300"
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="ml-4 p-2 text-dark-gray dark:text-gray-300"
              aria-label="Open mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg md:hidden"
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-dark-gray dark:text-gray-300"
              aria-label="Close mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {sections.map((section) => (
              <Link
                key={section.id}
                to={section.path}
                onClick={() => navigateToSection(section.id, section.path)}
                className={`text-2xl font-medium ${
                  activeSection === section.id
                    ? "text-light-blue dark:text-blue-300"
                    : "text-dark-gray dark:text-gray-300"
                }`}
                aria-label={section.label}
              >
                {section.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;