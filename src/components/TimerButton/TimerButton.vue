<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>

<template>
  <button class="timer-button">{{ props.label }}</button>
</template>

<style lang="postcss" scoped>
.timer-button {
  @apply block text-center
      rounded border border-white
      px-4 py-1 mx-auto;
}
</style>
