function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.15
    }
}

console.log(criarProduto("Caneta", 0.5))