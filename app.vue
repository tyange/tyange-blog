<script setup lang="ts">
import SearchConsole from '~/components/modal/modal-inner/search-console.vue'
import Modal from '~/components/modal/modal.vue'

const modalStore = useModalStore()

// const { control, k } = useMagicKeys();
//
// watchEffect(() => {
//   if ((control.value && k.value) || (control.value && k.value)) {
//     modalStore.openModal("search-console");
//   }
// });
</script>

<template>
  <NuxtLayout>
    <main class="mx-auto mt-6 max-w-3xl p-4 sm:p-0">
      <NuxtPage />
    </main>
    <Modal modal-id="search-console">
      <SearchConsole />
    </Modal>
  </NuxtLayout>
</template>
