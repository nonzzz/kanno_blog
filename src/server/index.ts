import Koa from 'koa'
import KoaRouter from '@koa/router'

export const createKoaApp = async () => {
  const app = new Koa()
  const router = new KoaRouter()

  /**
   * register koa router middleware
   */
  app.use(router.routes())
  app.use(router.allowedMethods())

  return { app, router }
}
