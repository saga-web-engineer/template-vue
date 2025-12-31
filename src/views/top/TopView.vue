<script setup lang="ts">
import MetaData from '@/components/MetaData.vue';
import { SITE_NAME, SITE_URL } from '@/utils/siteConfig';
import TopCounter from '@/views/top/components/TopCounter.vue';

const pageDescription = 'Vueでちょっとコード書くときのテンプレート';
</script>

<template>
  <MetaData :title="SITE_NAME" :description="pageDescription" :url="SITE_URL" />

  <TopCounter />
</template>
