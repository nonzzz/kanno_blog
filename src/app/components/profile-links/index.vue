<template>
  <div class="profile-links">
    <fe-tabs v-model:active="actived" hide-border hide-divider @click="tabClickHandler">
      <fe-tab class="profile-tab" v-for="item in links" :key="item.tip" :title="item.tip" :value="item.route" />
    </fe-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'ProfileLinks',
  setup() {
    const links = [
      {
        route: 'note',
        tip: 'Notes'
      },
      {
        route: 'project',
        tip: 'project'
      },
      {
        route: 'resume',
        tip: 'Resume'
      }
    ]
    const actived = ref('note')
    const route = useRouter()

    const load = ref(false)

    onMounted(() => {
      setTimeout(() => (load.value = true), 150)
    })

    const tabClickHandler = (e) => {
      route.push({ name: e.target.checkValue })
    }

    return { links, tabClickHandler, actived, load }
  }
})
</script>

<style scoped>
.profile-links a {
  color: var(--accents-5);
  padding: var(--fect-gap-quarter);
  text-transform: uppercase;
  font-size: 0.8rem;
}
.profile-links a:hover {
  color: var(--fect-link-color);
}

.profile-links a:last-of-type {
  margin-right: 0;
}

.profile-links .profile-tab {
  height: 0;
  padding-top: 0;
}
</style>
