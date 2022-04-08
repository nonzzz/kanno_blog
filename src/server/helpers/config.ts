import path from 'path'
import { isDev } from '@/environment'

export const ROOT_PATH = process.cwd()
export const DIST_PATH = path.join(ROOT_PATH, 'dist')
export const PROD_CLIENT_PATH = path.join(DIST_PATH, 'client')
export const PROD_SERVER_PATH = path.join(DIST_PATH, 'server')

export const PUBLIC_PATH = isDev ? path.join(ROOT_PATH, 'public') : PROD_CLIENT_PATH
