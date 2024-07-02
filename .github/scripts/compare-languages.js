const fs = require('fs');
const path = require('path');

function readJson(filePath) {
    const rawData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(rawData);
}

function getAllJsonFiles(directory) {
    let jsonFiles = [];
    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            jsonFiles = jsonFiles.concat(getAllJsonFiles(fullPath));
        } else if (file.endsWith('.json')) {
            jsonFiles.push(fullPath);
        }
    });

    return jsonFiles;
}

function compareJsonFiles(enUsDir, otherLangDir) {
    const enUsFiles = getAllJsonFiles(enUsDir);
    const otherLangFiles = getAllJsonFiles(otherLangDir);
    
    const enUsFilesRelative = enUsFiles.map(file => path.relative(enUsDir, file));
    const otherLangFilesRelative = otherLangFiles.map(file => path.relative(otherLangDir, file));
    
    const missingFiles = enUsFilesRelative.filter(file => !otherLangFilesRelative.includes(file));
    
    const missingKeys = {};
    
    enUsFilesRelative.forEach(file => {
        if (otherLangFilesRelative.includes(file)) {
            const enUsJson = readJson(path.join(enUsDir, file));
            const otherLangJson = readJson(path.join(otherLangDir, file));
            
            const missingKeysInFile = Object.keys(enUsJson).filter(key => !otherLangJson.hasOwnProperty(key));
            if (missingKeysInFile.length > 0) {
                missingKeys[file] = missingKeysInFile;
            }
        }
    });
    
    return { missingFiles, missingKeys };
}

function compareAllLanguages(baseDir) {
    const enUsDir = path.join(baseDir, 'en_us');
    const languages = fs.readdirSync(baseDir).filter(dir => fs.statSync(path.join(baseDir, dir)).isDirectory() && dir !== 'en_us');
    
    const report = {};
    
    languages.forEach(lang => {
        const langDir = path.join(baseDir, lang);
        const { missingFiles, missingKeys } = compareJsonFiles(enUsDir, langDir);
        report[lang] = { missingFiles, missingKeys };
    });
    
    return report;
}

const baseDirectory = './bot/';
const comparisonReport = compareAllLanguages(baseDirectory);

for (const [lang, report] of Object.entries(comparisonReport)) {
    console.log(`Language: ${lang}`);
    console.log(`  Missing files: ${report.missingFiles.length > 0 ? report.missingFiles.join(', ') : 'None'}`);
    console.log(`  Missing keys: ${Object.keys(report.missingKeys).length > 0 ? JSON.stringify(report.missingKeys, null, 2) : 'None'}`);
    console.log();
}
