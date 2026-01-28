import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Загружаем .env файлы
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      host: true,
    },
    define: {
      'process.env': env,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom", "react-router-dom", "react-redux"],
            redux: ["@reduxjs/toolkit"],
            form: ["react-hook-form", "yup", "@hookform/resolvers"],
            ui: ["styled-components", "@radix-ui/react-dropdown-menu"],
            swiper: ["swiper"],
          },
        },
      },
    },
  };
});
