import fs from 'fs'
import Koa from 'koa'
import path from 'path'
import KoaRouter from '@koa/router'
import { PROD_CLIENT_PATH, PROD_SERVER_PATH, PUBLIC_PATH } from '../helpers/config'
import { RenderResult } from '@/ssr'

export const prodRenderServer = async (app: Koa, router: KoaRouter) => {
  // middleware

  app.use(
    require('koa-static')(path.resolve(PUBLIC_PATH), {
      index: false
    })
  )
  app.use(require('koa-compress')())

  const template = fs.readFileSync(path.resolve(PROD_CLIENT_PATH, 'index.html'), 'utf-8')

  const { renderAPPlication } = require(path.resolve(PROD_SERVER_PATH, 'ssr.js'))

  const manifest = require(path.resolve(PROD_CLIENT_PATH, 'ssr-manifest.json'))

  router.get('/(.*)', async (ctx, next) => {
    try {
      const renderResult: RenderResult = await renderAPPlication(ctx, manifest)
      const html = template
        .replace('<!--document-title-->', renderResult.head)
        // .replace('<!-- _document -->', _document)
        .replace(`<!--preload-links-->`, renderResult.preloadLinks)
        .replace(`<!--app-html-->`, renderResult.html)
      await next()
      ctx.set({ 'Content-Type': 'text/html' })
      ctx.state = renderResult.code
      ctx.body = html
    } catch (error) {
      //
    }
  })
}
