/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
      },
      colors: {
        clinic: {
          blue: "#0f5ea8",
          cyan: "#0e7490",
          mint: "#14b8a6",
          ink: "#102033",
          soft: "#f4f8fb",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 94, 168, 0.12)",
      },
    },
  },
  plugins: [],
};
