import { getSSRSymbleStatus } from './un/context'

export enum NodeEnv {
  DEV = 'development',
  PROD = 'production'
}

export const NODE_ENV = process.env.NODE_ENV as NodeEnv
export const isDev = process.env.NODE_ENV === NodeEnv.DEV
export const isProd = process.env.NODE_ENV === NodeEnv.PROD

export const isSSR = typeof window !== 'undefined' || getSSRSymbleStatus()
export const isSPA = !isSSR

// vite runtime env
export const isServer = import.meta.env.SSR

export const isClient = !isServer
