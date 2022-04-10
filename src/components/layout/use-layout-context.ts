import { provide, inject } from 'vue'
import { LayoutContext } from './interface'
export const LAYOUT_KEY = Symbol('layoutKey')

export const createLayoutContext = (val) => provide(LAYOUT_KEY, val)

export const useLayoutContext = () => inject<LayoutContext>(LAYOUT_KEY)
