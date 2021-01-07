//armazenar funcao numa variavel

const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 4);

//armazenando uma funçao ARROW em uma variável

const soma = (a, b) => {
    return a + b;
}

console.log(soma(4, 6));

//retorno implicito na ARROW
const subtracao = (a, b) => a - b;

console.log(subtracao(8, 3)); 