import { createSSRApp } from 'vue'
import { createMemoryHistory } from 'vue-router'
import { renderToString } from '@vue/server-renderer'
import type { ExtendableContext } from 'koa'
import { createVueApp, VueApp } from './app/main'
import { renderHeadToString } from '@vueuse/head'
import { SUCCESS_CODE } from './constants/http-state'
import { renderPreloadLinks } from './un/scripts'

export interface RenderResult {
  code: number
  html: string
  head: string
  preloadLinks: string
}

// create vue App instance

const createVueAppInstance = () => {
  const app = createVueApp({
    appCreator: createSSRApp,
    histroyCreator: createMemoryHistory
  })
  return app
}

const renderScripts = (data: any, manifest) => {
  return renderPreloadLinks(data, manifest)
}

const renderHTML = async (vueApp: VueApp, url: string, manifest: Record<string, any>) => {
  const { app, router, head: _head } = vueApp
  await router.push(url)
  await router.isReady()

  const ssrContext = {} as any
  const html = await renderToString(app, ssrContext)
  const { headTags: head } = renderHeadToString(_head)
  const preloadLinks = renderScripts(ssrContext.modules, manifest)

  return { html, head, preloadLinks }
}

// render application

export const renderAPPlication = async (ctx: ExtendableContext, manifest = {}) => {
  const app = createVueAppInstance()
  const url = ctx.originalUrl
  try {
    const rendered = await renderHTML(app, url, manifest)
    return {
      code: SUCCESS_CODE,
      ...rendered
    }
  } catch (error) {
    return { code: error.code }
  }
}
