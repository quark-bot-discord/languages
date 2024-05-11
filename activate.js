const fs = require('fs');
const path = require('path');
const fallbackLanguage = "en_us";

const baseDirectory = "bot";
const baseDirectoryActive = "active/bot";
const languages = require('./languages.json');

function activate() {
    Object.entries(languages).forEach(([key, value]) => {
        const directory = path.join(process.cwd(), "languages", baseDirectory, value, "standard");

        if (!fs.existsSync(directory)) {
            console.log(`Skipping non-existent directory: ${directory} for language code ${key}`);
            return;
        }

        const files = fs.readdirSync(directory);
        if (files.length === 0) {
            console.log(`No JSON files found in ${directory}.`);
            return;
        }

        const activeLanguageBotStandardDirectory = path.join(process.cwd(), "languages", baseDirectoryActive, value, "standard");

        if (!fs.existsSync(activeLanguageBotStandardDirectory))
            fs.mkdirSync(activeLanguageBotStandardDirectory, { recursive: true });

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
                const fallbackLanguageData = require(`./${baseDirectory}/${fallbackLanguage}/standard/${file}`);
                function checkFields(obj, path = '') {
                    Object.keys(obj).forEach(key => {
                        const value = obj[key];
                        const currentPath = path ? `${path}.${key}` : key;

                        if (typeof value === 'string') {
                            let pointer = fallbackLanguageData;
                            const structPath = currentPath.split(".");
                            for (let i = 0; i < structPath.length - 1; i++) {
                                pointer = pointer[structPath[i]];
                            }
                            pointer[structPath[structPath.length - 1]] = value;
                        } else if (typeof value === 'object' && value !== null) {
                            checkFields(value, currentPath);
                        }
                    });
                }

                checkFields(jsonData);

                if (!fs.existsSync(activeLanguageBotStandardDirectory))
                    fs.mkdirSync(activeLanguageBotStandardDirectory, { recursive: true });

                fs.writeFileSync(path.join(activeLanguageBotStandardDirectory, file), JSON.stringify(fallbackLanguageData));

            } catch (err) {
                console.error(`Error processing ${file}:`, err);
                foundErrors = true;
            }
        });

    });

}

module.exports = activate;
