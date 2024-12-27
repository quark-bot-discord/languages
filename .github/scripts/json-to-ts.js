function jsonToTypeScript(
  obj,
  { topLevelArePromises = false, currentLevel = 0 } = {}
) {
  const entries = Object.entries(obj).map(([key, value]) => {
    let safeKey;
    if (!isNaN(parseInt(key)) || key.includes("-")) {
      safeKey = `"${key}"`;
    } else {
      safeKey = key;
    }
    if (typeof value === "object" && value !== null) {
      return `${safeKey}: ${
        topLevelArePromises === true && currentLevel === 1 ? "Promise<" : ""
      }${jsonToTypeScript(value, {
        topLevelArePromises,
        currentLevel: currentLevel + 1,
      })}${topLevelArePromises === true && currentLevel === 1 ? ">" : ""};`;
    } else {
      return `${safeKey}: string;`; // Assuming leaf nodes are strings
    }
  });
  return `{\n${entries.map((entry) => `  ${entry}`).join("\n")}\n}`;
}

export default function convert(
  jsonStructure,
  { topLevelArePromises = false } = {}
) {
  const typings = `export type LanguageStructure = ${jsonToTypeScript(
    jsonStructure,
    {
      topLevelArePromises,
      currentLevel: 0,
    }
  )};`;

  return typings;
}
