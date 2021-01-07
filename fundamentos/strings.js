const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); //coisa estranha
console.log(escola.charCodeAt(3)); //tabela Unicode (html)
console.log(escola.indexOf("3")); //mostra qual o index do caractere que vc procura
console.log(escola.substring(2)); //vai do 2 até o final

console.log(escola.substring(0, 3)); //vai do 0 até o 2

console.log("Escola ".concat(escola).concat('!')); //direto de um literal
console.log("Escola " + escola + '!'); //com o +


console.log(escola.replace(3, "e"));
console.log(escola.replace(/\d/, "e")); //substituir os digitos por e
console.log(escola.replace(/\w/, "e")); //substituir o primeiro
console.log(escola.replace(/\w/g, "e")); //substituir tudo

console.log("Ana, Maria, Pedro".split(", ")); //transforma em Array
console.log("Ana, Maria, Pedro".split(/, /)); //transforma em Array
