<script setup lang="ts">
import { computed, ref } from "vue";
import { useFavicon } from "@vueuse/core";

import MainTimer from "@/components/MainTimer/MainTimer.vue";
import {
  temperatures,
  TIMER_STARTING_TEMPERATURE,
  work_stati,
} from "@/utils/consts";

const CURRENT_STATUS = ref<work_stati>(work_stati.WORK);
const CURRENT_TEMPERATURE = ref<temperatures>(
  TIMER_STARTING_TEMPERATURE[CURRENT_STATUS.value]
);

const favicon = computed(function () {
  return "favicon-" + CURRENT_TEMPERATURE.value.toLowerCase() + ".ico";
});

const changeCurrentTemperature = function (newTemperature: temperatures) {
  CURRENT_TEMPERATURE.value = newTemperature;
};

useFavicon(favicon, {
  baseUrl: "/",
  rel: "icon",
});
</script>

<template>
  <h1 class="app-heading">stetig</h1>
  <div class="app-content">
    <MainTimer
      v-if="CURRENT_STATUS === work_stati.WORK"
      :status="work_stati.WORK"
      @temp="changeCurrentTemperature"
      @stop="CURRENT_STATUS = work_stati.BREAK" />
    <MainTimer
      v-else
      :status="work_stati.BREAK"
      @temp="changeCurrentTemperature"
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
