/**
 * @file Project start file.
 */

import { createKoaApp } from '@/server'

createKoaApp().then(({ app, router }) => {
  app.listen(8777, () => {
    console.log('http://localhost:8777')
  })
})
