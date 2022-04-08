<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
import { defineComponent } from 'vue'
import Layout from './components/layout/index.vue'

export default defineComponent({
  components: {
    Layout
  },
  setup(props) {}
})
</script>
