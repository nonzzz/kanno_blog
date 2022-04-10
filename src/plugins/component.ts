import { App } from 'vue'
import { ClientOnly } from '@/components/common/client-only'

export default function (instance: App) {
  instance.component(ClientOnly.name, ClientOnly)
  return instance
}
