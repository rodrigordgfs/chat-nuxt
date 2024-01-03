import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": path.resolve(__dirname, "./"),
    "~": path.resolve(__dirname, "./"),
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
});
