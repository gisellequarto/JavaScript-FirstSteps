/*var terminal = require('terminal');
var toolkit = require('hacker-toolkit');
var accounts = require('blackmarket-accounts');

//Ver como estão as contas neste array
console.log(accounts)


let result = []
let user = ""
let pass = ""

//função para criar os abjects accounts
let createObjectsAccounts = (username, password) => {
    return {
        username,
        password,
    }
}

//função para separar cada item do array accounts
let splitString = x => x.split(":")


//Laço for para percorrer todo o array, armazenar em user e pass (já fazendo o ROOT13 no pass)
//user e pass são os valores que serão passados como parametro na funçao de criar objetos
// o resultado dessa função é armazenado em um novo array <result>

for (let i = 0; i < accounts.length; i++) {
    user = (splitString(accounts[i])[0])
    pass = (splitString(accounts[i])[1])
    pass = toolkit.rot13(pass)
    result.push(createObjectsAccounts(user, pass))
}


//Verficar se o array está como esperado
console.log(result)

let superUser = ""
let superPassword = ""
let newSuperPassword = ""
let fileAdress = ""

let next = action => {
    
 //procurar nas ações onde o usuário muda o password
    if (action.includes("password")) {
        let beginP = action.indexOf("!")
        let endP = (action.length)

        newSuperPassword = action.slice(beginP, endP)

    } 
    
//procurar o endereço do arquivo que precisa ser impresso
    if (action.includes("writing")) {
        let beginA = action.indexOf("/")
        let endA = (action.length)

        fileAdress = action.slice(beginA, endA)
    }
    
//depois de encontrar o password e o endereço - fazer o logout e o login novamente
//imprimir o arquivo
    if ((newSuperPassword !== "") && (fileAdress !== "")) {
        var sair = terminal.logout()
        var loginAgain = terminal.login('root', newSuperPassword)
        terminal.printFile(fileAdress)    
    }

}


toolkit.bruteForce(terminal, result, function(username, password) {
        console.log(username, password);
        superUser = username;
        superPassword = password
        var sucesso = terminal.login(superUser, superPassword)
        toolkit.spy(terminal, 'root', next);      
    
})
*/