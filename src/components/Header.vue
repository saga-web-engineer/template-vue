<script setup lang="ts">
import Nav from '@/components/Nav.vue';
import Wrapper from '@/components/Wrapper.vue';
</script>

<template>
  <header class="header">
    <Wrapper>
      <div class="inner">
        <h1 class="title">
          <img alt="Vue logo" src="@/assets/img/logo.svg" width="60" height="52" />Vue Template
        </h1>
        <Nav />
      </div>
    </Wrapper>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 80px;
  border-block-end: solid 1px var(--gray-color-primary);
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  display: flex;
  gap: 0.5em;
  align-items: center;
}
</style>
