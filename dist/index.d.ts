import type { LanguageStructure, QuarkLanguageCodes } from "./languages.d.ts";
export type DiscordLocaleKeys = keyof typeof locales;
export interface Locale {
    code: string;
    id: number;
    name: string;
    active: boolean;
    emoji: string;
    icon?: string;
    iconCode?: string;
}
export type Languages = {
    [key: localeOptions]: Locale;
};
export type localeOptions = typeof validLanguages[number];
export declare const locales: Languages;
export declare const validLanguages: Array<string>;
export declare const getDiscordLocaleCode: (language: string) => DiscordLocaleKeys;
export declare const checkIsQuarkLocaleCode: (language: string) => language is QuarkLanguageCodes;
export declare const getQuarkLocaleCode: (language: DiscordLocaleKeys) => QuarkLanguageCodes;
export declare const getDatabaseLocaleCode: (language: DiscordLocaleKeys) => number;
export declare const getLocaleFromDatabaseCode: (databaseCode: number) => DiscordLocaleKeys;
export default function languageProxy(language: string, noFallback?: boolean): LanguageStructure;
export declare function displayLanguage(language: QuarkLanguageCodes): string;
/**
 * The website's strings for one language folder (`bot/<folder>/web/site.json`),
 * or null if that folder has none.
 *
 * Unlike `languageProxy`, this does not ask whether the bot offers the
 * language. The website can publish a page in a language the bot is not
 * translated into (Portuguese: `pt` has a folder but is not in
 * `languages.json`, and listing it there would offer it in the bot too).
 * Nothing here falls back to English.
 */
export declare function siteStrings(folder: string): Promise<Record<string, Record<string, string>> | null>;
