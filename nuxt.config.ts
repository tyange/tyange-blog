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
      script: [
        {
          'defer': true,
          'src': 'https://umami.tyange.xyz/script.js',
          'data-website-id': 'f885586c-edcb-4a88-8c78-08bf76c5adb8',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  site: {
    url: 'https://blog.tyange.xyz',
    name: 'tyange-blog',
    description: 'tyange의 블로그.',
    defaultLocale: 'ko',
  },
  devtools: {
    enabled: true,
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/posts',
    ],
    defaults: {
      changefreq: 'daily',
      priority: 0.5,
      lastmod: new Date().toISOString(),
    },
  },
  compatibilityDate: '2024-11-01',
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/mdc',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
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
  routeRules: {
    '/': { swr: 60 },
    '/post/**': { swr: 3600 },
  },
})
