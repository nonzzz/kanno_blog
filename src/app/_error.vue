<template>
  <div class="not-found">
    <div class="social">
      <span class="sub">404</span>
      <span class="tip">This page could not be found.</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {}
})
</script>

<style scoped>
.not-found {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.not-found > .social {
  display: flex;
  height: 40px;
  align-items: center;
}

.not-found > .social span {
  display: block;
  height: 100%;
  line-height: 40px;
}

.not-found > .social .sub {
  font-weight: 700;
  font-size: 25px;
  height: 100%;
  margin-right: var(--fect-gap-half);
}
.not-found > .social .tip {
  box-sizing: border-box;
  padding-left: var(--fect-gap-half);
  border-left: 1px solid var(--primary-foreground);
}
</style>
