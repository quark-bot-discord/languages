import languages from "./get.js";

const language = "en_pr";

console.log(await languages[language].slash_commands.ping.name);