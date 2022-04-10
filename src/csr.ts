import { createApp, createSSRApp } from 'vue'
import { createWebHistory } from 'vue-router'
import { isSSR } from './app/environment'
import { createVueApp } from './app/main'

// app instance

const { app, router, globalState } = createVueApp({
  histroyCreator: createWebHistory,
  appCreator: import.meta.env.SSR ? createSSRApp : createApp
})

router.beforeEach((_, __, next) => {
  next()
})

router.isReady().then(() => {
  app.mount('#app', isSSR).$nextTick(() => {
    globalState.setIsHydrate(true)
    
  })
})
