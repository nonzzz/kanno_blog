<template>
  <div class="posts">
    <posts-title :title="meta.title" :date="meta.date" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useState } from '@fect-ui/vue-hooks'
import { useRoute } from 'vue-router'
import PostsTitle from '../components/posts-title/index.vue'

interface Meta {
  date?: string
  title?: string
}

export default defineComponent({
  name: 'Posts',
  components: {
    PostsTitle
  },
  setup() {
    const route = useRoute()

    const [meta, setMeta] = useState<Meta>({})

    onMounted(() => {
      const { date, title } = route.meta as any
      setMeta({ date, title })
    })

    return { meta }
  }
})
</script>
