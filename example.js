import languages, { getDiscordLocaleCode, getQuarkLocaleCode, validLanguages } from "./index.js";
console.log(validLanguages);

const language = "en_pr";

// non existent, should fallback to en_us
console.log((await languages(language).slash_commands.ping).name);

// existent, should use en_pr
console.log(
  (await languages(language).standard.textEvents).messageDeleted.title
);

// non existent in either selected language or fallback language
try {
  await languages(language).doesNotExist.abc;
} catch (error) {
  console.error(error);
}

console.log((await languages(language, true).slash_commands.ping).name);

console.log(Object.keys(await languages("en_gb", true).slash_commands.help));

console.log(getQuarkLocaleCode("en-GB"));
console.log(getDiscordLocaleCode("en_gb"));