<template>
  <div class="relative h-80 w-110 rounded-xl bg-white">
    <div class="absolute top-3 right-3 outline-none">
      <button class="outline-none" @click="modalStore.closeModal">
        <X class="text-gray-400 transition-colors hover:text-gray-700" />
      </button>
    </div>
    <div class="flex w-full items-center justify-center px-5 pt-5 pb-5">
      <input type="text" placeholder="Type here" class="input" />
    </div>
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { X } from "lucide-vue-next";

import { useModalStore } from "~/stores/modal";

const modalStore = useModalStore();
</script>
