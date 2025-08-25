<script setup lang="ts">
import Header from '~/components/ui/header.vue'
import Sidebar from '~/components/ui/sidebar.vue'

const sidebarStore = useSidebarStore()
const { isOpen: isSidebarOpen } = storeToRefs(sidebarStore)

const el = useTemplateRef<HTMLElement>('el')
const { isScrolling } = useScroll(el)
</script>

<template>
  <div class="drawer">
    <input type="checkbox" class="drawer-toggle" :checked="isSidebarOpen">
    <div ref="el" class="drawer-content">
      <Header :is-scrolling="isScrolling" />
      <slot />
    </div>
    <Sidebar />
  </div>
</template>
