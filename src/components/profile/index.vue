<template>
  <fe-grid class="profile">
    <fe-link class="user" to="/">
      <fe-user :name="author" :src="avatar" :alt-text="author">
        <span class="summary">
          {{ introduce }}
        </span>
      </fe-user>
    </fe-link>
  </fe-grid>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useGlobalState } from '@/app/state'
export default defineComponent({
  setup() {
    const { author, avatar, introduce } = useGlobalState()

    return { author, avatar, introduce }
  }
})
</script>

<style scoped>
.profile {
  padding: var(--fect-gap-half) 0;
}

.profile .user .summary {
  line-height: 1.5rem;
  font-size: 0.75rem;
  color: var(--accents-5);
}

@media only screen and (max-width: 650px) {
  .profile {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
  }
}
</style>
