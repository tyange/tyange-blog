<script setup lang="ts">
import type { PostListItem } from '~~/shared/types/post-list-item.types'
import Shiki from '@shikijs/markdown-it'
import MarkdownIt from 'markdown-it'

const md = MarkdownIt()

md.use(await Shiki({
  themes: {
    light: 'github-dark',
    dark: 'github-dark',
  },
}))

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const { data: post } = await useFetch<PostListItem>(
  () => `/api/post/${slug.value}`,
)

const htmlContent = computed(() => {
  if (!post.value?.content) {
    return ''
  }
  return md.render(post.value.content)
})

useSeoMeta({
  title: `${post.value?.title} | tyange-blog`,
  ogTitle: post.value?.title,
  description: post.value?.description,
  ogDescription: post.value?.description,
  ogImage: '',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <article v-if="post" class="max-w-3xl flex-1 prose prose-base-content">
      <header class="mb-8 border-b border-base-300">
        <div class="mb-4 flex items-center gap-2">
          <time class="text-sm text-base-content/50">{{ post.published_at }}</time>
        </div>
        <h1 class="mb-4 text-4xl font-bold text-base-content">
          {{ post.title }}
        </h1>
        <p class="mb-6 text-xl text-base-content/70">
          {{ post.description }}
        </p>
      </header>
      <section v-html="htmlContent" />
      <footer class="mt-8 pt-8">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="rounded-full bg-base-200 px-3 py-1 text-sm text-base-content/80"
          >
            #{{ tag }}
          </span>
        </div>
      </footer>
    </article>
    <div v-else class="text-base-content/60">
      <p>게시글을 찾을 수 없습니다.</p>
    </div>
  </div>
</template>
