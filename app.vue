<template>
  <div>
    <article class="prose">
      <ContentRenderer v-if="data" :value="data" />
    </article>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData(() =>
  queryCollection("content").path("/post/test").first()
);
</script>
