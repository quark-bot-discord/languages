const validLanguages = ["en_gb", "en_pr", "en_us", "nl", "pl", "tr", "vi"];

const languageTypeProxy = (language, type) => {
  return new Proxy(
    {},
    {
      get(target, prop) {
        return new Proxy(
          {},
          {
            async get(target, prop1) {
              const selectedLanguagesStrings = await import(
                `./bot/${language}/${type}/${prop}.json`,
                { with: { type: "json" } }
              ).catch(() => null);
              const fallbackLanguagesStrings = await import(
                `./bot/en_us/${type}/${prop}.json`,
                { with: { type: "json" } }
              );
              const languagesStringsToUse = selectedLanguagesStrings?.default
                ? selectedLanguagesStrings.default
                : fallbackLanguagesStrings.default;
              return languagesStringsToUse[prop1]
                ? languagesStringsToUse[prop1]
                : fallbackLanguagesStrings.default[prop1];
            },
          }
        );
      },
    }
  );
};

const languageProxy = (language) => {
  return new Proxy(
    {},
    {
      get(target, prop) {
        if (validLanguages.includes(language)) {
          return languageTypeProxy(language, prop);
        } else {
          // default to en_us
          return languageTypeProxy("en_us", prop);
        }
      },
    }
  );
};

export default new Proxy(
  {},
  {
    get(target, prop) {
      return languageProxy(prop);
    },
  }
);
