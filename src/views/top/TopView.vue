<script setup lang="ts">
import { useHead } from '@unhead/vue';

import Heading from '@/components/Heading.vue';
import Wrapper from '@/components/Wrapper.vue';
import { SITE_NAME } from '@/utils/siteSetting';
import TopCounter from '@/views/top/components/TopCounter.vue';

useHead({
  title: SITE_NAME,
  meta: [
    {
      name: 'description',
      content: 'Vueでちょっとコード書くときのテンプレート',
    },
  ],
});
</script>

<template>
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
