<script setup lang="ts">
import type { PostListItem } from '~/types/post-list-item.types'
import type { CMSResponse } from '~/types/response.types'
import PostCard from '~/components/post-card.vue'

const config = useRuntimeConfig()

const { data } = await useFetch<CMSResponse<{ posts: PostListItem[] }>>(`${config.public.tyangeCmsApiBase}/posts`)

const postList = computed<PostListItem[]>(() => {
  if (!data?.value) {
    return []
  }

  return data.value.data.posts
})

async function handleNavigateToPost(postId: string) {
  await navigateTo(`/post/${postId}`)
}
</script>

<template>
  <div class="mb-12 flex w-full flex-col gap-5">
    <PostCard v-for="item in postList" :key="item.post_id" :item="item" @click="handleNavigateToPost(item.post_id)" />
  </div>
</template>
