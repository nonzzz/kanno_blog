/**
 * App local global state
 */

import { INVALID_ERROR } from '@/constants/http-state'
import { ssrRef } from '@/un/ref'
import { CONFIG } from '~/blog.config'
import { useState } from '@fect-ui/vue-hooks'
import { readonly, inject, App, ref } from 'vue'

type RenderErrorValue = RenderError | null
export interface RenderError {
  code: number
  message: string
}

const GlobalStateSymbol = Symbol('globalState')

export type GlobalState = ReturnType<typeof createGlobalState>

export const createGlobalState = () => {
  // Render Error
  const renderError = ssrRef<RenderErrorValue>('error', () => null)
  const defaultError = { code: INVALID_ERROR }
  const setRenderError = (error: any) => {
    if (!error) {
      // clear error
      renderError.value = null
    } else if (error instanceof Error) {
      // new Error
      renderError.value = {
        code: (error as any).code ?? defaultError.code,
        message: error.message
      }
    } else if (typeof error === 'string') {
      // error message
      renderError.value = {
        ...defaultError,
        message: error
      }
    } else {
      // error object -> axios | component
      renderError.value = {
        ...error,
        code: error.status || error.status || defaultError.code
      }
    }
  }

  // hydrated

  const [isHydrated, setIsHydrate] = useState<boolean>(false)

  const globalState = {
    renderError: readonly(renderError),
    setRenderError,
    isHydrated,
    setIsHydrate,
    ...CONFIG
  }
  return {
    ...globalState,
    install(app: App) {
      app.provide(GlobalStateSymbol, globalState)
    }
  }
}

export const useGlobalState = (): GlobalState => {
  return inject(GlobalStateSymbol) as GlobalState
}
