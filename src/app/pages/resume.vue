<template>
  <block :data-source="links">
    <AboutMe />
    <fe-dot type="success">以下是我的友站链接,排名不分先后</fe-dot>
  </block>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AboutMe from '../../../posts/about.md'
import links from '../../../link.json'
import Block from '../components/block/index.vue'
export default defineComponent({
  name: 'Resume',
  components: {
    AboutMe,
    Block
  },
  setup() {
    return {
      links
    }
  }
})
</script>
