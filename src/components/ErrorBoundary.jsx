import React from "react";
import { Component } from "react";
import GlassCard from "./GlassCard";
import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    
    // You could add an actual error reporting service here
    // Example: errorReportingService.logError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-soft-white dark:bg-gray-900 flex items-center justify-center p-4">
          <div className="max-w-lg w-full">
            <GlassCard>
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <FiAlertTriangle className="text-yellow-500 w-16 h-16" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-deep-blue dark:text-light-blue mb-4">
                  Something went wrong
                </h2>
                <p className="text-dark-gray dark:text-gray-300 mb-6">
                  The application encountered an unexpected error. You can try refreshing the page or return to the home page.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-2 bg-light-blue text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                    aria-label="Refresh page"
                  >
                    <FiRefreshCw aria-hidden="true" />
                    <span>Refresh Page</span>
                  </button>
                  <Link
                    to="/"
                    className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-dark-gray dark:text-gray-300 hover:bg-light-blue/10 transition-colors"
                    aria-label="Return to home page"
                  >
                    Return Home
                  </Link>
                </div>
                {this.state.error && (
                  <div className="mt-6 p-4 bg-red-500/10 rounded-lg text-left">
                    <p className="text-sm text-red-600 dark:text-red-400 font-mono">
                      {this.state.error.toString()}
                    </p>
                  </div>
                )}
              </div>
            </GlassCard>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;