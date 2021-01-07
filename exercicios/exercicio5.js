/*Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro*/

let filterByDigits = (x, y) => {
    let digits = 1;
    for (let i = 0; i < y; i++) {
        digits = digits * 10;
    }

    let result = x.filter(x => x < digits).filter(x => x >= digits/10);
    console.log(result);
}


filterByDigits([38, 2, 365, 10, 125, 11], 2); // retornará [38, 10, 11]

filterByDigits([5, 9, 1, 125, 11], 1); // retornará [5, 9, 1]

filterByDigits([38, 2, 365, 10, 125, 11], 3); // retornará [365, 125]