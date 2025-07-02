<script setup lang="ts">
import { useSidebarStore } from '~/stores/sidebar'

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
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</template>
