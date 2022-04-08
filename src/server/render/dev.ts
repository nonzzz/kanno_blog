import fs from 'fs'
import path from 'path'
import Koa from 'koa'
import KoaRouter from '@koa/router'
import c2k from 'koa-connect'
import { createServer } from 'vite'
import { ROOT_PATH } from '../helpers/config'
import { RenderResult } from '@/ssr'

export const devRenderServer = async (app: Koa, router: KoaRouter) => {
  const viteServer = await createServer({
    root: ROOT_PATH,
    logLevel: 'info',
    server: {
      middlewareMode: 'ssr',
      watch: {
        usePolling: true,
        interval: 100
      }
    }
  })

  //   use vite content as  middlewares
  app.use(c2k(viteServer.middlewares))

  router.get('/(.*)', async (ctx, next) => {
    let template = fs.readFileSync(path.resolve(ROOT_PATH, 'index.html'), 'utf8')

    const { renderAPPlication } = await viteServer.ssrLoadModule('/src/ssr.ts')

    try {
      const url = ctx.originalUrl
      template = await viteServer.transformIndexHtml(url, template)

      const renderResult: RenderResult = await renderAPPlication(ctx)

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
      viteServer.ssrFixStacktrace(error)
    }
  })
}
