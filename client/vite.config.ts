import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true
      },
    },
  }
});