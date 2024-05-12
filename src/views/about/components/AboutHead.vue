<script setup lang="ts">
import { Head } from '@unhead/vue/components';

import { SITE_NAME, SITE_URL } from '@/utils/siteSetting';

const pageTitle = 'About';
const pageDescription = 'Vueでちょっとコード書くときのテンプレートの下層ページ';
const pageDirectory = 'about';
</script>

<template>
  <Head>
    <title>{{ `${pageTitle} | ${SITE_NAME}` }}</title>
    <meta name="title" :content="`${pageTitle} | ${SITE_NAME}`" />
    <meta name="description" :content="pageDescription" />
    <meta property="og:title" :content="`${pageTitle} | ${SITE_NAME}`" />
    <meta property="og:url" :content="`${SITE_URL}/${pageDirectory}/`" />
    <meta property="og:description" :content="pageDescription" />
    <meta property="twitter:url" :content="`${SITE_URL}/${pageDirectory}/`" />
    <meta property="twitter:title" :content="`${pageTitle} | ${SITE_NAME}`" />
    <meta property="twitter:description" :content="pageDescription" />
  </Head>
</template>
