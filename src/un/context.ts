import { isClient } from '../app/environment'

// symble
const SSR_SYMBLE_KEY = '__SSR__'

export const renderSSRSymbleScript = () => {
  return `<script>window.${SSR_SYMBLE_KEY} = true</script>`
}

export const getSSRSymbleStatus = () => Boolean((window as any)[SSR_SYMBLE_KEY])

//  context

const SSR_CONTEXT_KEY = '__INITIAL_SSR_CONTEXT__'

export const renderSSRContextScript = (data: any) => {
  return `<script>window.${SSR_CONTEXT_KEY} = ${data}</script>`
}

export const getSSRContextData = (): Partial<SSRContext> | null => {
  return (window as any)[SSR_CONTEXT_KEY] || null
}

export interface SSRContext {
  store: any
  refs: any
  url: string
  [key: string]: any
}

// ssr context

const ssrContext: Partial<SSRContext> = {}

export const setSSRContext = (key: keyof SSRContext, value: any) => {
  ssrContext[key] = value ? JSON.parse(JSON.stringify(value)) : value
}

export const getSSRContext = (key: keyof SSRContext) => {
  return isClient ? getSSRContextData()?.[key] : ssrContext[key]
}
