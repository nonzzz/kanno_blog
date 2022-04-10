<template>
  <div class="notes">
    <h2>Recent</h2>
    <ul class="notes__container">
      <li v-for="note in noteList" :key="note.name">
        <h5>
          <fe-link underline :to="{ name: note.name }">
            {{ note.meta.title }}
          </fe-link>
        </h5>
        <span class="date-stamp">{{ dateTransfer(note.meta.date) }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { notes } from '@/app/router'
import { dateString } from '../utils'

export default defineComponent({
  name: 'Notes',

  setup() {
    const noteList = computed(() => notes.sort((pre, next) => +new Date(next.meta.date) - +new Date(pre.meta.date)))
    const dateTransfer = (stamp: string) => dateString(stamp)
    return {
      noteList,
      dateTransfer
    }
  }
})
</script>

<style scoped>
.notes h2 {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: inline-block;
  margin: 0;
  color: var(--accents-6);
  padding: 2 var(--fect-gap-quarter) 0 0;
  border-bottom: 2px solid var(--accents-5);
}

ul {
  margin: 0;
  padding: 0;
}
ul li::before {
  content: none;
}
ul li:first-child {
  margin-top: 1.4rem;
}
ul li .date-stamp {
  font-size: 0.75rem;
  display: block;
  margin-top: -0.5rem;
  line-height: 1.5rem;
  color: var(--accents-3);
}
</style>
