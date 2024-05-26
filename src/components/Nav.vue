<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface NavList {
  title: string;
  view: string;
}

const navList: NavList[] = [
  {
    title: 'top',
    view: 'top',
  },
  {
    title: 'about',
    view: 'about',
  },
];
</script>

<template>
  <nav>
    <ul class="list">
      <li v-for="item in navList" :key="item.title">
        <RouterLink :to="{ name: item.view }" class="link">
          {{ item.title }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use '@/styles/tool/' as *;

.list {
  display: flex;
  gap: 2em;
  align-items: center;
  text-transform: uppercase;
}

.link {
  transition: opacity var(--duration-primary) var(--easing-hover);

  &[aria-current='page'] {
    color: var(--green-color-primary);
  }

  @include hover {
    opacity: 0.6;
  }
}
</style>
