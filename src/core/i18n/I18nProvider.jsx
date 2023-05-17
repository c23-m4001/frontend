import { IntlProvider } from 'react-intl'

import { useLanguage } from './LanguageProvider'
import enMessages from './messages/en.json'
import idMessages from './messages/id.json'

const allMessages = {
  en: enMessages,
  id: idMessages,
}

export const I18nProvider = ({ children }) => {
  let { language } = useLanguage()

  let messages = allMessages[language]

  return (
    <IntlProvider
      locale={language}
      messages={messages}
    >
      {children}
    </IntlProvider>
  )
}
