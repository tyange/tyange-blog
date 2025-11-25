<template>
  <code
    class="prose-code"
    :class="$attrs.class"
  >
    <slot />
  </code>
</template>

<style scoped>
.prose-code {
  font-family: 'Monaspace Argon', monospace;
}
</style>
