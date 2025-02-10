<template>
  <div class="drawer">
    <input
      id="my-drawer-3"
      type="checkbox"
      class="drawer-toggle"
      :checked="isSidebarOpen"
    />
    <div class="drawer-content">
      <Header />
      <slot />
    </div>
    <Sidebar />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/ui/header.vue";
import Sidebar from "~/components/ui/sidebar.vue";

import { useSidebarStore } from "~/stores/sidebar";

const sidebarStore = useSidebarStore();
const { isOpen: isSidebarOpen } = storeToRefs(sidebarStore);
</script>
