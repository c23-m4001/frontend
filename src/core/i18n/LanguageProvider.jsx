import { createContext, useContext, useState } from 'react';

const I18N_CONFIG_KEY = process.env.REACT_APP_I18N_CONFIG_KEY || 'i18n-cfg';

const getCachedLanguage = () => {
  const ls = localStorage.getItem(I18N_CONFIG_KEY);
  return ls;
};

const setCachedLanguage = (language, isReload = false) => {
  localStorage.setItem(I18N_CONFIG_KEY, JSON.stringify({ language }));
  if (isReload) {
    window.location.reload();
  }
};

const initialLanguageState = {
  language: 'id',
  setLanguage: () => {},
};

const LanguageContext = createContext(initialLanguageState);

export const LanguageProvider = ({children}) => {
  const defaultLanguage = "id";
  const searchParams = new URLSearchParams(window.location.search);
  const [lang, setLang] = useState(
    searchParams.get('lang') || getCachedLanguage() || defaultLanguage
  );

  const setLanguage = (nextLang) => {
    setLang(nextLang);
    setCachedLanguage(nextLang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language: lang,
        setLanguage,
      }}>
        {children}
      </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

