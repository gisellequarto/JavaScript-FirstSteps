/*) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

let caixa = x => {
    let cem = (Math.trunc(x / 100))
    let cinq = (Math.trunc((x % 100)  / 50 ))
    let dez = (Math.trunc(((x % 100) % 50) / 10 ))
    let cinco = (Math.trunc((((x % 100) % 50) % 10 ) / 5))
    let um = (Math.trunc(((((x % 100) % 50) % 10 ) % 5)))

    let result = ""

    if (cem > 0) {
        result += (`${cem} nota(s) de R$ 100. `)
    }
    
    if (cinq > 0) {
        result += (`${cinq} nota(s) de R$ 50. `)
    }

    if (dez > 0) {
        result += (`${dez} nota(s) de R$ 10. `)
    }

    if (cinco > 0) {
        result += (`${cinq} nota(s) de R$ 5.`)
    }

    if (um > 0) {
        result += (`${um} nota(s) de R$ 1.`)
    }

    return result
}

console.log(caixa(20))