<script setup lang="ts">
import { ref } from "vue";
import TimerButton from "@/components/TimerButton/TimerButton.vue";
import { formatTime } from "@/utils/functions";
import {
  COLOR_TEMPERATURES,
  COLOR_THRESHOLD,
  temperatures,
  TIMER_CONFIGURATIONS,
  TIMER_STARTING_TEMPERATURE,
  timer_stati,
  work_stati,
} from "@/utils/consts";

const props = defineProps<{
  status: work_stati;
}>();

const emit = defineEmits(["stop", "temp"]);

// update every 1 second
const UPDATE_INTERVAL = 1000;

const STARTING_TIME = TIMER_CONFIGURATIONS[props.status].time;
const TIMER_TITLE = TIMER_CONFIGURATIONS[props.status].title;

const timeLeft = ref<number>(STARTING_TIME);
const timerStatus = ref<timer_stati>(timer_stati.INITIATED);

const timerTemperature = ref<temperatures>(
  TIMER_STARTING_TEMPERATURE[props.status]
);

let timerId: number;

const findTemperatureFromScale = function (
  time: number,
  currentStatus: work_stati
): temperatures {
  let ratio: number = time / STARTING_TIME;
  let result: temperatures = TIMER_STARTING_TEMPERATURE[currentStatus];
  for (const temperature in COLOR_THRESHOLD) {
    const threshold: number = COLOR_THRESHOLD[temperature as temperatures];
    if (currentStatus === work_stati.BREAK) ratio = 1 - ratio;
    if (ratio < threshold) result = temperature as temperatures;
  }
  return result;
};

const timerTick = function () {
  timeLeft.value -= UPDATE_INTERVAL;
  const newTemperature = findTemperatureFromScale(timeLeft.value, props.status);
  if (newTemperature != timerTemperature.value) {
    timerTemperature.value = newTemperature;
    emit("temp", newTemperature);
  }
};

const onStartTimer = function () {
  timerStatus.value = timer_stati.RUNNING;
  timerId = window.setInterval(function () {
    if (timeLeft.value > 0 && timerStatus.value === timer_stati.RUNNING) {
      timerTick();
    }
  }, UPDATE_INTERVAL);
};

const onStopTimer = function () {
  timerStatus.value = timer_stati.STOPPED;
  timeLeft.value = STARTING_TIME;
  clearInterval(timerId);
  emit("stop");
};
</script>

<template>
  <div
    class="timer-temperature-border"
    :style="{ borderColor: COLOR_TEMPERATURES[timerTemperature] }">
    <div class="timer-container">
      <label class="timer-title">{{ TIMER_TITLE }}</label>
      <label class="timer-timeleft">{{ formatTime(timeLeft) }}</label>
      <div class="timer-button-container">
        <TimerButton
          label="start"
          v-if="timerStatus === timer_stati.INITIATED"
          @click="onStartTimer" />
        <TimerButton
          label="stop"
          v-else-if="timerStatus === timer_stati.RUNNING"
          @click="onStopTimer" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.timer-temperature-border {
  @apply border rounded;
}
.timer-container {
  @apply bg-white shadow rounded p-2 space-y-4;
}
.timer-title {
  @apply text-xl text-center block;
}
.timer-timeleft {
  @apply text-4xl text-center font-semibold block;
}
.timer-button-container {
  @apply w-full;
}
</style>
