const fs = require('fs')


const path = __dirname + '/archive.json'

//sync
const content = fs.readFileSync(path, 'utf-8')
console.log(content);


//assync
fs.readFile(path, 'utf-8', (err, content) => {
    const config = JSON.parse(content)
    console.log(`${config.db.host}:${config.db.port}`)
})


//direct full path

const config = require('./archive.json')
console.log(config.db)

//read folder

fs.readdir(__dirname, (err, archives) => {
  console.log("Folder Content:")  
  console.log(archives)
})