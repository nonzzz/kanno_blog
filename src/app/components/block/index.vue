<template>
  <div class="block">
    <slot />
    <fe-spacer />
    <fe-grid-group class="content" :gap="2">
      <fe-grid v-for="link in links" :key="link" :xs="24" :sm="8" :md="8" :lg="8" :xl="8" align-items="center">
        <fe-link class="link__box" :href="finder(link, 'url')">
          <fe-card shadow hoverable>
            <div class="image">
              <fe-img :src="finder(link, 'src')" skeleton width="100%" height="150px" />
            </div>
            <div class="summary">
              <h5>{{ link }}</h5>
              <span>{{ finder(link, 'description') }}</span>
            </div>
          </fe-card>
        </fe-link>
      </fe-grid>
    </fe-grid-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { serialize, resolver } from '../../utils'
export default defineComponent({
  name: 'Block',
  props: {
    dataSource: { type: Object, default: () => {} }
  },
  setup(props) {
    return {
      links: serialize(props.dataSource),
      finder: (prop, attr: 'src' | 'description' | 'url') => resolver(props.dataSource, prop, attr)
    }
  }
})
</script>

<style lang="css">
.link__box {
  width: 100% !important;
  height: inherit;
}

.link__box:hover {
  color: initial;
}

.image {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--fect-gap-half);
}

.summary span {
  width: 100%;
  word-break: break-all;
  display: inline-block;
  line-height: 1.5rem;
  font-size: 0.875rem;
  color: var(--accents-5);
}

@media only screen and (max-width: 767px) {
  .content {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
