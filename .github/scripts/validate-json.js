import { readdirSync, statSync, readFileSync } from "fs";
import { join } from "path";

const baseDirectory = "./bot";

let foundErrors = false;

function validateJSONFiles(directory) {
  try {
    const files = readdirSync(directory);

    files.forEach((file) => {
      const filePath = join(directory, file);
      const stat = statSync(filePath);

      if (stat.isDirectory()) {
        validateJSONFiles(filePath);
      } else if (file.endsWith(".json")) {
        console.log(`Validating ${filePath}...`);
        try {
          const data = readFileSync(filePath, "utf8");
          JSON.parse(data);
        } catch (err) {
          console.error(`Error processing ${filePath}: ${err.message}`);
          foundErrors = true;
        }
      }
    });
  } catch (err) {
    console.error(`Error reading directory ${directory}: ${err.message}`);
    process.exit(1);
  }
}

validateJSONFiles(baseDirectory);

if (foundErrors) {
  console.error(
    "Validation errors found in some JSON files. Please check the logs above."
  );
  process.exit(1);
} else {
  console.log("All JSON files validated successfully.");
  process.exit(0);
}
