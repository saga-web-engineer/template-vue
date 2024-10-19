<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Todo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const todos = ref<Todo[]>([]);

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1');
    if (!response.ok) throw new Error('Failed to fetch');

    const data: Todo[] = await response.json();
    todos.value = data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<template>
  <div v-if="todos.length">
    <ul class="list">
      <li v-for="todo in todos" :key="todo.id">
        <a :href="todo.url" target="_blank" rel="noopener noreferrer">
          <img class="img" :src="todo.thumbnailUrl" alt="" width="" height="" />
          <h3 class="title">{{ todo.title }}</h3>
        </a>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3em;
  margin-block-start: 2em;
}

.img {
  inline-size: 100%;
}

.title {
  font-size: inherit;
}
</style>
