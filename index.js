export const locales = (
  await import("./bot/languages.json", { with: { type: "json" } })
).default;

export const validLanguages = Object.values(locales)
  .map((locale) => (locale.active === true ? locale.code : null))
  .filter((locale) => locale !== null);

export const getDiscordLocaleCode = (language) => {
  if (typeof language === "string") {
    for (const [key, value] of Object.entries(locales))
      if (value.code === language) return key;
  } else if (typeof language === "number") {
    for (const [key, value] of Object.entries(locales))
      if (value.id === language) return key;
  }
  throw new Error(`Language ${language} not found`);
};

export const getQuarkLocaleCode = (language) => {
  const toReturn = locales[language]?.code;
  if (!toReturn) throw new Error(`Language ${language} not found`);
  return toReturn;
};

export const getDatabaseLocaleCode = (language) => {
  const toReturn = locales[language]?.id;
  if (typeof toReturn !== "number") throw new Error(`Language ${language} not found`);
  return toReturn;
};

const readObject = (obj, cursor = "") => {
  if (!obj) return undefined;
  const cursorPath = cursor.split(".");
  for (let i = 0; i < cursorPath.length; i++)
    if (cursorPath[i] && Object.keys(obj).includes(cursorPath[i]))
      obj = obj[cursorPath[i]];
  return obj;
};

const returnNextProperty = (
  languagesStringsToUse,
  fallbackLanguagesStrings,
  cursor = ""
) => {
  return new Proxy(
    {},
    {
      ownKeys(target) {
        return [
          ...new Set([
            ...(readObject(languagesStringsToUse, cursor)
              ? Object.keys(readObject(languagesStringsToUse, cursor))
              : []),
            ...(readObject(fallbackLanguagesStrings, cursor)
              ? Object.keys(readObject(fallbackLanguagesStrings, cursor))
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
        const currentCursor = cursor ? `${cursor}.${prop1}` : prop1;
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

const languageTypeProxy = (language, type, noFallback) => {
  return new Proxy(
    {},
    {
      async get(target, prop) {
        const selectedLanguagesStrings = await import(
          `./bot/${language}/${type}/${prop}.json`,
          { with: { type: "json" } }
        ).catch(() => null);
        const fallbackLanguagesStrings = !noFallback
          ? await import(`./bot/en_us/${type}/${prop}.json`, {
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

export default function languageProxy(language, noFallback = false) {
  return new Proxy(
    {},
    {
      get(target, prop) {
        if (validLanguages.includes(language)) {
          return languageTypeProxy(language, prop, noFallback);
        } else if (!noFallback) {
          // default to en_us
          return languageTypeProxy("en_us", prop, noFallback);
        } else {
          throw new Error(`Language ${language} not found`);
        }
      },
    }
  );
}
