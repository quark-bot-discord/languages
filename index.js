export const locales = (
  await import("./bot/languages.json", { with: { type: "json" } })
).default;

export const validLanguages = Object.values(locales).flat();

const readObject = (obj, cursor = "") => {
  if (!obj) return undefined;
  const cursorPath = cursor.split(".");
  for (let i = 0; i < cursorPath.length; i++) obj = obj[cursorPath[i]];
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

const languageProxy = (language, noFallback = false) => {
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
};

export default function (lang, noFallback = false) {
  return languageProxy(lang, noFallback);
}
