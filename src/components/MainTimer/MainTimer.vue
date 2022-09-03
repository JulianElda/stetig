<script setup lang="ts">
import { ref } from "vue";
import TimerButton from "@/components/TimerButton/TimerButton.vue";
import TimerHeader from "@/components/TimerHeader/TimerHeader.vue";
import TimerTimeLabel from "@/components/TimerTimeLabel/TimerTimeLabel.vue";
import {
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
  <div class="timer-container">
    <TimerHeader :title="TIMER_TITLE" />
    <TimerTimeLabel :time-left="timeLeft" />
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
</template>

<style lang="postcss" scoped>
.timer-container {
  @apply space-y-4;
}
.timer-button-container {
  @apply w-full;
}
</style>
