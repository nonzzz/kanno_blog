<template>
  <div class="posts-title">
    <h2>{{ title }}</h2>
    <div class="date-box">
      <p>
        <span>{{ new Date(date).toLocaleString('zh-cn') }}</span>
        <span class="septor"> > </span>
        <span>{{ beforeTransfer(date) }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { timeConver } from '../../utils'
export default defineComponent({
  props: {
    title: String,
    date: String
  },
  setup() {
    const beforeTransfer = (time: string) => {
      return timeConver(time)
    }
    return {
      beforeTransfer
    }
  }
})
</script>

<style lang="css" scoped>
.posts-title > h1 {
  font-size: 2rem;
}

.posts-title .date-box p {
  font-size: 0.9rem;
}
.posts-title .date-box p span {
  padding: 0 0.2rem;
  height: 100%;
}

.posts-title .septor {
  font-weight: bold;
  color: var(--success-light);
}
</style>
