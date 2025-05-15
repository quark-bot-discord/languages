import _locales from "./bot/languages.json" with { type: "json" };
export const locales = _locales;
export const validLanguages = Object.values(locales)
    .map((locale) => (locale.active === true ? locale.code : null))
    .filter((locale) => locale !== null);
export const getDiscordLocaleCode = (language) => {
    if (typeof language === "string") {
        for (const [key, value] of Object.entries(locales))
            if (value.code === language)
                return key;
    }
    else if (typeof language === "number") {
        for (const [key, value] of Object.entries(locales))
            if (value.id === language)
                return key;
    }
    throw new Error(`Language ${language} not found`);
};
export const checkIsQuarkLocaleCode = (language) => {
    return Object.values(locales).some((locale) => locale.code === language);
};
export const getQuarkLocaleCode = (language) => {
    var _a;
    const toReturn = (_a = locales[language]) === null || _a === void 0 ? void 0 : _a.code;
    if (!toReturn)
        throw new Error(`Language ${language} not found`);
    if (!checkIsQuarkLocaleCode(toReturn))
        throw new Error(`Language ${toReturn} not found`);
    return toReturn;
};
export const getDatabaseLocaleCode = (language) => {
    var _a;
    const toReturn = (_a = locales[language]) === null || _a === void 0 ? void 0 : _a.id;
    if (typeof toReturn !== "number")
        throw new Error(`Language ${language} not found`);
    return toReturn;
};
export const getLocaleFromDatabaseCode = (databaseCode) => {
    for (const [key, value] of Object.entries(locales))
        if (value.id === databaseCode)
            return key;
    throw new Error(`Language ${databaseCode} not found`);
};
const readObject = (obj, cursor = "") => {
    if (!obj)
        return undefined;
    const cursorPath = cursor.split(".");
    for (let i = 0; i < cursorPath.length; i++)
        if (cursorPath[i] && Object.keys(obj).includes(cursorPath[i])) {
            if (typeof obj[cursorPath[i]] !== "object")
                return obj[cursorPath[i]];
            else
                obj = obj[cursorPath[i]];
        }
    return obj;
};
const returnNextProperty = (languagesStringsToUse, fallbackLanguagesStrings, cursor = "") => {
    return new Proxy({}, {
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
                return returnNextProperty(languagesStringsToUse, fallbackLanguagesStrings);
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
                    return returnNextProperty(languagesStringsToUse, fallbackLanguagesStrings, currentCursor);
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
    });
};
const languageTypeProxy = (language, type, noFallback) => {
    return new Proxy({}, {
        async get(target, prop) {
            const selectedLanguagesStrings = await import(`./bot/${language}/${type}/${String(prop)}.json`, { with: { type: "json" } }).catch(() => null);
            const fallbackLanguagesStrings = !noFallback
                ? await import(`./bot/en_us/${type}/${String(prop)}.json`, {
                    with: { type: "json" },
                })
                : null;
            const languagesStringsToUse = (selectedLanguagesStrings === null || selectedLanguagesStrings === void 0 ? void 0 : selectedLanguagesStrings.default)
                ? selectedLanguagesStrings.default
                : fallbackLanguagesStrings === null || fallbackLanguagesStrings === void 0 ? void 0 : fallbackLanguagesStrings.default;
            return returnNextProperty(languagesStringsToUse, fallbackLanguagesStrings === null || fallbackLanguagesStrings === void 0 ? void 0 : fallbackLanguagesStrings.default);
        },
    });
};
export default function languageProxy(language, noFallback = false) {
    return new Proxy({}, {
        get(target, prop) {
            if (validLanguages.includes(language)) {
                return languageTypeProxy(language, String(prop), noFallback);
            }
            else if (!noFallback) {
                // default to en_us
                return languageTypeProxy("en_us", String(prop), noFallback);
            }
            else {
                throw new Error(`Language ${language} not found`);
            }
        },
    });
}
export function displayLanguage(language) {
    const locale = Object.values(locales).find((locale) => locale.code === language);
    if (!locale)
        throw new Error(`Language ${language} not found`);
    return `${locale.emoji} ${locale.name}`;
}
//# sourceMappingURL=index.js.map