const peso1 = 1.0;
const peso2 = Number("2.0");

console.log(peso1, peso2);

//no JS o .0 é descartado... fica como inteiro
console.log(Number.isInteger(peso1));

const avaliacao1 = 9.871;
const avaliacao2 = 6.929;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

//limitar a duas casas decimais
console.log(media.toFixed(2));
console.log(media.toString());

//transformar em binário
console.log(media.toString(2)); 
var teste = 157;
console.log(teste.toString(2)); 