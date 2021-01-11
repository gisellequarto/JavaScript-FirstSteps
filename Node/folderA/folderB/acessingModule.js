// use ../ to go to another up folder 

const moduleA = require('../../moduleA');

console.log(moduleA.hi);


//if you name the file as <index.js>.. you can import the folder directly
const c = require('./folderC')
console.log(c.hiAgain)




//import module http

/*const http = require('http')
http.createServer((req, res) => {
    res.write("Server Created!!!")
    res.end()
}).listen(8080)
*/

