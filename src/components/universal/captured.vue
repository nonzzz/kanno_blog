<template>
  <div class="captured">
    <error-component v-if="error" :error="error" />
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script lang="ts">
import { useGlobalState } from '@/app/state'
import { defineComponent, onErrorCaptured } from 'vue'
import ErrorComponent from './_error.vue'

export default defineComponent({
  name: 'Captured',
  components: {
    ErrorComponent
  },
  setup() {
    const { renderError, setRenderError } = useGlobalState()

    onErrorCaptured((err) => {
      setRenderError(err)
      return false
    })
    return {
      error: renderError
    }
  }
})
</script>
