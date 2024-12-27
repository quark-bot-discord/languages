import { join, dirname } from "path";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";

// Get the current file URL
const __filename = fileURLToPath(import.meta.url);
// Get the directory name
const __dirname = dirname(__filename);

function jsonToTypeScript(obj) {
  const entries = Object.entries(obj).map(([key, value]) => {
    let safeKey;
    if (!isNaN(parseInt(key)) || key.includes("-")) {
      safeKey = `"${key}"`;
    } else {
      safeKey = key;
    }
    if (typeof value === "object" && value !== null) {
      return `${safeKey}: ${jsonToTypeScript(value)};`;
    } else {
      return `${safeKey}: string;`; // Assuming leaf nodes are strings
    }
  });
  return `{\n${entries.map((entry) => `  ${entry}`).join("\n")}\n}`;
}

export default function convert(jsonStructure) {
  const typings = `export type LanguageStructure = ${jsonToTypeScript(
    jsonStructure
  )};`;

  writeFileSync(join(__dirname, "languages.d.ts"), typings, "utf-8");
}
