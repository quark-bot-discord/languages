const fs = require('fs');
const path = require('path');
const fallbackLanguage = "en_us";

const baseDirectory = "bot";
const languages = require('./bot/languages.json');

const languagesLocation = path.join(process.cwd(), "languages", baseDirectory);
const activeLanguagesLocation = path.join(process.cwd(), "languages", "active", baseDirectory);

// relative file path is the path after the locale directory
function loadFile(locale, relativeFilePath) {

    const filePath = path.join(languagesLocation, locale, relativeFilePath);

    try {
        let data;
        if (!fs.existsSync(filePath))
            data = "{}";
        else
            data = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        const fallbackLanguageData = JSON.parse(fs.readFileSync(path.join(languagesLocation, fallbackLanguage, relativeFilePath), 'utf8'));
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

        const absolutePathToActiveSubdirectory = path.join(activeLanguagesLocation, locale, relativeFilePath);

        if (!fs.existsSync(path.dirname(absolutePathToActiveSubdirectory)))
            fs.mkdirSync(path.dirname(absolutePathToActiveSubdirectory), { recursive: true });

        fs.writeFileSync(absolutePathToActiveSubdirectory, JSON.stringify(fallbackLanguageData), { recursive: true });

    } catch (err) {
        console.error(`Error processing ${filePath}:`, err);
        foundErrors = true;
    }

}

function loadSubdirectory(locale, relativePath) {
    const absolutePath = path.join(languagesLocation, fallbackLanguage, relativePath);
    const subdirectories = fs.readdirSync(absolutePath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
    const subfiles = fs.readdirSync(absolutePath, { withFileTypes: true })
        .filter(dirent => !dirent.isDirectory())
        .map(dirent => dirent.name);
    for (let i = 0; i < subdirectories.length; i++) {
        const subdirectoryPath = path.join(relativePath, subdirectories[i]);
        loadSubdirectory(locale, subdirectoryPath);
    }
    for (let i = 0; i < subfiles.length; i++) {
        const filePath = path.join(relativePath, subfiles[i]);
        loadFile(locale, filePath);
    }
}

function activate() {
    Object.entries(languages).forEach(([key, value]) => {
        const directory = path.join(process.cwd(), "languages", baseDirectory, value);
        console.log(`Processing language code ${key}...`);
        if (!fs.existsSync(directory)) {
            console.log(`Skipping non-existent directory: ${directory} for language code ${key}`);
            return;
        }

        if (!fs.existsSync(activeLanguagesLocation))
            fs.mkdirSync(activeLanguagesLocation, { recursive: true });

        console.log(`Copying ${directory}...`);
        loadSubdirectory(value, "/");

    });

}

module.exports = activate;