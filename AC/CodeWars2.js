/*Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. 
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.*/

let teste1 =   [67, 24, 47, 31, 86, 43, 31, 13]
let teste2 =  [4489, 577, 2209, 961, 7396, 1849, 961, 169]

function comp(array1, array2) {
let raiz = n => Math.sqrt(n)
let raizExata = n => Number.isInteger(n)

let booleanArray1 = (Array.isArray(array1) && (array1.length > 0))
let booleanArray2 = (Array.isArray(array2) && (array2.length > 0))

if (booleanArray1 && booleanArray2) {
    let arrayNovo1 = array1.sort()
    let arrayNovo2 = array2.map(raiz).filter(raizExata).sort()
    
    console.log (arrayNovo1)
    console.log (arrayNovo2)


    if (arrayNovo1.lenght !== arrayNovo2.lenght) {
      return false
    }
    for (let i = 0; i < arrayNovo1.length; i++) {
      if (arrayNovo1[i] != arrayNovo2[i]) {
           return false
      }
    }
    

} else {
    return false
}  

 return true
}

console.log(comp(teste1, teste2))