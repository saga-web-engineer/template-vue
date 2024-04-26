<script setup lang="ts">
import { computed } from 'vue';

import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
const count = computed(() => counterStore.count);
const doubleCount = computed(() => counterStore.doubleCount);
const increment = () => counterStore.increment();
const reset = () => counterStore.reset();
</script>

<template>
  <div class="counter">
    <div>
      <p>カウント：{{ count }}</p>
      <p>↑の2倍した数値：{{ doubleCount }}</p>
    </div>
    <button class="button" type="button" @click="increment">
      カウントアップ
    </button>
    <button class="button" type="button" @click="reset">リセット</button>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/tool/' as *;

.counter {
  display: grid;
  gap: 1em;
  width: fit-content;
  margin: 2em auto;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em 1em;
  color: var(--white-color-primary);
  background-color: var(--green-color-primary);
  border-radius: 4px;
  transition: opacity var(--duration-primary) var(--easing-hover);

  @include hover {
    opacity: 0.6;
  }
}
</style>
