<template>
  <div v-cloak class="application"></div>
  <captured>
    <layout />
  </captured>
</template>

<script>
import { defineComponent } from 'vue'
import Layout from '@/components/client/index.vue'
import Captured from '@/components/universal/captured.vue'

export default defineComponent({
  components: {
    Layout,
    Captured
  },
  setup(props) {}
})
</script>

<style lang="css">
.application[v-cloak] {
  color: transparent;
  -webkit-text-fill-color: transparent;
}
</style>
