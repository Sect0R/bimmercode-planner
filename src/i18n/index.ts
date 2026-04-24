import { createI18n } from 'vue-i18n'
import ru from './locales/ru'
import en from './locales/en'

export type Locale = 'ru' | 'en'

const saved = localStorage.getItem('bcp_locale') as Locale | null

// Detect browser language on first visit; fall back to Russian
function detectLocale(): Locale {
  const lang = navigator.language.toLowerCase()
  return lang.startsWith('en') ? 'en' : 'ru'
}

export const i18n = createI18n({
  legacy: false,
  locale: saved ?? detectLocale(),
  fallbackLocale: 'ru',
  messages: { ru, en },
})

export function setLocale(locale: Locale) {
  i18n.global.locale.value = locale
  localStorage.setItem('bcp_locale', locale)
}
