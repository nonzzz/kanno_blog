<template>
  <fe-grid class="profile">
    <fe-link class="user" to="/">
      <fe-user :name="userInfo.author" :src="userInfo.avatar" :alt-text="userInfo.author">
        <span class="summary">
          {{ userInfo.introduce }}
        </span>
      </fe-user>
    </fe-link>
  </fe-grid>
  <profile-links />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfileLinks from '../profile-links/index.vue'
import { useLayoutContext } from '../layout/use-layout-context'
export default defineComponent({
  components: {
    ProfileLinks
  },
  setup() {
    const context = useLayoutContext()
    const userInfo = {
      avatar: context.avatar,
      author: context.author,
      introduce: context.introduce
    }
    return {
      userInfo
    }
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
