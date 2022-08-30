<script setup lang="ts">
import { ref } from "vue";
import MainTimer from "@/components/MainTimer/MainTimer.vue";
import { stati } from "@/utils/consts";

const CURRENT_STATUS = ref<stati>(stati.WORK);
</script>

<template>
  <h1>stetig</h1>
  <div>
    <MainTimer
      v-if="CURRENT_STATUS === stati.WORK"
      :status="stati.WORK"
      @stop="CURRENT_STATUS = stati.BREAK" />
    <MainTimer
      v-else
      :status="stati.BREAK"
      @stop="CURRENT_STATUS = stati.WORK" />
  </div>
</template>
