<script setup lang="ts">
import { ref } from 'vue';
import OrderList from 'primevue/orderlist';
import Panel from 'primevue/panel';

const list = ref([
  { id: 1, name: 'Vue' },
  { id: 2, name: 'TypeScript' },
  { id: 3, name: 'Vite' },
  { id: 4, name: 'PrimeVue' },
  { id: 5, name: 'Tailwind CSS' },
]);
</script>

<template>
  <Panel header="使用技術">
    <OrderList v-model="list" dataKey="id">
      <template #option="{ option }">
        {{ option.name }}
      </template>
    </OrderList>
  </Panel>
</template>
