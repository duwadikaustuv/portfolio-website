import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ 
  title = "Kaustuv Duwadi | Frontend Developer",
  description = "Frontend developer specializing in React, creating responsive and modern UIs for web applications.",
  keywords = "frontend developer, react developer, web developer, javascript, portfolio",
  ogImage = "/og-image.jpg",
  ogUrl = "https://kaustuvduwadi.com"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;