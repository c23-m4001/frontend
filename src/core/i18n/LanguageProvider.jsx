import { createContext, useContext, useEffect, useState } from 'react'

const I18N_CONFIG_KEY = process.env.REACT_APP_I18N_CONFIG_KEY || 'i18n-cfg'

const getCachedLanguage = () => {
  const ls = localStorage.getItem(I18N_CONFIG_KEY)
  return ls
}

const setCachedLanguage = (language, isReload = false) => {
  localStorage.setItem(I18N_CONFIG_KEY, JSON.stringify({ language }))
  if (isReload) {
    window.location.reload()
  }
}

const availableLanguages = new Set(['en', 'id'])
const defaultLanguage = 'id'

const initialLanguageState = {
  language: 'id',
  setLanguage: () => {},
}

const LanguageContext = createContext(initialLanguageState)

export const LanguageProvider = ({ children }) => {
  const searchParams = new URLSearchParams(window.location.search)

  let currentLanguage = searchParams.get('lang') || getCachedLanguage()?.language
  if (!availableLanguages.has(currentLanguage)) {
    currentLanguage = defaultLanguage
  }

  const [lang, setLang] = useState(currentLanguage)

  const setLanguage = (nextLang) => {
    setLang(nextLang)
    setCachedLanguage(nextLang)
  }

  useEffect(() => {
    setCachedLanguage(lang)
    // eslint-disable-next-line
  }, [])

  return (
    <LanguageContext.Provider
      value={{
        language: lang,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
