<script setup lang="ts">
import type { PostListItem } from '~/types/post-list-item.types'

const route = useRoute()
const slug = route.params.slug

const config = useRuntimeConfig()

const { data } = await useFetch<PostListItem>(`${config.public.tyangeCmsApiBase}/post/${slug}`)

const post = computed(() => {
  if (!data?.value) {
    return null
  }

  return data.value
})
</script>

<template>
  <article v-if="post" class="max-w-3xl flex-1 prose">
    <header class="mb-8 border-b border-gray-200 dark:border-gray-700">
      <div class="mb-4 flex items-center gap-2">
        <time class="text-sm text-gray-500 dark:text-gray-400">{{ post.published_at }}</time>
      </div>
      <h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
        {{ post.title }}
      </h1>
      <p class="mb-6 text-xl text-gray-600 dark:text-gray-300">
        {{ post.description }}
      </p>
    </header>
    <MDC :value="post.content" tag="section" />
    <footer class="mt-8 pt-8">
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300"
        >
          #{{ tag }}
        </span>
      </div>
    </footer>
  </article>
  <div v-else>
    <p>게시글을 찾을 수 없습니다.</p>
  </div>
</template>
