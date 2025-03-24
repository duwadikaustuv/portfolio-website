import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  // Initialize state from localStorage or default to false (light mode)
  const [darkMode, setDarkMode] = useState(() => {
    // Check if we're in the browser and if there's a saved preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      // Return true if theme is 'dark', false otherwise
      return savedTheme === 'dark';
    }
    return false;
  });

  useEffect(() => {
    // Update DOM and localStorage when darkMode changes
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg hover:bg-white/20 transition"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <FiSun className="text-white" />
      ) : (
        <FiMoon className="text-dark-gray" />
      )}
    </button>
  );
};

export default ThemeToggle;
