<template>
  <div class="mb-12 flex flex-col gap-6">
    <div>
      <h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Featured Posts
      </h2>
      <div class="flex flex-col gap-5">
        <FeaturedPost
          v-for="item in featuredPostList"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
    <div>
      <h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Resent Posts
      </h2>
      <div class="flex flex-col gap-5">
        <PostCard v-for="item in resentPostList" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SELECTION } from "~/constants/selection";

import FeaturedPost from "~/components/featured-post.vue";
import PostCard from "~/components/post-card.vue";

const { data: featuredPostList } = await useAsyncData("featured-posts", () => {
  return queryCollection("content")
    .where("featured", "=", true)
    .select(...SELECTION)
    .all();
});

const { data: resentPostList } = await useAsyncData("resent-posts", () => {
  return queryCollection("content")
    .limit(5)
    .select(...SELECTION)
    .all();
});
</script>
