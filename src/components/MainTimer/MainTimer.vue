<script setup lang="ts">
import { ref } from "vue";
import TimerButton from "@/components/TimerButton/TimerButton.vue";
import { formatTime } from "@/utils/functions";
import { TIMER_CONFIGURATIONS, timer_stati, work_stati } from "@/utils/consts";

const props = defineProps<{
  status: work_stati;
}>();

const emit = defineEmits(["stop"]);

// update every 1 second
const UPDATE_INTERVAL = 1000;

const STARTING_TIME = TIMER_CONFIGURATIONS[props.status].time;
const TIMER_TITLE = TIMER_CONFIGURATIONS[props.status].title;

const timeLeft = ref<number>(STARTING_TIME);
const timerStatus = ref<timer_stati>(timer_stati.INITIATED);

let timerId: number;

const onStartTimer = function () {
  timerStatus.value = timer_stati.RUNNING;
  timerId = setInterval(function () {
    if (timeLeft.value > 0 && timerStatus.value === timer_stati.RUNNING)
      timeLeft.value -= UPDATE_INTERVAL;
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
</template>

<style lang="postcss" scoped>
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
