import { getSSRSymbleStatus } from '../un/context'

export const isSSR = typeof window !== 'undefined' && getSSRSymbleStatus()
export const isSPA = !isSSR

// vite runtime env
export const isServer = import.meta.env.SSR

export const isClient = !isServer
