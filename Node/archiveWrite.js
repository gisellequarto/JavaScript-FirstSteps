const fs = require('fs');

const product = {
    name: 'mobile',
    price: 149.99,
    discount: 0.15
}

//save in a file as a json
fs.writeFile(__dirname + '/archiveGenerated.json', JSON.stringify(product), err => {
    console.log(err || 'Archive saved!')
})