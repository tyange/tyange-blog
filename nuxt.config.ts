import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        'data-theme': 'lofi',
      },
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@pinia/nuxt', '@nuxt/eslint', '@nuxtjs/mdc'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  runtimeConfig: {
    public: {
      tyangeCmsApiBase: '',
    },
  },
  mdc: {
    highlight: {
      theme: 'github-dark',
    },
    components: {
      prose: false,
    },
  },
})
