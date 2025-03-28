<template>
  <div class="mb-10 flex flex-col gap-5">
    <Post v-for="item in postList" :key="item.id" :item="item" />
    <div
      v-if="hasMorePost"
      ref="loader"
      class="flex items-center justify-center"
    >
      <LoaderCircle :size="50" class="animate-spin" />
    </div>
    <div class="flex items-center justify-center">
      <Dot :size="50" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SELECTION } from "~/constants/selection";
import { useIntersectionObserver } from "@vueuse/core";

import Post from "~/components/post-card.vue";

import { LoaderCircle, Dot } from "lucide-vue-next";

const limitter = ref(5);
const loader = ref<HTMLElement | null>(null);
const hasMorePost = ref(true);

const handleIncreaseLimitter = () => {
  limitter.value += limitter.value;
};

const { stop } = useIntersectionObserver(loader, ([entry]) => {
  if (entry?.isIntersecting) {
    handleIncreaseLimitter();
  }
});

const { data: postCount } = await useAsyncData("post-count", () => {
  return queryCollection("content").all();
});

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

watch(
  postList,
  (newValue) => {
    if (!newValue || !postCount.value) {
      return;
    }

    if (newValue.length === postCount.value.length) {
      stop();
      hasMorePost.value = false;
    }
  },
  { immediate: true },
);
</script>
