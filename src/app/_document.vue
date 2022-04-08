<template>
  <title>{{ BLOGCONFIG.title }}</title>
  <meta name="referrer" content="strict-origin" />
  <meta name="description" :content="BLOGCONFIG.introduce" />
  <meta property="og:site_name" :content="BLOGCONFIG.title" />
  <meta property="og:description" :content="BLOGCONFIG.introduce" />
  <meta property="og:type" content="website" />
  <meta name="generator" content="kanno.blog" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="author" :content="BLOGCONFIG.author" />
  <meta property="og:title" :content="BLOGCONFIG.title" />
  <meta property="og:url" :content="BLOGCONFIG.domain" />
  <meta property="og:image" :content="getOgImage(BLOGCONFIG.domain)" />
  <meta itemProp="image" property="og:image" :content="getOgImage(BLOGCONFIG.domain)" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BLOGCONFIG from '../../blog.config'

export default defineComponent({
  setup() {
    const getOgImage = (domain: string) => `https:${domain}/og-main.png`
    return { BLOGCONFIG, getOgImage }
  }
})
</script>
