<script setup lang="ts">
import type { PostListItem } from '~/types/post-list-item.types'

defineProps<{ item: PostListItem }>()
</script>

<template>
  <div class="w-full cursor-pointer rounded-lg border border-base-300 bg-base-100 p-6 hover:border-primary hover:shadow-lg transition-all">
    <div class="flex gap-3">
      <span
        v-for="tag in item.tags"
        :key="tag"
        class="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
      >
        {{ tag }}
      </span>
    </div>
    <h3 class="mb-2 text-lg font-bold text-base-content">
      {{ item.title }}
    </h3>
    <p class="mb-4 text-base-content/70">
      {{ item.description }}
    </p>
    <div class="text-sm text-base-content/50">
      {{ item.published_at }}
    </div>
  </div>
</template>
