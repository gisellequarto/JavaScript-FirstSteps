/*Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.*/

let test = "hello word";

const findLetter = (x, y) => {
    let total = 0;
    for(let i in y) {
        if (`${y[i]}` == x) {
            total++;
        }
    }
    console.log(total);
}

findLetter("H", test);