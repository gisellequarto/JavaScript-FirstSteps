let valor //nao inicializada

console.log(valor)

valor = null; //incializou mas com ausencia de valor (não aponta para nenhum endereço de memória)
//serve para "zerar" uma variavel... para que ela não aponte mais para um determinado endereço de memória
console.log(valor);

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50

console.log(produto);
