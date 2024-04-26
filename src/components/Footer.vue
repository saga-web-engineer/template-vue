<script setup lang="ts">
import Wrapper from '@/components/Wrapper.vue';
</script>

<template>
  <footer class="footer">
    <Wrapper>
      <p><small>Copyright</small></p>
    </Wrapper>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  align-items: center;
  height: 80px;
  text-align: center;
  border-block-start: solid 1px var(--gray-color-primary);
}
</style>
