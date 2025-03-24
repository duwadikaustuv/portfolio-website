import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard";
import { Helmet } from "react-helmet-async";
import { FiHome, FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-soft-white dark:bg-gray-900 flex items-center justify-center p-4">
      <Helmet>
        <title>Page Not Found | Kaustuv Duwadi</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist or has been moved."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full"
      >
        <GlassCard>
          <div className="p-8 text-center">
            <motion.h1
              className="text-6xl font-heading font-bold text-deep-blue dark:text-light-blue mb-4"
              aria-live="polite"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: 0.2,
              }}
            >
              404
            </motion.h1>
            <h2 className="text-2xl font-heading font-medium text-dark-gray dark:text-gray-300 mb-6">
              Page Not Found
            </h2>
            <p className="text-dark-gray dark:text-gray-400 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-light-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Return to home page"
              >
                <FiHome aria-hidden="true" />
                <span>Return Home</span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-dark-gray dark:text-gray-300 hover:bg-light-blue/10 transition-colors"
                aria-label="Go back to previous page"
              >
                <FiArrowLeft aria-hidden="true" />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default NotFound;
