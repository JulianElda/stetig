<script setup lang="ts">
import { ref } from "vue";
import { formatTime } from "@/utils/functions";
import { stati, TIMER_CONFIGURATIONS } from "@/utils/consts";

const props = defineProps<{
  status: stati;
}>();

const emit = defineEmits(["stop"]);

// update every 1 second
const UPDATE_INTERVAL = 1000;

const STARTING_TIME = TIMER_CONFIGURATIONS[props.status].time;
const TITLE = TIMER_CONFIGURATIONS[props.status].title;

const timeLeft = ref<number>(STARTING_TIME);
const timerRunning = ref<boolean>(false);

let timerId: number;

const onStartTimer = function () {
  timerRunning.value = true;
  timerId = setInterval(function () {
    if (timeLeft.value > 0 && timerRunning.value === true)
      timeLeft.value -= UPDATE_INTERVAL;
  }, UPDATE_INTERVAL);
};

const onStopTimer = function () {
  timerRunning.value = false;
  timeLeft.value = STARTING_TIME;
  clearInterval(timerId);
  emit("stop");
};
</script>

<template>
  <p>{{ TITLE }}</p>
  <p>{{ formatTime(timeLeft) }}</p>

  <button @click="onStartTimer">start</button>
  <button @click="onStopTimer">stop</button>
</template>
