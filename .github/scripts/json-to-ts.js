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

  return typings;
}
