<template>
  <div class="layout">
    {{ renderError }}
    <div class="layout__container">
      <fe-spacer />
      <theme-icon :theme="theme" @click="themeChange" />
      <profile />
      <slot />
      <fe-spacer :y="5" />
      <concat />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured } from 'vue'
import { useTheme } from '@fect-ui/vue'
import { createLayoutContext } from './use-layout-context'
import ThemeIcon from '../theme-icon/index.vue'
import Concat from '../concat/index.vue'
import Profile from '../profile/index.vue'
import BLOGCONFIG from '../../../../blog.config'
import { useGlobalState } from '../../state'

export default defineComponent({
  name: 'Layout',
  components: {
    ThemeIcon,
    Profile,
    Concat
  },
  setup() {
    const { theme, themeChange } = useTheme()
    createLayoutContext(BLOGCONFIG)
    const { renderError, setRenderError } = useGlobalState()

    onErrorCaptured((_error: any) => {
      setRenderError(_error)
      return false
    })

    return { theme, themeChange, renderError }
  }
})
</script>

<style lang="css">
.layout {
  --font-sans: 'LXGW WenKai', sans-serif;
  font-family: var(--font-sans);
}
</style>

<style lang="css" scoped>
.layout {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  min-height: 100vh;
}
.layout__container {
  box-sizing: border-box;

  width: 100%;
  max-width: 750px;
  position: relative;
}
@media only screen and (max-width: 767px) {
  .layout__container {
    max-width: 88vw;
  }
}
</style>
