import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import LiveChat from "./components/LiveChat";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

function App() {
  // Initialize theme from localStorage on app load
  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");

    // Apply dark mode if saved or if user prefers dark color scheme
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home">
                  <Home />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="development-services">
                  <Services />
                </div>
                <div id="recent-projects">
                  <Projects />
                </div>
                <div id="contact-section">
                  <Contact />
                </div>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <LiveChat />
      </div>
    </Router>
  );
}

export default App;
