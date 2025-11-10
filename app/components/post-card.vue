<script setup lang="ts">
import type { PostListItem } from '~~/shared/types/post-list-item.types'

defineProps<{ item: PostListItem }>()

const tagsContainer = useTemplateRef('tagsContainer')
const tags = useTemplateRef('tags')

const showLeftShadow = ref(false)
const showRightShadow = ref(false)

let observer: IntersectionObserver | null = null

watch(tags, () => {
  if (!tags.value || tags.value.length === 0) {
    return
  }

  const firstTag = tags.value[0]
  const lastTag = tags.value[tags.value.length - 1]

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target === firstTag) {
        showLeftShadow.value = !entry.isIntersecting
      }

      if (entry.target === lastTag) {
        showRightShadow.value = !entry.isIntersecting
      }
    })
  }, {
    root: tagsContainer.value,
    threshold: 1.0,
  })

  if (firstTag) {
    observer.observe(firstTag)
  }

  if (lastTag) {
    observer.observe(lastTag)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div class="w-full cursor-pointer rounded-lg border border-base-300 bg-base-100 p-6 hover:border-primary hover:shadow-lg transition-all">
    <div class="relative">
      <div
        ref="tagsContainer"
        class="flex gap-3 overflow-x-auto scrollbar-hide"
      >
        <span
          v-for="tag in item.tags"
          :key="tag"
          ref="tags"
          class="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
        >
          {{ tag }}
        </span>
      </div>
      <div
        v-if="showLeftShadow"
        class="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-base-100 to-transparent pointer-events-none"
      />

      <div
        v-if="showRightShadow"
        class="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-base-100 to-transparent pointer-events-none"
      />
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
