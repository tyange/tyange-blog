<script setup lang="ts">
import type { PostListItem } from '~~/shared/types/post-list-item.types'

defineProps<{ item: PostListItem }>()
</script>

<template>
  <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
    <div class="flex gap-3">
      <span
        v-for="tag in item.tags"
        :key="tag.tag"
        class="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
      >
        {{ tag }}
      </span>
    </div>
    <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
      {{ item.title }}
    </h3>
    <p class="mb-4 text-gray-600 dark:text-gray-300">
      {{ item.description }}
    </p>
    <div class="text-sm text-gray-500 dark:text-gray-400">
      {{ item.published_at }}
    </div>
  </div>
</template>
