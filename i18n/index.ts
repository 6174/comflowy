import ALLLang from "./ALL_LANG";
import { LanguageType, i18nKey } from "./i18n.types";
import { useState, useEffect } from "react";

/**
 * Tool for translation
 * @param key 
 * @returns 
 */
export function t(key: i18nKey): string {
  const currentLang = getLang() as LanguageType;
  const allLang = ALLLang[key];
  if (allLang) {
    return allLang[currentLang] || allLang['en-US'] || key;
  }
  return key;
}

export function useLang() {
  const [lang, setLang] = useState('en-US');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        console.log('lang', getLang());
        setLang(getLang());
      }, 10);
    }
  }, [])
  return lang;
}

function getLang() {
  if (typeof window !== 'undefined') {
    return document.documentElement.lang || 'en-US';
  }
}


