import { createApp, createSSRApp } from 'vue'
import { createWebHistory } from 'vue-router'
import { createVueApp } from './app/main'

// app instance

const { app, router } = createVueApp({
  histroyCreator: createWebHistory,
  appCreator: import.meta.env.SSR ? createSSRApp : createApp
})

router.beforeEach((_, __, next) => {
  next()
})

router.isReady().then(() => {
  app.mount('#app')
})
