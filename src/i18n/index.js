import { createI18n } from 'vue-i18n'

// Auto-load every locale file: src/i18n/locales/<locale>/<namespace>.json
// A page just drops its own `en/<page>.json` + `de/<page>.json` — no wiring needed.
const modules = import.meta.glob('./locales/**/*.json', { eager: true })

const messages = {}
for (const path in modules) {
  const match = path.match(/\.\/locales\/([^/]+)\/(.+)\.json$/)
  if (!match) continue
  const [, locale, namespace] = match
  messages[locale] = messages[locale] || {}
  messages[locale][namespace] = modules[path].default || modules[path]
}

export const SUPPORTED_LOCALES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
]
const supportedCodes = SUPPORTED_LOCALES.map((l) => l.code)
const STORAGE_KEY = 'locale'

function detectLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && supportedCodes.includes(saved)) return saved
  } catch {
    /* ignore */
  }
  const nav = (navigator.language || 'en').slice(0, 2).toLowerCase()
  return supportedCodes.includes(nav) ? nav : 'en'
}

const initialLocale = detectLocale()
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('lang', initialLocale)
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: initialLocale,
  fallbackLocale: 'en',
  messages,
})

export function setLocale(code) {
  if (!supportedCodes.includes(code)) return
  i18n.global.locale.value = code
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {
    /* ignore */
  }
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', code)
  }
}

export default i18n
