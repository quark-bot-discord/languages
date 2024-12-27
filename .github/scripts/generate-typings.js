import { readdirSync, statSync } from "fs";
import { readFile } from "fs/promises";
import { join } from "path";
import convert from "./json-to-ts.js";

const baseDir = "./bot/en_us";

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

convert(typings);
