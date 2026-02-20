<script setup lang="ts">
import type { PostListItem } from '~~/shared/types/post-list-item.types'
import type { CMSResponse } from '~~/shared/types/response.types'
import FilterWithTags from '~/components/filter-with-tags.vue'
import PostCard from '~/components/post-card.vue'

const selectedTag = ref<string | null>(null)
const query = computed(() => ({ tag: selectedTag.value ? selectedTag.value : undefined }))

const { data } = await useFetch<CMSResponse<{ posts: PostListItem[] }>>(`/api/posts`, { query })

const postList = computed<PostListItem[]>(() => {
  if (!data?.value) {
    return []
  }

  return data.value.data.posts
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
