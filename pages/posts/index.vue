<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { Dot, LoaderCircle } from 'lucide-vue-next'

import Post from '~/components/post-card.vue'

import { SELECTION } from '~/constants/selection'

const limit = ref(5)
const loader = ref <HTMLElement | null> (null)
const hasMorePost = ref(true)

function handleIncreaseLimit() {
  limit.value += limit.value
}

const { stop } = useIntersectionObserver(loader, ([entry]) => {
  if (entry?.isIntersecting) {
    handleIncreaseLimit()
  }
})

const { data: postCount } = await useAsyncData('post-count', () => {
  return queryCollection('content').all()
})

const { data: postList } = await useAsyncData(
  'post-list',
  () => {
    return queryCollection('content')
      .select(...SELECTION)
      .limit(limit.value)
      .all()
  },
  { watch: [limit] },
)

watch(
  postList,
  (newValue) => {
    if (!newValue || !postCount.value) {
      return
    }

    if (newValue.length === postCount.value.length) {
      stop()
      hasMorePost.value = false
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="mb-10 flex flex-col gap-5">
    <Post v-for="item in postList" :key="item.id" :item="item" />
    <div v-if="hasMorePost" ref="loader" class="flex items-center justify-center">
      <LoaderCircle :size="50" class="animate-spin" />
    </div>
    <div class="flex items-center justify-center">
      <Dot :size="50" />
    </div>
  </div>
</template>
