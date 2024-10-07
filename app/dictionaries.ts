import "server-only";

export type Locales = "en" | "pl" | "ua";

// Directly import dictionaries
import enDict from "@/dictionaries/en.json";
import plDict from "@/dictionaries/pl.json";
import uaDict from "@/dictionaries/ua.json";

const dictionaries: Record<Locales, any> = {
  en: enDict,
  pl: plDict,
  ua: uaDict,
};

export const getDictionary = (locale: Locales) => {
  const dictionary = dictionaries[locale];
  if (!dictionary) {
    console.error(`Dictionary not found for locale: ${locale}`);
    return {}; // Return an empty object or handle as needed
  }
  return dictionary;
};
