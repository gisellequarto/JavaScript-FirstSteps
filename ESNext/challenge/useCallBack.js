const http = require('http');

const getTeam = (letter, cb) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    http.get(url, res => {
        let result = '';

        res.on('data', data => {
            result += data;
        })

        res.on('end', () => {
            cb(JSON.parse(result));
        })
    })
}


//callback HELL!!! 
let names = [];
getTeam('A', students => {
    names = names.concat(students.map(a => `A: ${a.nome}`));
    getTeam('B', students => {
        names = names.concat(students.map(b => `B: ${b.nome}`));
        getTeam('C', students => {
            names = names.concat(students.map(c => `C: ${c.nome}`));
            console.log(names);
        })
    })
})
