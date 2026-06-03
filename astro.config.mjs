import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://makhanovstanislav.ru",
  vite: {
    plugins: [tailwindcss()],
  },
});
