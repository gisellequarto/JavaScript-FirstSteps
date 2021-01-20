
const http = require('http');
const { resolve } = require('path');

const getTeam = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = '';
    
            res.on('data', data => {
                result += data;
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(result));
                } catch(e) {
                    reject(e);
                }
            })
        })
    })
}


/* not good enough yet 
let names = [];
getTeam('A').then(students => {
    names = names.concat(students.map(a => `A: ${a.nome}`));
    getTeam('B').then(students => {
        names = names.concat(students.map(b => `B: ${b.nome}`));
        getTeam('C').then(students => {
            names = names.concat(students.map(c => `C: ${c.nome}`));
            console.log(names);
        })
    })
})*/

Promise.all([getTeam('A'), getTeam('B'), getTeam('C')])
        .then(teams => [].concat(...teams))
        .then(students => students.map(student => student.nome))
        .then(x => console.log(x))
        .catch(er => console.log(er.message));


getTeam('D').catch(e => console.log(e.message));