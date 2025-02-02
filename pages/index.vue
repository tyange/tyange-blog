<template>
  <div class="mb-12">
    <h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
      Featured Post
    </h2>
    <div class="flex flex-col gap-5">
      <FeaturedPost v-for="post in data" :featured-post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import FeaturedPost from "~/components/featured-post.vue";

// TODO: 현재 @nuxt/content 모듈이 내부적으로 사용 중인 SQLite 관련 코드에서 오류가 있음.
// 아래 where 메서드에 boolean 값을 인자로 넘길 수 있으나, parsing 과정에서 SQLite에서 인식 가능한 0, 1로 변환되지 않음.
// 임시 방편으로 0, 1을 전달해서 코드를 작동시키고 추후 v3.1.0(현재 3.0.1)에서 버그가 고쳐지면 그때 boolean으로 값을 변경할 것.
const { data } = await useAsyncData("featured-posts", () => {
  return queryCollection("content").where("featured", "=", 1).all();
});

console.log(data.value);
</script>
