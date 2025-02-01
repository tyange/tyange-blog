<template>
  <nav
    class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/75 dark:border-gray-700 dark:bg-gray-900/95 dark:supports-[backdrop-filter]:bg-gray-900/75"
  >
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex items-center">
          <button class="rounded-md p-2 text-gray-600 dark:text-gray-300">
            <Menu :size="24" />
          </button>
          <div class="ml-4 text-xl font-bold text-gray-900 dark:text-white">
            My Tech Blog
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <button class="rounded-md p-2 text-gray-600 dark:text-gray-300">
            <Search :size="24" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Menu, Search } from "lucide-vue-next";
</script>
