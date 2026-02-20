<script setup lang="ts">
const props = defineProps<{ selectedTag: string | null }>()
const emits = defineEmits<{ (e: 'handleChangeSelectedTags', tag?: string): void }>()

const { data, status } = await useFetch<CMSResponse<{ tag: string, count: number }[]>>('/api/tags')

const isLoading = computed(() => status.value === 'idle' || status.value === 'pending')

const formRef = ref<HTMLFormElement | null>(null)

watch(() => props.selectedTag, (val) => {
  if (val === null) {
    formRef.value?.reset()
  }
})
</script>

<template>
  <form ref="formRef" class="filter">
    <div v-if="!isLoading && data?.data">
      <input class="btn btn-xs btn-circle btn-soft btn-secondary" type="reset" value="×" @click="emits('handleChangeSelectedTags')">
      <input
        v-for="tag in data.data"
        :key="tag.tag"
        :value="tag.tag"
        class="btn btn-sm btn-soft btn-secondary rounded-3xl"
        type="radio"
        name="tag"
        :aria-label="`${tag.tag} ${tag.count}`"
        @click="emits('handleChangeSelectedTags', tag.tag)"
      >
    </div>
    <div v-if="isLoading">
      <span class="loading loading-spinner loading-md" />
    </div>
  </form>
</template>
