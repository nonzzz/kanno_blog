/**
 * @file Project start file.
 */

import { createKoaApp } from '@/server'
import { isDev } from './environment'
import { devRenderServer } from './server/render/dev'
import { prodRenderServer } from './server/render/prod'

createKoaApp().then(({ app, router }) => {
  isDev ? devRenderServer(app, router) : prodRenderServer(app, router)
  app.listen(8777, () => {
    console.log('http://localhost:8777')
  })
})
