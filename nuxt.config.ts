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

      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  site: {
    url: 'https://blog.tyange.com',
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
      changefreq: 'always',
      priority: 0.5,
      lastmod: new Date().toISOString(),
    },
  },
  compatibilityDate: '2024-11-01',
  modules: ['@vueuse/nuxt', '@pinia/nuxt', '@nuxt/eslint', '@nuxtjs/sitemap', '@nuxtjs/mdc'],
  css: ['~/assets/css/main.css', '~/assets/fonts/pretendard/pretendard-subset.css', '~/assets/fonts/monaspace-argon/monaspace-argon.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  mdc: {
    highlight: false,
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
  runtimeConfig: {
    public: {
      tyangeCmsApiBase: '',
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/rss.xml'],
    },
  },
  hooks: {
    async 'prerender:routes'(ctx) {
      const base = process.env.NUXT_PUBLIC_TYANGE_CMS_API_BASE
      if (!base) return
      try {
        const res = await fetch(`${base}/posts`)
        const json = await res.json() as { data?: { posts?: { post_id: string }[] } }
        for (const post of json?.data?.posts ?? []) {
          ctx.routes.add(`/post/${post.post_id}`)
        }
      }
      catch (e) {
        console.error('prerender:routes CMS fetch failed', e)
      }
    },
  },
})
