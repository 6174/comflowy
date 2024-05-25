export enum KEYS {
  appName = "appName",
  heroDescription = "heroDescription",
  month = "month",
  usage = "usage",
  yourComputerGPU = "yourComputerGPU",
  gpuCredit = "gpuCredit",
  features = "features",
  payOnlyForActiveGPUUsage = "payOnlyForActiveGPUUsage",
  noSetupInstallation = "noSetupInstallation",
  support = "support",
  communitySupport = "communitySupport",
  discordGroupsForPaidUsers = "discordGroupsForPaidUsers",
}

export type i18nKey = keyof typeof KEYS;
export type i18nLang = {
  [key in i18nKey]: string
};

export type LanguageType = "zh-CN" | "en-US";
export type LanguageTranslation = {
  'en-US': string,
  'zh-CN'?: string,
  'ja'?: string,
  'ru'?: string
}
export type i18nAllLang = {
  [key in i18nKey]: LanguageTranslation
};