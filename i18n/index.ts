import ALLLang from "./ALL_LANG";
import { LanguageType, i18nKey } from "./i18n.types";

/**
 * Tool for translation
 * @param key 
 * @returns 
 */
export function t(key: i18nKey): string {
  const currentLang = document.documentElement.lang || 'en-US';
  const allLang = ALLLang[key];
  if (allLang) {
    return allLang[currentLang] || allLang['en-US'] || key;
  }
  return key;
}
