<template>
  <div class="theme-icon" title="change theme" role="button">
    <Sun size="20" @click="clickHandler" v-if="theme === 'light-theme'" />
    <Moon size="20" @click="clickHandler" v-else-if="theme === 'dark-theme'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Sun, Moon } from '@fect-ui/vue-icons'
export default defineComponent({
  name: 'ThemeIcon',
  components: {
    Sun,
    Moon
  },
  props: {
    theme: String
  },
  emits: ['click'],
  setup(props, { emit }) {
    const clickHandler = (e: MouseEvent) => emit('click', e)

    return {
      clickHandler
    }
  }
})
</script>

<style scoped>
.theme-icon {
  margin-left: auto;
  height: 20px;
  width: 20px;
}
</style>
