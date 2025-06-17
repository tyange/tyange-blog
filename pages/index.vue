<template>
  <div class="mb-12 flex w-full flex-col gap-5">
    <PostCard v-for="item in postList" :key="item.post_id" :item="item" @click="handleNavigateToPost(item.post_id)" />
  </div>
</template>

<script setup lang="ts">
import PostCard from '~/components/post-card.vue';

import type { PostListItem } from '~/types/post-list-item.types';
import type { CMSResponse } from '~/types/response.types';

const { data } = await useFetch<CMSResponse<{ posts: PostListItem[] }>>('https://tyange.hopto.org/cms/posts');

const postList = computed<PostListItem[]>(() => {
  if (!data?.value) {
    return [];
  }

  return data.value.data.posts;
});

const handleNavigateToPost = async (postId: string) => {
  await navigateTo(`/post/${postId}`);
};
</script>
