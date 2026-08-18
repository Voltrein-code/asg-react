import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const allowViteDevelopmentStyles = {
  name: "allow-vite-development-styles",
  apply: "serve",
  transformIndexHtml(html) {
    return html.replace(
      "style-src 'self';",
      "style-src 'self' 'unsafe-inline';"
    );
  },
};

export default defineConfig({
  base: "/",
  build: {
    outDir: "build",
    sourcemap: false,
  },
  plugins: [react(), allowViteDevelopmentStyles],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
});
