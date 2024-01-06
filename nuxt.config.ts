import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  alias: {
    "@": path.resolve(__dirname, "./"),
    "~": path.resolve(__dirname, "./"),
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Chat Nuxt",
    },
  },
});
