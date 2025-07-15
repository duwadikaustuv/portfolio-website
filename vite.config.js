import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    plugins: [react()],
    base: isProduction ? "/portfolio-website/" : "/",
    server: {
      host: true,
      port: 3000,
    },
    preview: {
      host: true,
      port: 3000,
    },
  };
});
