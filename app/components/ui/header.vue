<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
import { githubUrl } from '~~/shared/constants/my-info'

const sidebarStore = useSidebarStore()

async function handleNavigateTo(url: string, isExternal: boolean) {
  await navigateTo(url, { external: isExternal })
}
</script>

<template>
  <header
    class="flex w-full justify-center bg-base-100"
  >
    <nav class="navbar bg-base-100 w-full max-w-3xl px-4">
      <div class="flex justify-between items-center w-full">
        <button
          class="text-xl font-extrabold sm:text-3xl transition-all duration-300 whitespace-nowrap shrink-0 leading-1 cursor-pointer"
          @click="sidebarStore.toggle"
        >
          <Menu />
        </button>
        <div class="flex items-center text-xs sm:text-sm w-fit font-normal">
          <span class="whitespace-nowrap">© {{ new Date().getFullYear() }} <span>tyange</span></span>
          <div class="divider divider-horizontal m-0" />
          <button
            class="hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
            aria-label="GitHub 프로필"
            @click="handleNavigateTo(githubUrl, true)"
          >
            GitHub
          </button>
          <div class="divider divider-horizontal m-0" />
          <a
            href="mailto:usun16@gmail.com"
            class="hover:text-blue-600 transition-colors whitespace-nowrap"
          >
            usun16@gmail.com
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
