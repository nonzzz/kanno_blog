import Koa from 'koa'
import KoaRouter from '@koa/router'
import { devRenderServer } from './render/dev'
import { prodRenderServer } from './render/prod'
import { isDev } from '../environment'

export const createKoaApp = async () => {
  const app = new Koa()
  const router = new KoaRouter()

  isDev ? await devRenderServer(app, router) : await prodRenderServer(app, router)
  /**
   * register koa router middleware
   */
  app.use(router.routes())
  app.use(router.allowedMethods())
  return { app, router }
}
