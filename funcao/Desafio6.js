/*) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos*/

let simples = (c, j, t) => {
    c += (c * j * t)
    return c.toFixed(2)
}

console.log(simples(520, 0.015, 6))

let composto = (c, j, t) => {
    return  (c * ((1 + j) ** t)).toFixed(2)
}

console.log(composto(8000, 0.012, 6))