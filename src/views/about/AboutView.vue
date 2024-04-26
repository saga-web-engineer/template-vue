<script setup lang="ts">
import { useHead } from '@unhead/vue';

import Heading from '@/components/Heading.vue';
import Wrapper from '@/components/Wrapper.vue';
import { TITLE_TEMPLATE, TITLE_TEMPLATE_PARAMS } from '@/utils/siteSetting';

useHead({
  title: 'About',
  titleTemplate: TITLE_TEMPLATE,
  templateParams: TITLE_TEMPLATE_PARAMS,
  meta: [
    {
      name: 'description',
      content: 'Aboutページ。Vueでちょっとコード書くときのテンプレート',
    },
  ],
});
</script>

<template>
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
