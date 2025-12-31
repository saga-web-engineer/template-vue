<script setup lang="ts">
import MetaData from '@/components/MetaData.vue';
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
  <section>
    <AboutCards />
  </section>
</template>
