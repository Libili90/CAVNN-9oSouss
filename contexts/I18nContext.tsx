import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { translations, TranslationKey } from '../i18n/translations';

type Language = 'en' | 'fr' | 'ar' | 'ma';

interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj) || path;
};

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useLocalStorage<Language>('language', 'en');

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    if (language === 'ar' || language === 'ma') {
      root.dir = 'rtl';
    } else {
      root.dir = 'ltr';
    }
  }, [language]);

  const t = useCallback((key: TranslationKey): string => {
    const translationSet = translations[language] || translations.en;
    return getNestedValue(translationSet, key);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
