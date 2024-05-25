import { useRouter } from "next/router";
import ALLLang from "./ALL_LANG";
import { LanguageType, i18nKey } from "./i18n.types";
import { useState, useEffect } from "react";
import { isWindow } from "../utils/is-window";
let currentLang = 'en-US';

export function changeLang(lang: string) {
  currentLang = lang as LanguageType;
}

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
  const router = useRouter();
  const defaultLang = isWindow ? getLang() : getLangFromPathName(router.pathname);
  currentLang = defaultLang;

  const [lang, setLang] = useState(defaultLang);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lang = getLang();
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

function getLangFromPathName(pathName: string) {
  if (pathName.indexOf('zh-CN') > -1) {
    return 'zh-CN';
  }
  return 'en-US';
}