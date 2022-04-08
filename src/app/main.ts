/**
 * @file Vue App main entry file
 * @author Kanno
 */

import { CreateAppFunction } from 'vue'
import { RouterHistory } from 'vue-router'
import App from './App.vue'

export interface VueAppContext {
  appCreator: CreateAppFunction<Element>
  histroyCreator(base?: string): RouterHistory
}

export const createVueApp = (context: VueAppContext) => {
  const app = context.appCreator(App)
}
