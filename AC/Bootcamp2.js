const accounts = ['antonio@email.com:sidjoifdj892839283', 'amanda@email.com:cdknfdgjdo38459348r', 'creusa@email.com:doi0d38746832dss', 'sergio@email.com:943784w3edowejd9w',
'samanta@email.com:SIDJF9320231RKÇMF', 'dandara@email.com: 094534KFMSLJEWDCH3', 'betina@email.com: sdijfhiruhe4854eIH9', 'andreia@email.com:jdshfwe87Y8Yuhd9',
'carlos@email.com:aqoeww09r984YHUYH7', 'jose@email.com:8343WJRDEWJFQ9joij98']

console.log(accounts)
let result = []

let criarObjeto = (username, password) => {
    return {
        username,
        password,
    }
}

let temp = []

accounts.forEach(element => {
    temp.push((element.split(":")))
    
});



console.log(temp)
