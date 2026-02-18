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
    <NuxtLink
      class="w-full h-full"
      :to="`/post/${item.post_id}`"
    >
      <h3 class="mb-2 text-lg font-bold text-base-content">
        {{ item.title }}
      </h3>
      <p class="mb-4 text-base-content/70">
        {{ item.description }}
      </p>
      <div
        ref="tagsContainer"
        class="flex gap-3 mt-3"
      >
        <span
          v-for="tag in item.tags"
          :key="tag"
          ref="tags"
          class="badge badge-xs shadow-xs border border-gray-100"
        >
          {{ tag }}
        </span>
      </div>
    </NuxtLink>
  </div>
</template>
