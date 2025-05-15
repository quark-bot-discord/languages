import type { LanguageStructure, QuarkLanguageCodes } from "./languages.d.ts";

export type DiscordLocaleKeys = keyof typeof locales;

export interface Locale {
  code: string;
  id: number;
  name: string;
  active: boolean;
  emoji: string;
}

export type Languages = {
  [key: localeOptions]: Locale;
};

import _locales from "./bot/languages.json" with { type: "json" };

export type localeOptions = typeof validLanguages[number];

export const locales: Languages = _locales;

export const validLanguages: Array<string> = Object.values(locales)
  .map((locale) => (locale.active === true ? locale.code : null))
  .filter((locale) => locale !== null);

export const getDiscordLocaleCode = (language: string): DiscordLocaleKeys => {
  if (typeof language === "string") {
    for (const [key, value] of Object.entries(locales))
      if (value.code === language) return key as DiscordLocaleKeys;
  } else if (typeof language === "number") {
    for (const [key, value] of Object.entries(locales))
      if (value.id === language) return key as DiscordLocaleKeys;
  }
  throw new Error(`Language ${language} not found`);
};

export const checkIsQuarkLocaleCode = (language: string): language is QuarkLanguageCodes => {
  return Object.values(locales).some((locale) => locale.code === language);
};

export const getQuarkLocaleCode = (language: DiscordLocaleKeys): QuarkLanguageCodes => {
  const toReturn = locales[language]?.code;
  if (!toReturn) throw new Error(`Language ${language} not found`);
  if (!checkIsQuarkLocaleCode(toReturn))
    throw new Error(`Language ${toReturn} not found`);
  return toReturn;
};

export const getDatabaseLocaleCode = (language: DiscordLocaleKeys): number => {
  const toReturn = locales[language]?.id;
  if (typeof toReturn !== "number")
    throw new Error(`Language ${language} not found`);
  return toReturn;
};

export const getLocaleFromDatabaseCode = (databaseCode: number): DiscordLocaleKeys => {
  for (const [key, value] of Object.entries(locales))
    if (value.id === databaseCode) return key;
  throw new Error(`Language ${databaseCode} not found`);
};

const readObject = (obj: { [key: string]: any }, cursor = "") => {
  if (!obj) return undefined;
  const cursorPath = cursor.split(".");
  for (let i = 0; i < cursorPath.length; i++)
    if (cursorPath[i] && Object.keys(obj).includes(cursorPath[i])) {
      if (typeof obj[cursorPath[i]] !== "object") return obj[cursorPath[i]];
      else obj = (obj as { [key: string]: object })[cursorPath[i]];
    }
  return obj;
};

const returnNextProperty = (
  languagesStringsToUse: object,
  fallbackLanguagesStrings: object,
  cursor = ""
) => {
  return new Proxy(
    {},
    {
      ownKeys(target) {
        return [
          ...new Set([
            ...(readObject(languagesStringsToUse, cursor)
              ? Object.keys(readObject(languagesStringsToUse, cursor) || {})
              : []),
            ...(readObject(fallbackLanguagesStrings, cursor)
              ? Object.keys(readObject(fallbackLanguagesStrings, cursor) || {})
              : []),
          ]),
        ];
      },
      get(target, prop1) {
        if (prop1 === "then")
          return returnNextProperty(
            languagesStringsToUse,
            fallbackLanguagesStrings
          );
        const currentCursor = cursor
          ? `${cursor}.${String(prop1)}`
          : String(prop1);
        const toReturn = readObject(languagesStringsToUse, currentCursor)
          ? readObject(languagesStringsToUse, currentCursor)
          : readObject(fallbackLanguagesStrings, currentCursor);
        switch (typeof toReturn) {
          case "string":
            return toReturn;
          case "object":
            return returnNextProperty(
              languagesStringsToUse,
              fallbackLanguagesStrings,
              currentCursor
            );
          default:
            return toReturn;
        }
      },
      getOwnPropertyDescriptor(target, prop) {
        return {
          enumerable: true,
          configurable: true,
        };
      },
    }
  );
};

const languageTypeProxy = (
  language: string,
  type: string,
  noFallback: boolean
) => {
  return new Proxy(
    {},
    {
      async get(target, prop) {
        const selectedLanguagesStrings = await import(
          `./bot/${language}/${type}/${String(prop)}.json`,
          { with: { type: "json" } }
        ).catch(() => null);
        const fallbackLanguagesStrings = !noFallback
          ? await import(`./bot/en_us/${type}/${String(prop)}.json`, {
              with: { type: "json" },
            })
          : null;
        const languagesStringsToUse = selectedLanguagesStrings?.default
          ? selectedLanguagesStrings.default
          : fallbackLanguagesStrings?.default;
        return returnNextProperty(
          languagesStringsToUse,
          fallbackLanguagesStrings?.default
        );
      },
    }
  );
};

export default function languageProxy(
  language: string,
  noFallback: boolean = false
): LanguageStructure {
  return new Proxy(
    {},
    {
      get(target, prop) {
        if (validLanguages.includes(language)) {
          return languageTypeProxy(language, String(prop), noFallback);
        } else if (!noFallback) {
          // default to en_us
          return languageTypeProxy("en_us", String(prop), noFallback);
        } else {
          throw new Error(`Language ${language} not found`);
        }
      },
    }
  ) as LanguageStructure;
}

export function displayLanguage(language: QuarkLanguageCodes) {
  const locale = Object.values(locales).find(
    (locale) => locale.code === language
  );
  if (!locale) throw new Error(`Language ${language} not found`);
  return `${locale.emoji} ${locale.name}`;
}