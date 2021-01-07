/*In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.*/


let text = 'The narwhal bacons at midnight.'

text = text.toLowerCase()
let result = ""
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']



for (let i = 0; i < text.length; i++) {
    if (alphabet.includes(text.charAt(i))) {
       for (let n in alphabet) {
           if (alphabet[n] == text.charAt(i)) {
               result += (`${parseInt(n) + 1} `) 
           }
       }
    }
}

//o desafio estava dando problema no espaço final do resultado
console.log("*" + result.trim() + "*")







