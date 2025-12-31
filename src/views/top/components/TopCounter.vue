<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Button from 'primevue/button';
import Panel from 'primevue/panel';

import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore);
const { increment, reset } = counterStore;
</script>

<template>
  <div class="counter"></div>
  <Panel header="カウンター">
    <div>
      <p>カウント：{{ count }}</p>
      <p>↑の2倍した数値：{{ doubleCount }}</p>
    </div>
    <Button label="カウントアップ" @click="increment" size="small" />
    <Button label="リセット" @click="reset" size="small" class="ml-4" />
  </Panel>
</template>
