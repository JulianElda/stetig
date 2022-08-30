<script setup lang="ts">
import { ref } from "vue";
import { formatTime } from "@/utils/functions"

// update every 1 second
const UPDATE_INTERVAL = 1000;
// 20 min starting time
const STARTING_TIME = 20 * 60 * 1000;

const timeLeft = ref<number>(STARTING_TIME);
const timerRunning = ref<boolean>(false)

let timerId: number;

const onStartTimer = function () {
  timerRunning.value = true
  timerId = setInterval(function () {
    if (timeLeft.value > 0 && timerRunning.value === true)
      timeLeft.value -= UPDATE_INTERVAL

  }, UPDATE_INTERVAL)
}

const onPauseTimer = function () {
  timerRunning.value = false
}

const onResetTimer = function () {
  timerRunning.value = false
  timeLeft.value = STARTING_TIME
  clearInterval(timerId)
}

</script>

<template>
  <h1>{{  formatTime(timeLeft)  }}</h1>
  <button @click="onStartTimer">start</button>
  <button @click="onPauseTimer">pause</button>
  <button @click="onResetTimer">reset</button>
</template>
