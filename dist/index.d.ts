import type { LanguageStructure } from "./.github/scripts/languages.d.ts";
export type DiscordLocaleKeys = keyof typeof locales;
export interface Locale {
    code: string;
    id: number;
    name: string;
    active: boolean;
}
export type Languages = {
    [key: string]: Locale;
};
export declare const locales: Languages;
export declare const validLanguages: Array<string>;
export declare const getDiscordLocaleCode: (language: string) => DiscordLocaleKeys;
export declare const getQuarkLocaleCode: (language: DiscordLocaleKeys) => string;
export declare const getDatabaseLocaleCode: (language: string) => number;
export declare const getLocaleFromDatabaseCode: (databaseCode: number) => string;
export default function languageProxy(language: string, noFallback?: boolean): LanguageStructure;
