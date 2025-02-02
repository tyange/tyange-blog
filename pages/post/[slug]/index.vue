<template>
  <div v-if="post">
    <article class="prose max-w-3xl flex-1">
      <header class="mb-8">
        <div class="mb-4 flex items-center gap-2">
          <time class="text-sm text-gray-500 dark:text-gray-400">{{
            post.date
          }}</time>
        </div>
        <h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          {{ post.title }}
        </h1>
        <p class="mb-6 text-xl text-gray-600 dark:text-gray-300">
          {{ post.description }}
        </p>
      </header>
      <ContentRenderer :value="post" />
      <footer class="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300"
          >
            #{{ tag }}
          </span>
        </div>
      </footer>
    </article>
  </div>
  <div v-else>
    <p>게시글을 찾을 수 없습니다.</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug;

const { data: post } = await useAsyncData(`post-${slug}`, () => {
  return queryCollection("content").path(`/post/${slug}`).first();
});
</script>
