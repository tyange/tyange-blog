<script setup lang="ts">
import type { PostListItem } from '~~/shared/types/post-list-item.types'
import type { CMSResponse } from '~~/shared/types/response.types'
import FilterWithTags from '~/components/filter-with-tags.vue'
import PostCard from '~/components/post-card.vue'

const selectedTag = ref<string | null>(null)

const { data } = await useFetch<CMSResponse<{ posts: PostListItem[] }>>('/api/posts')

const postList = computed<PostListItem[]>(() => {
  const posts = data.value?.data.posts ?? []
  if (!selectedTag.value) return posts
  return posts.filter(p => p.tags.some(t => t.tag === selectedTag.value))
})

function handleChangeSelectedTags(tag?: string) {
  if (!tag) {
    selectedTag.value = null
    return
  }

  selectedTag.value = tag
}
</script>

<template>
  <div class="mb-12 flex w-full flex-col gap-5">
    <FilterWithTags :selected-tag="selectedTag" @handle-change-selected-tags="handleChangeSelectedTags" />
    <PostCard v-for="item in postList" :key="item.post_id" :item="item" />
  </div>
</template>
