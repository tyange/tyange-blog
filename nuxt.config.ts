import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@vueuse/nuxt", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "catppuccin-latte",
          langs: ["rust", "go", "python"],
        },
      },
      pathMeta: {
        slugifyOptions: {
          replacement: "-",
          lower: false,
          strict: false,
          trim: true,
          remove: /[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F\s\w-]/g,
        },
      },
    },
  },
});
