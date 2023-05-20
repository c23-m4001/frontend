import React from 'react'

import { I18nProvider } from './core/i18n/I18nProvider'
import { LanguageProvider } from './core/i18n/LanguageProvider'
import { ModalProvider } from './core/Modal/ModalProvider'
import { Home } from './page/home/Home'
// import { AuthProvider } from './core/Auth/AuthProvider'

function App() {
  return (
    <React.Fragment>
      <LanguageProvider>
        <I18nProvider>
          {/* <AuthProvider> */}
            <ModalProvider>
              <div className="App">
                <div>Hello World</div>
                <Home />
              </div>
            </ModalProvider>
          {/* </AuthProvider> */}
        </I18nProvider>
      </LanguageProvider>
    </React.Fragment>
  )
}

export default App
