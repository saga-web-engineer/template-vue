<script setup lang="ts">
import Button from 'primevue/button';
import { ref } from 'vue';

const isDark = ref(document.documentElement.classList.contains('my-app-dark'));

function toggleDarkMode() {
  document.documentElement.classList.toggle('my-app-dark');
  isDark.value = !isDark.value;
}
</script>

<template>
  <Button
    :icon="isDark ? 'pi pi-moon' : 'pi pi-sun'"
    @click="toggleDarkMode()"
    size="small"
    outlined
  />
</template>
