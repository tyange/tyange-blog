<template>
  <div class="flex flex-col gap-5">
    <Post v-for="item in postList" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import { SELECTION } from "~/constants/selection";

import Post from "~/components/post-card.vue";

const { data: postList } = await useAsyncData("post-list", () => {
  return queryCollection("content")
    .select(...SELECTION)
    .limit(10)
    .all();
});
</script>
