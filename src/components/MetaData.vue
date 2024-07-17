<script setup lang="ts">
import { Head } from '@unhead/vue/components';

interface Props {
  title: string;
  description: string;
  url: string;
}

const props = defineProps<Props>();
</script>

<template>
  <Head>
    <title>{{ props.title }}</title>
    <meta name="title" :content="props.title" />
    <meta name="description" :content="props.description" />
    <meta property="og:url" :content="props.url" />
    <meta property="og:title" :content="props.title" />
    <meta property="og:description" :content="props.description" />
    <meta property="twitter:url" :content="props.url" />
    <meta property="twitter:title" :content="props.title" />
    <meta property="twitter:description" :content="props.description" />
  </Head>
</template>
