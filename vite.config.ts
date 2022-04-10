import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import Prism from 'prismjs'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': process.cwd()
    }
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      headEnabled: true,
      markdownItOptions: {
        highlight: (str, lang) => {
          return `<pre class='language-${lang}' tabindex='0'><code class='language-${lang}'>${Prism.highlight(
            str,
            Prism.languages.javascript,
            lang
          )}</code></pre>`
        }
      }
    })
  ]
})
