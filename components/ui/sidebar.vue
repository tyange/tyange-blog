<script setup lang="ts">
import { House } from 'lucide-vue-next'

const sidebarStore = useSidebarStore()
</script>

<template>
  <div class="drawer-side">
    <div
      aria-label="close sidebar"
      class="drawer-overlay"
      @click="sidebarStore.toggle"
    />
    <ul class="menu bg-base-200 min-h-full w-80 p-4">
      <li>
        <NuxtLink to="/">
          <House />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
