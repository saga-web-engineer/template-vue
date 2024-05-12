<script setup lang="ts">
import { Head } from '@unhead/vue/components';

import { SITE_NAME, SITE_URL } from '@/utils/siteSetting';

const pageDescription = 'Vueでちょっとコード書くときのテンプレート';
</script>

<template>
  <Head>
    <title>{{ SITE_NAME }}</title>
    <meta name="title" :content="SITE_NAME" />
    <meta name="description" :content="pageDescription" />
    <meta property="og:title" :content="SITE_NAME" />
    <meta property="og:url" :content="SITE_URL" />
    <meta property="og:description" :content="pageDescription" />
    <meta property="twitter:url" :content="SITE_URL" />
    <meta property="twitter:title" :content="SITE_NAME" />
    <meta property="twitter:description" :content="pageDescription" />
  </Head>
</template>
