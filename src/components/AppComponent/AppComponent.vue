<script setup lang="ts">
import { ref } from "vue";
import MainTimer from "@/components/MainTimer/MainTimer.vue";
import { work_stati } from "@/utils/consts";

const CURRENT_STATUS = ref<work_stati>(work_stati.WORK);
</script>

<template>
  <h1 class="app-heading">stetig</h1>
  <div class="app-content">
    <MainTimer
      v-if="CURRENT_STATUS === work_stati.WORK"
      :status="work_stati.WORK"
      @stop="CURRENT_STATUS = work_stati.BREAK" />
    <MainTimer
      v-else
      :status="work_stati.BREAK"
      @stop="CURRENT_STATUS = work_stati.WORK" />
  </div>
</template>

<style lang="postcss" scoped>
.app-heading {
  @apply font-mono text-2xl text-center mt-1 mb-4;
}
.app-content {
  @apply max-w-lg mx-auto;
}
</style>
