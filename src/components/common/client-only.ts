/**
 * @file client-only
 * @description only render component in client (browser)
 */

import { useGlobalState } from '@/app/state'
import { defineComponent, h, onMounted, Transition, cloneVNode } from 'vue'

export const ClientOnly = defineComponent({
  name: 'ClientOnly',
  props: {
    placeholder: String,
    placeholderTag: {
      type: String,
      default: 'div'
    },
    transition: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  setup(props, { slots }) {
    const { isHydrated, setIsHydrate } = useGlobalState()

    onMounted(() => {
      //SSR init => mounted => render => transition
      if (!isHydrated.value) {
        const setRender = () => setIsHydrate(true)
        props.delay ? setTimeout(setRender, props.delay) : setRender()
      }
    })

    const renderResult = (result, resultKey?: string) => {
      if (!props.transition) {
        return result
      }
      if (Array.isArray(result) && result.length > 1) {
        return result
      }
      const singleResult = Array.isArray(result) ? result[0] : result
      return h(Transition, { name: 'client-only', mode: 'out-in' }, () =>
        singleResult
          ? cloneVNode(singleResult, { key: resultKey })
          : h('div', { key: 'empty', class: 'client-only-empty' })
      )
    }

    return () => {
      if (isHydrated.value) {
        return renderResult(slots.default?.(), 'result')
      }

      if (slots.placeholder) {
        return renderResult(slots.placeholder(), 'placeholder-slot')
      }

      if (props.placeholderTag && props.placeholder) {
        return renderResult(
          h(props.placeholderTag, { class: 'client-only-placeholder' }, props.placeholder),
          'placeholder'
        )
      }

      return renderResult(null)
    }
  }
})
