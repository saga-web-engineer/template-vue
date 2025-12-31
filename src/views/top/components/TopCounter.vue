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
  <Panel header="カウンター" :pt="{ content: { class: 'grid gap-2' } }">
    <div>
      <p>カウント：{{ count }}</p>
      <p>↑の2倍した数値：{{ doubleCount }}</p>
    </div>
    <div>
      <Button label="カウントアップ" @click="increment" size="small" />
      <Button label="リセット" @click="reset" size="small" class="ml-4" />
    </div>
  </Panel>
</template>
