<template>
  <div class="layout">
    <div class="layout__container">
      <fe-spacer />
      <themes />
      <profile />
      <client-only>
        <profile-links />
      </client-only>
      <router-view />
      <fe-spacer :y="5" />
      <concat />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Themes from '../theme-icon/index.vue'
import Concat from '../concat/index.vue'
import Profile from '../profile/index.vue'
import ProfileLinks from '../profile-links/index.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Themes,
    ProfileLinks,
    Profile,
    Concat
  },
  setup() {}
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
