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

let getStudents = async () => {
    const teamA = await getTeam('A');
    const teamB = await getTeam('B');
    const teamC = await getTeam('C');
    
    return [].concat(teamA, teamB, teamC);
} // returns one async function

getStudents()
    .then(students => students.map(student => student.nome))
    .then(names => console.log(names));