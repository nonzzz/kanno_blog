<template>
  <div class="concat">
    <fe-grid-group :gap="0.5">
      <fe-grid>
        <fe-link class="link" aria-label="bio" taget="_blank" href="/"> Blog </fe-link>
      </fe-grid>
      <fe-grid>
        <fe-link class="link" :href="concatInfo.email" aria-label="email">Email</fe-link>
      </fe-grid>
      <fe-grid>
        <fe-link class="link" :href="concatInfo.github" target="_blank" aria-label="github"> Github </fe-link>
      </fe-grid>
    </fe-grid-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLayoutContext } from '../layout/use-layout-context'
export default defineComponent({
  name: 'Concat',
  setup() {
    const context = useLayoutContext()
    const concatInfo = {
      email: context.email,
      github: context.github
    }
    return { concatInfo }
  }
})
</script>

<style scoped>
.concat {
  border-top: 1px solid var(--accents-2);
  width: 100%;
  box-sizing: border-box;
  padding: var(--fect-gap-quarter);
  z-index: 1;
  margin-top: auto;
  /* position: absolute; */
  position: relative;
  bottom: var(--fect-gap);
  left: 50%;
  transform: translateX(-50%);
}

.concat .link {
  font-size: 0.75rem;
  color: var(--accents-5);
  text-transform: uppercase;
}

.concat .link:hover {
  transition: all 150ms ease;
  color: var(--fect-link-color);
  text-decoration: underline dashed;
}
</style>
