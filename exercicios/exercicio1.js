/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.*/

let elements = ["word", 5, 82, "hello", "25", "!", 33];

let filteredArray = elements.filter(x => Number.isInteger(x));

console.log(filteredArray);


