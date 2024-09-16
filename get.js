const validLanguages = ["en_gb", "en_pr", "en_us", "nl", "pl", "tr", "vi"];
const languages = {};

const languageTypeProxy = (language, type) => {
  const correctLanguageTypeObject = {};
  return new Proxy(correctLanguageTypeObject, {
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
      return new Proxy(languagesStringsToUse, {
        get(target, prop) {
          return target[prop]
            ? target[prop]
            : fallbackLanguagesStrings.default[prop];
        },
      });
    },
  });
};

const languageProxy = (language) => {
  const correctLanguageObject = {};
  return new Proxy(correctLanguageObject, {
    get(target, prop) {
      if (validLanguages.includes(language)) {
        return languageTypeProxy(language, prop);
      } else {
        // default to en_us
        return languageTypeProxy("en_us", prop);
      }
    },
  });
};

export default new Proxy(languages, {
  get(target, prop) {
    console.log(target, prop);
    return languageProxy(prop);
  },
});
