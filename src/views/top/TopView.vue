<script setup lang="ts">
import Heading from '@/components/Heading.vue';
import Wrapper from '@/components/Wrapper.vue';
import TopCounter from '@/views/top/components/TopCounter.vue';
import TopHead from '@/views/top/components/TopHead.vue';
</script>

<template>
  <TopHead />
  <Wrapper>
    <section>
      <Heading ja="トップページ" en="top" />
      <TopCounter />
    </section>
  </Wrapper>
</template>

<style lang="scss" scoped>
section {
  padding-block: min(16.67vw, 100px);
}
</style>
