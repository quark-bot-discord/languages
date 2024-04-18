const fs = require('fs');

function filterEnUsEntries(inputFilePath, outputFilePath) {
    // Read the JSON file
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Filter the data
        const filteredData = Object.keys(jsonData).reduce((acc, key) => {
            if (key.includes('en_us')) {
                acc[key] = jsonData[key];
            }
            return acc;
        }, {});

        // Write the filtered JSON to a new file
        fs.writeFile(outputFilePath, JSON.stringify(filteredData, null, 4), err => {
            if (err) {
                console.error('Error writing the file:', err);
                return;
            }
            console.log('Filtered JSON has been written to', outputFilePath);
        });
    });
}

// Replace 'path/to/your/input.json' and 'path/to/your/output.json' with your actual file paths
filterEnUsEntries('./tags_responses.json', './tags_responses.json');
