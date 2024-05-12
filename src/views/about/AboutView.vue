<script setup lang="ts">
import Heading from '@/components/Heading.vue';
import AboutHead from '@/views/about/components/AboutHead.vue';
</script>

<template>
  <AboutHead />
  <Wrapper>
    <section>
      <Heading ja="私たちについて" en="about" />
    </section>
  </Wrapper>
</template>

<style lang="scss" scoped>
section {
  padding-block: min(16.67vw, 100px);
}
</style>
