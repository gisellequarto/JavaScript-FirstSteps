//Prefira o LET
var a = 3;
let b = 4;

//no var vc consegue declarar mais de uma vez no mesmo escopo
//ESTRANHO!!!!!!!!!
var a = 30;
b = 40;

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

const c = 5;
//c = 50; não se munda constante

console.log(c);