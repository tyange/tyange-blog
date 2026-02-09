<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      title: 'Tyange\'s Blog RSS Feed',
      href: '/rss.xml',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <main class="mx-auto mb-6 sm:my-6 max-w-3xl p-4 sm:p-2">
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
