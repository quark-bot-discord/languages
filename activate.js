const fs = require('fs');
const path = require('path');
const langs = require("./languages-conversion.json");
const fallbackLanguage = "en_us";

const baseDirectory = "langs";
const baseDirectoryActive = "active/langs";

function activate() {
    Object.entries(langs).forEach(([key, value]) => {

        const directory = path.join(process.cwd(), "languages", baseDirectory, value, "bot", "standard");

        if (!fs.existsSync(directory)) {
            console.log(`Skipping non-existent directory: ${directory} for language code ${key}`);
            return;
        }

        const files = fs.readdirSync(directory);
        if (files.length === 0) {
            console.log(`No JSON files found in ${directory}.`);
            return;
        }

        const activeLanguageDirectory = path.join(process.cwd(), "languages", baseDirectoryActive, value);

        if (!fs.existsSync(activeLanguageDirectory))
            fs.mkdirSync(activeLanguageDirectory);

        const activeLanguageBotDirectory = path.join(process.cwd(), "languages", baseDirectoryActive, value, "bot");

        if (!fs.existsSync(activeLanguageBotDirectory))
            fs.mkdirSync(activeLanguageBotDirectory);

        const activeLanguageBotStandardDirectory = path.join(process.cwd(), "languages", baseDirectoryActive, value, "bot", "standard");

        if (!fs.existsSync(activeLanguageBotStandardDirectory))
            fs.mkdirSync(activeLanguageBotStandardDirectory);

        files.forEach(file => {
            if (!file.endsWith('.json')) {
                console.log(`Skipping non-JSON file: ${file}`);
                return;
            }

            console.log(`Copying ${value}/${file}...`);
            const filePath = path.join(directory, file);
            try {
                const data = fs.readFileSync(filePath, 'utf8');
                const jsonData = JSON.parse(data);
                const fallbackLanguageData = require(`./${baseDirectory}/${fallbackLanguage}/bot/standard/${file}`);
                // console.log(jsonData);
                function checkFields(obj, path = '') {
                    Object.keys(obj).forEach(key => {
                        const value = obj[key];
                        const currentPath = path ? `${path}.${key}` : key;

                        if (typeof value === 'string') {
                            let pointer = fallbackLanguageData;
                            const structPath = currentPath.split(".");
                            for (let i = 0; i < structPath.length - 1; i++)
                                pointer = pointer[structPath[i]];
                            pointer[structPath[structPath.length - 1]] = value;
                        } else if (typeof value === 'object' && value !== null) {
                            checkFields(value, currentPath);
                        }
                    });
                }

                checkFields(jsonData);

                const activeDirectory = path.join(process.cwd(), "languages", baseDirectoryActive, value, "bot", "standard");

                if (!fs.existsSync(activeDirectory))
                    fs.mkdirSync(activeDirectory);

                fs.writeFileSync(path.join(activeDirectory, file), JSON.stringify(fallbackLanguageData));

            } catch (err) {
                console.error(`Error processing ${file}:`, err);
                foundErrors = true;
            }
        });

    });

}

module.exports = activate;