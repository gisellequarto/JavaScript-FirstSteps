/*Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um arrray com uma quantidade
indeterminada de números e retorne a média simples desses números.*/

let calcMedia = x => {
    return (x.reduce((a, b) => a + b)) / x.length;
}

console.log(calcMedia([0.0, 10.0, 5.0]));

console.log(calcMedia([7.0, 4.0, 20.0, 5.0]));
