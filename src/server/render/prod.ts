import fs from 'fs'
import Koa from 'koa'
import path from 'path'
import KoaRouter from '@koa/router'
import { PROD_CLIENT_PATH, PROD_SERVER_PATH } from '../helpers/config'

export const prodRenderServer = async (app: Koa, router: KoaRouter) => {
  // middleware
  app.use(require('koa-compress')())

  const template = fs.readFileSync(path.resolve(PROD_CLIENT_PATH, 'index.html'), 'utf-8')

  const {} = require(path.resolve(PROD_SERVER_PATH, 'ssr.js'))

  router.get('/(.*)', async (ctx, next) => {
    try {
      const url = ctx.originalUrl
      await next()
      ctx.set({ 'Content-Type': 'text/html' })
    } catch (error) {
      //
    }
  })
}
