const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

const axios = require('axios');


axios.get(url).then(response => {
    const employees = response.data;
});

// Desafio : encontrar a mulher chinesa com o menor salário

axios.get(url).then(response => {
    const employees = response.data;
    const result = employees.filter(isFemale)
                            .filter(isChinese)
                            .reduce(worseSalary);

    console.log(result);
});

let isFemale = x => x.genero = 'F';
let isChinese = x => x.pais = 'China';
let worseSalary = (x, y) => {
    return x.salario < y.salario ? x : y;
};