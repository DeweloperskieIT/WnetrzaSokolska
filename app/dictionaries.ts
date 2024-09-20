import "server-only";

export type Locales = "en" | "pl";

// Directly import dictionaries
import enDict from "@/dictionaries/en.json";
import plDict from "@/dictionaries/pl.json";
import enInformacjeDict from "@/dictionaries/Informacje/en.json";
import plInformacjeDict from "@/dictionaries/Informacje/pl.json";

// Helper function to ensure valid objects
const ensureValidObject = (dict: any) =>
  dict && typeof dict === "object" ? dict : {};

// Combine dictionaries for each locale, ensuring non-empty, valid objects
const dictionaries: Record<Locales, any> = {
  en: {
    ...ensureValidObject(enDict),
    ...ensureValidObject(enInformacjeDict),
  },
  pl: {
    ...ensureValidObject(plDict),
    ...ensureValidObject(plInformacjeDict),
  },
};

export const getDictionary = (locale: Locales) => {
  const dictionary = dictionaries[locale];
  if (!dictionary) {
    console.error(`Dictionary not found for locale: ${locale}`);
    return {}; // Return an empty object or handle as needed
  }
  return dictionary;
};
