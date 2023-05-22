import React from 'react'
import axios from 'axios'

import { WebRoutes } from './core/Routes/WebRoutes'
import { I18nProvider } from './core/i18n/I18nProvider'
import { LanguageProvider } from './core/i18n/LanguageProvider'
import { ModalProvider } from './core/Modal/ModalProvider'
import { AuthProvider } from './core/Auth/AuthProvider'
import { setupAxiosInterceptor } from './core/axios/Axios'
import { QueryClient, QueryClientProvider } from 'react-query'

setupAxiosInterceptor(axios)

const queryClient = new QueryClient()

function App() {
  return (
    <React.Fragment>
      <LanguageProvider>
        <I18nProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <ModalProvider>
                <WebRoutes />
              </ModalProvider>
            </AuthProvider>
          </QueryClientProvider>
        </I18nProvider>
      </LanguageProvider>
    </React.Fragment>
  )
}

export default App
