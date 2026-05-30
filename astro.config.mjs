import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://smirnov-ortho.ru",
  integrations: [tailwind()],
});
