import ALLLang from "./ALL_LANG";
import { LanguageType, i18nKey } from "./i18n.types";
import { useState, useEffect } from "react";

let currentLang = 'en-US';

/**
 * Tool for translation
 * @param key 
 * @returns 
 */
export function t(key: i18nKey): string {
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
      const lang = getLang();
      console.log('lang', getLang());
      currentLang = lang;
      setLang(getLang());
    }
  }, [])
  return lang;
}

function getLang() {
  if (typeof window !== 'undefined') {
    return document.documentElement.lang || 'en-US';
  }
}


