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
/**
 * Walk a dotted path, or return undefined.
 *
 * The previous implementation skipped path segments it could not find and
 * returned whatever `obj` happened to be at that point — for a missing key,
 * the *parent object*. Two consequences, both bugs:
 *
 *   1. A missing key produced a truthy object rather than undefined. The proxy
 *      above then wrapped it, and stringifying that wrapper threw
 *      "TypeError: object is not a function". That is what destroyed roughly
 *      half of serverlog's threadUpdate logs, plus channelUpdate and
 *      guildUpdate, whenever Discord sent an audit-log change key with no
 *      entry in the language JSON.
 *   2. The en_us fallback never ran. `readObject(selected, cursor)` returned a
 *      truthy parent object for a key the translation was missing, so the
 *      ternary that was supposed to fall back to English always took the first
 *      branch. Translations silently rendered the wrong string.
 */
const readObject = (obj, cursor = "") => {
    if (!obj)
        return undefined;
    const cursorPath = cursor.split(".").filter(Boolean);
    let current = obj;
    for (const segment of cursorPath) {
        if (current === null ||
            typeof current !== "object" ||
            !Object.prototype.hasOwnProperty.call(current, segment)) {
            return undefined;
        }
        current = current[segment];
    }
    return current;
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
            // Never answer JavaScript's own internals with a language lookup.
            //
            // This trap used to return a proxy for *every* property. So
            // `String(value)` looked up `toString`, got an object instead of a
            // function, and threw "TypeError: object is not a function" — which is
            // what destroyed roughly half of all threadUpdate logs in serverlog,
            // plus channelUpdate and guildUpdate. It fired whenever an audit-log
            // change key was absent from the language JSON and the gui interpolated
            // the result into a template literal.
            //
            // `then` must be undefined specifically: every `await` probes it, and a
            // truthy non-callable `then` makes the value look thenable when it is
            // not.
            if (prop1 === "then")
                return undefined;
            if (typeof prop1 === "symbol" ||
                prop1 === "toString" ||
                prop1 === "valueOf" ||
                prop1 === "constructor") {
                return Reflect.get(target, prop1);
            }
            const currentCursor = cursor
                ? `${cursor}.${String(prop1)}`
                : String(prop1);
            const toReturn = readObject(languagesStringsToUse, currentCursor)
                ? readObject(languagesStringsToUse, currentCursor)
                : readObject(fallbackLanguagesStrings, currentCursor);
            // A key that exists in neither the selected language nor the fallback is
            // absent, not an empty branch. Returning a proxy for it made the gui
            // truthiness guards (`types[c.key] ? ... : ""`) pass, so a missing
            // string rendered as "[object Object]" in the log body.
            if (toReturn === undefined || toReturn === null)
                return undefined;
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
        get(target, prop) {
            // Deliberately NOT an `async get`: in an async trap every guard below
            // would be wrapped in a promise, so `toString` would answer with a
            // promise rather than a function and stringifying would throw again.
            if (prop === "then")
                return undefined;
            if (typeof prop === "symbol" ||
                prop === "toString" ||
                prop === "valueOf" ||
                prop === "constructor") {
                return Reflect.get(target, prop);
            }
            return (async () => {
                const selectedLanguagesStrings = await import(`./bot/${language}/${type}/${String(prop)}.json`, { with: { type: "json" } }).catch(() => null);
                // The fallback was unguarded, so a key with no JSON file anywhere threw
                // ERR_MODULE_NOT_FOUND from inside a proxy trap — an unhandled
                // rejection with no useful stack, far from the call site.
                const fallbackLanguagesStrings = !noFallback
                    ? await import(`./bot/en_us/${type}/${String(prop)}.json`, {
                        with: { type: "json" },
                    }).catch(() => null)
                    : null;
                const languagesStringsToUse = (selectedLanguagesStrings === null || selectedLanguagesStrings === void 0 ? void 0 : selectedLanguagesStrings.default)
                    ? selectedLanguagesStrings.default
                    : fallbackLanguagesStrings === null || fallbackLanguagesStrings === void 0 ? void 0 : fallbackLanguagesStrings.default;
                return returnNextProperty(languagesStringsToUse, fallbackLanguagesStrings === null || fallbackLanguagesStrings === void 0 ? void 0 : fallbackLanguagesStrings.default);
            })();
        },
    });
};
export default function languageProxy(language, noFallback = false) {
    return new Proxy({}, {
        get(target, prop) {
            if (prop === "then")
                return undefined;
            if (typeof prop === "symbol" ||
                prop === "toString" ||
                prop === "valueOf" ||
                prop === "constructor") {
                return Reflect.get(target, prop);
            }
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