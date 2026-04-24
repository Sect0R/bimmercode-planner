import { useI18n } from 'vue-i18n'
import type { L } from '@/types'

/** Returns a resolver that picks the correct locale string from an L object. */
export function useL() {
  const { locale } = useI18n()
  return (s: L) => (locale.value === 'en' ? s.en : s.ru)
}
