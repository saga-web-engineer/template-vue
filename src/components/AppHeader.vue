<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue';
import { SITE_NAME } from '@/utils/siteConfig';
import Menubar from 'primevue/menubar';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = [
  {
    label: 'Top',
    icon: 'pi pi-fw pi-home',
    command: () => router.push('/'),
  },
  {
    label: 'About',
    icon: 'pi pi-fw pi-star',
    command: () => router.push('/about'),
  },
];
</script>

<template>
  <header class="top-0 sticky">
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
