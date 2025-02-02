<template>
  <div class="flex flex-col gap-5">
    <button @click="increase">more item</button>
    <Post v-for="item in postList" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import { SELECTION } from "~/constants/selection";

import Post from "~/components/post-card.vue";

const limitter = ref(10);

const increase = () => {
  limitter.value += limitter.value;
};

const { data: postList } = await useAsyncData(
  "post-list",
  () => {
    return queryCollection("content")
      .select(...SELECTION)
      .limit(limitter.value)
      .all();
  },
  { watch: [limitter] },
);
</script>
