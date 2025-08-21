<template>
  <pre class="prose-pre" :class="$attrs.class"><slot /></pre>
</template>

<style scoped>
.prose-pre {
  font-family: 'Monaspace Krypton', 'Fira Code', monospace;
  font-feature-settings:
    'calt' 1,
    'liga' 1,
    'ss01' 1,
    'ss03' 1;
}
</style>
