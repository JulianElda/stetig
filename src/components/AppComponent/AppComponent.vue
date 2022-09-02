<script setup lang="ts">
import { computed, ref } from "vue";
import { useFavicon } from "@vueuse/core";
import AppHeader from "@/components/AppHeader/AppHeader.vue";
import MainTimer from "@/components/MainTimer/MainTimer.vue";
import {
  COLOR_TEMPERATURES,
  temperatures,
  TIMER_STARTING_TEMPERATURE,
  work_stati,
} from "@/utils/consts";

const props = defineProps<{
  temperature?: temperatures;
}>();

const CURRENT_STATUS = ref<work_stati>(work_stati.WORK);
const CURRENT_TEMPERATURE = ref<temperatures>(
  props.temperature || TIMER_STARTING_TEMPERATURE[CURRENT_STATUS.value]
);

const favicon = computed(function () {
  return "favicon-" + CURRENT_TEMPERATURE.value.toLowerCase() + ".ico";
});

const changeCurrentTemperature = function (newTemperature: temperatures) {
  CURRENT_TEMPERATURE.value = newTemperature;
};

useFavicon(favicon, {
  baseUrl: "/stetig/",
  rel: "icon",
});
</script>

<template>
  <div
    class="app-container"
    :style="{ backgroundColor: COLOR_TEMPERATURES[CURRENT_TEMPERATURE] }">
    <AppHeader />
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
  </div>
</template>

<style lang="postcss" scoped>
.app-container {
  @apply h-screen w-full p-6;
}
.app-content {
  @apply max-w-lg mx-auto;
}
</style>
