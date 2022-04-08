/**
 * @file Project start file.
 */

import { createKoaApp } from '@/server'
import { resolve } from 'path'
import { isDev } from './environment'
import { PUBLIC_PATH } from './server/helpers/config'
import { devRenderServer } from './server/render/dev'
import { prodRenderServer } from './server/render/prod'

createKoaApp().then(({ app, router }) => {
  //   static source
  app.use(
    require('koa-static')(resolve(PUBLIC_PATH), {
      index: false
    })
  )
  isDev ? devRenderServer(app, router) : prodRenderServer(app, router)
  app.listen(8777, () => {
    console.log('http://localhost:8777')
  })
})
