import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'tyange-blog',
      htmlAttrs: {
        'data-theme': 'lofi',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@pinia/nuxt', '@nuxt/eslint', '@nuxtjs/mdc'],
  css: ['~/assets/css/main.css', '~/assets/fonts/pretendard/pretendard-subset.css'],
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
      prose: true,
    },
  },
  components: {
    global: true,
    dirs: [
      {
        path: '~/components/prose',
        global: true,
      },
    ],
  },
})
