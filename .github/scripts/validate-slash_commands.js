const fs = require('fs');
const path = require('path');

const directory = process.argv[2]; // Take directory as an input argument

let foundErrors = false;

try {
    const files = fs.readdirSync(directory);

    if (files.length === 0) {
        console.log("No JSON files found in the directory.");
        process.exit(0);
    }

    console.log(`Found ${files.length} files in the directory.`);

    files.forEach(file => {
        if (!file.endsWith('.json')) {
            console.log(`Skipping non-JSON file: ${file}`);
            return;
        }

        const filePath = path.join(directory, file);
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            const jsonData = JSON.parse(data);

            console.log(`Processing ${file}...`);

            function checkFields(obj, path = '') {
                Object.keys(obj).forEach(key => {
                    const value = obj[key];
                    const currentPath = path ? `${path}.${key}` : key;
                    
                    if (typeof value === 'string') {
                        if (path.endsWith('.description') && value.length > 100) {
                            console.error(`${file}: Description exceeds 100 characters at '${currentPath}'`);
                            foundErrors = true;
                        }
                        if (path.endsWith('.name') && value.includes(' ')) {
                            console.error(`${file}: Name contains space at '${currentPath}'`);
                            foundErrors = true;
                        }
                    } else if (typeof value === 'object' && value !== null) {
                        checkFields(value, currentPath);
                    }
                });
            }

            checkFields(jsonData);

        } catch (err) {
            console.error(`Error processing ${file}:`, err);
            foundErrors = true;
        }
    });
} catch (err) {
    console.error("Error reading the directory:", err);
    process.exit(1); 
}

if (foundErrors) {
    console.error("Validation errors found in the files. Please check the logs above.");
    process.exit(1);
} else {
    console.log("All files validated successfully.");
    process.exit(0);
}
