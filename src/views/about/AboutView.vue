<script setup lang="ts">
import Heading from '@/components/Heading.vue';
import MetaData from '@/components/MetaData.vue';
import Wrapper from '@/components/Wrapper.vue';
import { SITE_NAME, SITE_URL } from '@/utils/siteSetting';
import AboutCards from '@/views/about/components/AboutCards.vue';

const pageTitle = 'About';
const pageDescription = 'Vueでちょっとコード書くときのテンプレートの下層ページ';
const pageDirectory = 'about';
</script>

<template>
  <MetaData
    :title="`${pageTitle} | ${SITE_NAME}`"
    :description="pageDescription"
    :url="`${SITE_URL}/${pageDirectory}/`"
  />
  <Wrapper>
    <section>
      <Heading ja="私たちについて" en="about" />
      <AboutCards />
    </section>
  </Wrapper>
</template>

<style lang="scss" scoped>
section {
  padding-block: min(16.67vw, 100px);
}
</style>
