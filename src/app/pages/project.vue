<template>
  <block :data-source="links">
    <open-source />
  </block>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import links from '../../../open-source.json'
import Block from '../components/block/index.vue'
import OpenSource from '../../../posts/open-source.md'
export default defineComponent({
  name: 'Project',
  components: {
    OpenSource,
    Block
  },
  setup() {
    return {
      links
    }
  }
})
</script>
