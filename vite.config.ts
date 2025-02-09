import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom", "react-redux"],
          redux: ["@reduxjs/toolkit"],
          form: ["react-hook-form", "yup", "@hookform/resolvers"],
          ui: ["styled-components", "@radix-ui/react-dropdown-menu"],
          swiper: ["swiper", ],
        },
      },
    },
  },
});
