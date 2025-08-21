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
  font-family: 'Monaspace Krypton', monospace;
}
</style>
