<script setup lang="ts">
import type { PostListItem } from '~~/shared/types/post-list-item.types'
import type { CMSResponse } from '~~/shared/types/response.types'
import PostCard from '~/components/post-card.vue'

const config = useRuntimeConfig()

const { data } = await useFetch<CMSResponse<{ posts: PostListItem[] }>>(`/posts`, { baseURL: import.meta.server ? config.public.tyangeCmsApiBase : 'https://tyange.com/api/cms' })

const postList = computed<PostListItem[]>(() => {
  if (!data?.value) {
    return []
  }

  return data.value.data.posts
})
</script>

<template>
  <div class="mb-12 flex w-full flex-col gap-5">
    <PostCard v-for="item in postList" :key="item.post_id" :item="item" />
  </div>
</template>
