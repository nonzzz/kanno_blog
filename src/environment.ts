export enum NodeEnv {
  DEV = 'development',
  PROD = 'production'
}

export const NODE_ENV = process.env.NODE_ENV as NodeEnv
export const isDev = process.env.NODE_ENV === NodeEnv.DEV
export const isProd = process.env.NODE_ENV === NodeEnv.PROD
