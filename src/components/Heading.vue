<script setup lang="ts">
interface Props {
  ja: string;
  en: string;
}

const props = defineProps<Props>();
</script>

<template>
  <h2 class="heading" :data-english="props.en">{{ props.ja }}</h2>
</template>

<style lang="scss" scoped>
@use '@/styles/tool/' as *;

.heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: clamp(rem(24px), 3.83vw, rem(42px));

  &::before {
    font-size: 0.5em;
    font-style: italic;
    color: var(--green-color-primary);
    text-transform: uppercase;
    content: attr(data-english);
  }
}
</style>
