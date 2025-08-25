<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
import { githubUrl } from '~/constants/my-info'

defineProps<{ isScrolling: boolean }>()

const sidebarStore = useSidebarStore()

async function handleNavigateTo(url: string, isExternal: boolean) {
  await navigateTo(url, { external: isExternal })
}
</script>

<template>
  <header
    class="flex w-full justify-center bg-base-100 transition-all duration-500 ease-in-out"
    :class="{
      '-translate-y-full opacity-0 blur-sm': isScrolling,
      'translate-y-0 opacity-100 blur-none': !isScrolling,
    }"
  >
    <nav class="navbar bg-base-100 w-full max-w-3xl p-4 sm:p-0">
      <div class="flex justify-between items-center w-full">
        <button
          class="text-xl font-extrabold sm:text-3xl transition-all duration-300 whitespace-nowrap shrink-0 leading-1"
          :class="{ 'scale-95': isScrolling }"
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
