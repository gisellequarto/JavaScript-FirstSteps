// como vem o desafio
const accounts = {}

accounts['antonio@email.com'] = 'sidjoifdj892839283'
accounts['amanda@email.com'] = 'cdknfdgjdo38459348r'
accounts['creusa@email.com'] = 'doi0d38746832dss'
accounts['sergio@email.com'] = '943784w3edowejd9w'
accounts['samanta@email.com'] = 'SIDJF9320231RKÇMF'
accounts['dandara@email.com'] = '094534KFMSLJEWDCH3'
accounts['betina@email.com'] = 'sdijfhiruhe4854eIH9'
accounts['andreia@email.com'] = 'jdshfwe87Y8Yuhd9'
accounts['carlos@email.com'] = 'aqoeww09r984YHUYH7'
accounts['jose@email.com'] = '8343WJRDEWJFQ9joij98'

console.log(accounts)



// faz uma função construtora - fazer objetos com os params username e password
let criarObjeto = (username, password) => {
    return {
        username,
        password,
    }
}
let result = []

// faz um forEach no objeto para ele virar um array de muitos objetos
Object.entries(accounts).forEach(([email, password]) => {
    result.push((criarObjeto(email, password)))
});

// como ficou o array
console.log(result)

//mapear passwords para root13:
console.log('Mapear passwords: \n' + (result.map(a => a.password)))


// agora coloca os passwords em outro array
let arrayDePassword = []
for (let i in result) {
    arrayDePassword.push(((result[i].password)))
}

//como ficou o array de password
console.log(arrayDePassword)

