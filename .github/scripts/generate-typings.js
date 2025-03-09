import { readdirSync, statSync } from "fs";
import { readFile } from "fs/promises";
import { join } from "path";
import convert from "./json-to-ts.js";
import { writeFileSync } from "fs";

const baseDir = "./bot/en_us";

const writeDir = "./";

function readObject(obj) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      result[key] = readObject(obj[key]);
    } else {
      result[key] = typeof obj[key];
    }
  });
  return result;
}

async function generateTypings(dirPath = baseDir) {
  const result = {};

  await Promise.all(
    readdirSync(dirPath).map(async (item) => {
      if (item === "languages.json") {
        return;
      }
      const fullPath = join(dirPath, item);
      if (statSync(fullPath).isDirectory()) {
        result[item] = await generateTypings(fullPath);
      } else if (item.endsWith(".json")) {
        const data = await readFile(fullPath);
        const json = JSON.parse(data.toString());
        const fileDetails = readObject(json);
        const fileName = item.replace(".json", "");
        result[fileName] = fileDetails; // Assume JSON files contain strings
      }
    })
  );

  return result;
}

const typings = await generateTypings();

const slashCommandNamesType = `export type SlashCommandNames = ${Object.keys(
  typings.slash_commands
)
  .map((key) => `"${key}"`)
  .join(" | ")};`;

const locales = (
  await import("../../bot/languages.json", { assert: { type: "json" } })
).default;

const quarkLanguageCodes = Object.values(locales).map((locale) => locale.code);
const quarkLanguageCodesType = `export type QuarkLanguageCodes = ${quarkLanguageCodes
  .map((code) => `"${code}"`)
  .join(" | ")};`;

let finalFile = "";
const typeScript = convert(typings, { topLevelArePromises: true });
finalFile += typeScript + "\n";
finalFile += slashCommandNamesType + "\n";
finalFile += quarkLanguageCodesType + "\n";

writeFileSync(join(writeDir, "languages.d.ts"), finalFile, "utf-8");
