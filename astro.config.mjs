import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://nikden.github.io",
  base: "/ortho_web",
  vite: {
    plugins: [tailwindcss()],
  },
});
