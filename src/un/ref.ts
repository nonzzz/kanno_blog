/**
 * server side render ref
 * client readonly.
 */

import { isClient, isSPA } from '../app/environment'
import { ref, customRef, Ref } from 'vue'
import { getSSRContext, setSSRContext } from './context'

const getRefData = (key: string) => getSSRContext('refs')[key]

const setRefData = (key: string, value: any) => {
  setSSRContext('refs', {
    ...getSSRContext('refs'),
    [key]: value
  })
}

const getValue = <T>(value: T | (() => T)): T => {
  return value instanceof Function ? value() : value
}

const isProxyable = (value: unknown): value is Record<string, unknown> => {
  return Boolean(value) && typeof value === 'object'
}

export const ssrRef = <T>(key: string, souceValue: T | (() => T)): Ref => {
  if (isSPA) {
    return ref(getValue(souceValue)) as Ref<T>
  }

  //   ssr
  let value = isClient ? getRefData(key) ?? getValue(souceValue) : getValue(souceValue)

  if (isClient) {
    return ref(value) as Ref<T>
  }
  // Server > return customRef (sync setRef)
  if (souceValue instanceof Function) {
    setRefData(key, value)
  }

  const getProxy = <T extends Record<string | number, any>>(
    track: () => void,
    trigger: () => void,
    observable: T
  ): T => {
    return new Proxy(observable, {
      get(target, prop: string) {
        track()
        if (isProxyable(target[prop])) {
          return getProxy(track, trigger, target[prop])
        }

        const value = Reflect.get(target, prop)
        return typeof value === 'function' ? value.bind(target) : value
      },
      set(object, prop, newValue) {
        const result = Reflect.set(object, prop, newValue)
        setRefData(key, value)
        trigger()
        return result
      }
    })
  }
  return customRef((track, trigger) => ({
    get: () => {
      track()
      return isProxyable(value) ? getProxy(track, trigger, value) : value
    },
    set: (v: T) => {
      setRefData(key, v)
      value = v
      trigger()
    }
  }))
}
