<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
</script>

<template>
  <div class="p-4">
    <AppHeader />
    <main>
      <slot />
    </main>
  </div>
</template>
