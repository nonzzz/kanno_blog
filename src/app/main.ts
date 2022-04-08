/**
 * @file Vue App main entry file
 * @author Kanno
 */

import { CreateAppFunction } from 'vue'
import { createHead } from '@vueuse/head'
import { RouterHistory } from 'vue-router'
import App from './App.vue'
import { UIRegister } from './plugins/ui'
import { createUniveralRouter } from './router'

export interface VueAppContext {
  appCreator: CreateAppFunction<Element>
  histroyCreator(base?: string): RouterHistory
}

export type VueApp = ReturnType<typeof createVueApp>

export const createVueApp = (context: VueAppContext) => {
  const app = context.appCreator(App)
  const head = createHead()
  const router = createUniveralRouter({ history: context.histroyCreator() })

  router.beforeEach((to, _, next) => {
    next()
  })

  app.use(head)
  app.use(router)
  UIRegister(app)

  return { app, head, router }
}
