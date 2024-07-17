<script setup lang="ts">
import Heading from '@/components/Heading.vue';
import MetaData from '@/components/MetaData.vue';
import Wrapper from '@/components/Wrapper.vue';
import { SITE_NAME, SITE_URL } from '@/utils/siteSetting';
import TopCounter from '@/views/top/components/TopCounter.vue';

const pageDescription = 'Vueでちょっとコード書くときのテンプレート';
</script>

<template>
  <MetaData :title="SITE_NAME" :description="pageDescription" :url="SITE_URL" />
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
