<script lang="ts" setup>
import { Search } from 'lucide-vue-next'
</script>

<template>
  <div class="flex place-content-end items-center gap-5">
    <label class="input w-40 sm:w-auto">
      <Search />
      <span class="px-3">Search</span>
      <kbd class="kbd kbd-sm">Ctrl</kbd>
      <kbd class="kbd kbd-sm">K</kbd>
    </label>
  </div>
</template>
