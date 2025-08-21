<script setup lang="ts">
import { githubUrl } from '~/constants/my-info'

async function handleNavigateTo(url: string, isExternal: boolean) {
  await navigateTo(url, { external: isExternal })
}
</script>

<template>
  <header class="flex w-full justify-center">
    <nav class="navbar bg-base-100 max-w-3xl p-4 sm:p-0">
      <div class="flex w-full items-center justify-between gap-4">
        <NuxtLink class="text-2xl font-extrabold sm:text-3xl" to="/">
          tyange blog
        </NuxtLink>
        <div class="flex items-center gap-2 sm:gap-4 sm:text-base">
          <span class="text-sm text-gray-600">© {{ new Date().getFullYear() }} tyange</span>
          <span class="text-sm text-gray-400">|</span>
          <button
            class="hover:text-blue-600 text-sm transition-colors cursor-pointer"
            aria-label="GitHub 프로필"
            @click="handleNavigateTo(githubUrl, true)"
          >
            GitHub
          </button>
          <span class="text-sm text-gray-400">|</span>
          <a
            href="mailto:usun16@gmail.com"
            class="hover:text-blue-600 text-sm transition-colors"
          >
            usun16@gmail.com
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
