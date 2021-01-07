/*) Faça um algoritmo que calcule o fatorial de um número*/

let fatorial = x => {
    let result = 1
    if (x == 0) {
        return 1
    }
    for (let i = 1; i <= x; i++) {
        result *= i 
    }
    return result
}

console.log(fatorial(5))
console.log(fatorial(4))
console.log(fatorial(6))
console.log(fatorial(0))
console.log(fatorial(-10))