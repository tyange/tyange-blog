<script setup lang="ts">
const props = defineProps<{
  code?: string
  language?: string
  filename?: string
  highlights?: number[]
}>()

const highlighted = await useShikiHighlighted(
  props.code || '',
  { lang: props.language || 'text', unwrap: true },
)
</script>

<template>
  <pre v-if="code" class="prose-pre" v-html="highlighted" />
</template>

<style scoped>
.prose-pre :deep(code) {
  background-color: transparent !important;
  padding: 0 !important;
  font-family: 'Monaspace Argon', monospace !important;
}
.prose-pre :deep(code::before),
.prose-pre :deep(code::after) {
  content: '' !important;
}
</style>
