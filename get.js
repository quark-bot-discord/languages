const validLanguages = ["en_gb", "en_pr", "en_us", "nl", "pl", "tr", "vi"];
const languages = {};

const languageTypeProxy = (language, type) => {
  const correctLanguageTypeObject = {};
  new Proxy(correctLanguageTypeObject, {
    async get(target, prop) {
      const selectedLanguagesStrings = await import(
        `./bot/${language}/${type}/${prop}.json`,
        { with: { type: "json" } }
      );
      const fallbackLanguagesStrings = await import(
        `./bot/en_us/${type}/${prop}.json`,
        { with: { type: "json" } }
      );
      const languagesStringsToUse = selectedLanguagesStrings.default
        ? selectedLanguagesStrings.default
        : fallbackLanguagesStrings.default;
      new Proxy(languagesStringsToUse, {
        get(target, prop) {
          return target[prop]
            ? target[prop]
            : fallbackLanguagesStrings.default[prop];
        },
      });
      return languagesStringsToUse.default;
    },
  });
  return correctLanguageTypeObject;
};

const languageProxy = (language) => {
  const correctLanguageObject = {};
  new Proxy(correctLanguageObject, {
    get(target, prop) {
      if (validLanguages.includes(language)) {
        return languageTypeProxy(language, prop);
      } else {
        // default to en_us
        return languageTypeProxy("en_us", prop);
      }
    },
  });
  return correctLanguageObject;
};

new Proxy(languages, {
  get(target, prop) {
    return languageProxy(prop);
  },
});

export default languages;
