<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <label class="title">{{ props.title }}</label>
</template>

<style lang="postcss" scoped>
.title {
  @apply text-center block;
}
</style>
