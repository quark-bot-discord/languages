const fs = require('fs');
const path = require('path');

const baseDirectory = './bot';
const conversionFile = './bot/languages.json';

let foundErrors = false;

try {
    const conversionData = fs.readFileSync(conversionFile, 'utf8');
    const languageMap = JSON.parse(conversionData);

    Object.entries(languageMap).forEach(([key, value]) => {
        const directory = path.join(baseDirectory, value, 'slash_commands');
        if (!fs.existsSync(directory)) {
            console.log(`Skipping non-existent directory: ${directory} for language code ${key}`);
            return;
        }

        const files = fs.readdirSync(directory);
        if (files.length === 0) {
            console.log(`No JSON files found in ${directory}.`);
            return;
        }

        files.forEach(file => {
            if (!file.endsWith('.json')) {
                console.log(`Skipping non-JSON file: ${file}`);
                return;
            }

            console.log(`Validating ${value}/${file}...`)
            const filePath = path.join(directory, file);
            try {
                const data = fs.readFileSync(filePath, 'utf8');
                const jsonData = JSON.parse(data);

                function checkFields(obj, path = '') {
                    Object.keys(obj).forEach(key => {
                        const value = obj[key];
                        const currentPath = path ? `${path}.${key}` : key;

                        if (typeof value === 'string') {
                            if (currentPath.endsWith('.description') && value.length > 100) {
                                console.error(`Validation error: ${directory}/${file}: Description exceeds 100 characters at '${currentPath}'`);
                                foundErrors = true;
                            }
                            if (currentPath.endsWith('.name'))
                                console.log(value);
                            if (currentPath.endsWith('.name') && value.match(/^[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}$/gu) == null) {
                                console.error(`Validation error: ${directory}/${file}: Name does not match regex at '${currentPath}', VALUE: ${value}`);
                                foundErrors = true;
                            }
                            if (value !== value.toLowerCase() && currentPath.endsWith('name')) {
                                console.error(`Validation error: ${directory}/${file}: Key '${currentPath}' must be lowercase`);
                                foundErrors = true;
                            }
                            
                        } else if (typeof value === 'object' && value !== null) {
                            checkFields(value, currentPath);
                        }
                    });
                }

                checkFields(jsonData);

                if (jsonData.name && jsonData.name.includes(' ')) {
                    console.error(`Validation error: ${directory}/${file}: Name contains space at 'name'`);
                    foundErrors = true;
                } else if (jsonData.description && jsonData.description.length > 100) {
                    console.error(`Validation error: ${directory}/${file}: Description exceeds 100 characters at 'description'`);
                    foundErrors = true;
                }

            } catch (err) {
                console.error(`Error processing ${file}:`, err);
                foundErrors = true;
            }
        });
    });

    if (foundErrors) {
        console.error("Validation errors found in some JSON files. Please check the logs above.");
        process.exit(1);
    } else {
        console.log("All files validated successfully.");
        process.exit(0);
    }

} catch (err) {
    console.error("Error reading the conversion file or directory:", err);
    process.exit(1);
}
