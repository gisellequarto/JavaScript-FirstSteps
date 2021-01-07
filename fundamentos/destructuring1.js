// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// as chaves são o DESTRUCTURING
const { nome, idade } = pessoa
console.log(nome, idade)

//assim vc renomeia as variaveis quando extrai... parece um "alias" do SQL
const { nome: n, idade: i } = pessoa
console.log(n, i)

// no igual a true vc atribui um valor padrão caso esteja undefined

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

//assim ele só tira o loug, numero e cep dá undenifed
//não tira o endereço
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//quando não tem não funciona quando está aninhado
//const { conta: { ag, num } } = pessoa
//console.log(ag, num)