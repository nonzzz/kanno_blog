<template>
  <title>{{ CONFIG.title }}</title>
  <meta name="referrer" content="strict-origin" />
  <meta name="description" :content="CONFIG.introduce" />
  <meta property="og:site_name" :content="CONFIG.title" />
  <meta property="og:description" :content="CONFIG.introduce" />
  <meta property="og:type" content="website" />
  <meta name="generator" content="kanno.blog" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="author" :content="CONFIG.author" />
  <meta property="og:title" :content="CONFIG.title" />
  <meta property="og:url" :content="CONFIG.domain" />
  <meta property="og:image" :content="getOgImage(CONFIG.domain)" />
  <meta itemProp="image" property="og:image" :content="getOgImage(CONFIG.domain)" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CONFIG } from '~/blog.config'

export default defineComponent({
  setup() {
    const getOgImage = (domain: string) => `https:${domain}/og-main.png`
    return { CONFIG, getOgImage }
  }
})
</script>
