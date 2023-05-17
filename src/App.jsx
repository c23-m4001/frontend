import React from 'react';
import { I18nProvider } from './core/i18n/I18nProvider';
import { LanguageProvider } from './core/i18n/LanguageProvider';
import { ModalProvider } from './core/Modal/ModalProvider';
import { Home } from './page/home/Home';

function App() {
  return (
    <React.Fragment>
      <LanguageProvider>
        <I18nProvider>
          <ModalProvider>
            <div className='App'>
              <div>Hello World</div>
              <Home />
            </div>
          </ModalProvider>
        </I18nProvider>
      </LanguageProvider>
    </React.Fragment>
  );
}

export default App;
