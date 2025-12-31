<script setup lang="ts">
import { Head } from '@unhead/vue/components';

interface Props {
  title: string;
  description: string;
  url: string;
}

defineProps<Props>();
</script>

<template>
  <Head>
    <title>{{ title }}</title>
    <meta name="title" :content="title" />
    <meta name="description" :content="description" />
    <meta property="og:url" :content="url" />
    <meta property="og:title" :content="title" />
    <meta property="og:description" :content="description" />
    <meta property="twitter:url" :content="url" />
    <meta property="twitter:title" :content="title" />
    <meta property="twitter:description" :content="description" />
  </Head>
</template>
