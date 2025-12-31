<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue';
import { SITE_NAME } from '@/utils/siteSetting';
import Menubar from 'primevue/menubar';

const items = [
  {
    label: 'Top',
    icon: 'pi pi-fw pi-home',
    to: '/',
  },
  {
    label: 'About',
    icon: 'pi pi-fw pi-star',
    to: '/about',
  },
];
</script>

<template>
  <header class="header">
    <Menubar :model="items">
      <template #start>
        <h1>{{ SITE_NAME }}</h1>
      </template>
      <template #end>
        <ThemeToggle />
      </template>
    </Menubar>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
}
</style>
