import { Config } from "next-i18n-router/dist/types";

const i18nConfig: Config = {
  locales: ["pl", "en"],
  defaultLocale: "pl",
  localeCookie: "NEXT_LOCALE",
  serverSetCookie: "if-empty",
};

export default i18nConfig;
