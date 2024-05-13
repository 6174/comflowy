export enum KEYS {
  appName = "appName",
}

export type i18nKey = keyof typeof KEYS;
export type i18nLang = {
  [key in i18nKey]: string
};

export type LanguageType = "zh-CN" | "en-US";
export type LanguageTranslation = {
  'en-US': string,
  'zh-CN'?: string,
}
export type i18nAllLang = {
  [key in i18nKey]: LanguageTranslation
};