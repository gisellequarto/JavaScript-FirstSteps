let isAtivo = false;

console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);


console.log("os verdadeiros...");
isAtivo = 1; //tem o valor de true
console.log(!!isAtivo); //para ter o valor real... dupla negação
console.log(!!3); //numero inteiro
console.log(!!-1);
console.log(!!" "); // string preenchida, mesmo que seja com espaço apenas
console.log(!!"texto");
console.log(!![]); //array vazio
console.log(!!{}); //objeto vazio 
console.log(!!Infinity); 
console.log(!!(isAtivo = true)); //se o valor atribuído é true
console.log(!!(isAtivo = 2)); // ou coisa que o valha


console.log("os falsos...");
console.log(!!0); //zero
console.log(!!""); //string vazia
console.log(!!NaN); 
console.log(!!null);
console.log(!!undefined);
console.log(!!(isAtivo = false));//se o valor atribuído é false
console.log(!!(isAtivo = 0)); // ou coisa que o valha


console.log("Para finalizar...");
console.log(!!("" || null || 0 || " ")); //vai dar true pq o ultimo é true
console.log("" || null || 0 || "epa" || 123); //sem a dupla negação ele retorna o primeiro que é verdadeiro

let nome = "";
console.log(nome || "Desconhecido"); // se nome for falso ...vai imprimir o desconhecido

let nome2 = "Joana";
console.log(nome2 || "Desconhecido"); // se nome for true ...vai imprimir o nome
