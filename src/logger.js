const fs = require('fs');
const path = require('path');

module.exports.log = (message, file = 'log.txt') => {
    
    if (!file || !file.endsWith('.txt')) {
        console.error('Invalid file name. It must end with .txt');
        return;
    }

    if (file == 'default')
        file = 'log.txt';

    const folderPath = path.join(__dirname, '..', 'logs');
    const filePath = path.join(folderPath, file);

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    fs.appendFile(filePath, message + '\n', err => {
        if (err) {
            console.error('Error writing to the log file', err);
        }
    });
};


module.exports.saveToFile = (text, file) => {

    if (!file) {
        console.error('A file name must be provided.');
        return;
    }

    const folderPath = path.join(__dirname, '..', 'files');
    const filePath = path.join(folderPath, file);

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    fs.appendFile(filePath, text + '\n', err => {
        if (err) {
            console.error('Error writing to the file', err);
        }
    });
};