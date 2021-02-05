const fs = require('fs');
const { resolve } = require('path');
const path = require('path');

function readFile(filePath) {
     return new Promise (resolve => {
         fs.readFile(filePath, function(er, content) {
            resolve(content.toString());
         })
         console.log('After read file');
     })
}

const filePath = path.join(__dirname, 'dados.txt');

readFile(filePath).then(console.log);