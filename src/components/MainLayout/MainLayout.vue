<template>
  <div class="main-layout">
    <slot></slot>
  </div>
</template>

<style lang="postcss" scoped>
.main-layout {
  @apply h-screen w-full bg-gray-50 p-6;
}
</style>
