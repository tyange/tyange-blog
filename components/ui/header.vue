<template>
  <header class="flex w-full justify-center shadow-sm">
    <nav class="navbar bg-base-100 grid max-w-4xl grid-cols-2 sm:px-11">
      <div class="flex flex-1 place-content-start items-center gap-3 sm:gap-5">
        <button v-if="isSmall" class="btn btn-ghost p-0" @click="handleMenu">
          <Menu class="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
        <div class="dropdown dropdown-hover">
          <div
            class="box-border rounded-lg border border-transparent transition-all hover:border-gray-400 hover:shadow-sm"
          >
            <Menu class="h-6 w-6 sm:h-8 sm:w-8" />
          </div>
          <ul
            class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li v-for="menu in MENUS">
              <NuxtLink :key="menu.id" :to="menu.url">
                {{ menu.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <a class="text-2xl font-extrabold sm:text-3xl">tyange blog</a>
      </div>
      <SearchConsole />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { Menu } from "lucide-vue-next";

import { useSidebarStore } from "~/stores/sidebar";

import SearchConsole from "~/components/search-input.vue";

import { MENUS } from "~/constants/menus";

const sidebarStore = useSidebarStore();

const handleMenu = () => {
  sidebarStore.toggle();
};

const isSmall = useMediaQuery("(max-width: 40rem)");
</script>
