//Arrow Function

const sum = (a, b) => a + b;
console.log(sum(2, 3));

//Arrow Function (this always to global)
const lexical1 = () => console.log(this == exports);
const lexical2 = lexical1.bind({}); //even with bind... always global
lexical1();
lexical2();

// default param
function test(text = 'i am a Default text') {
    console.log(text);
}

test();
test(undefined);
test(null);
test("I am stronger than default!");


// rest operator (turn the params in a array)
function total(...numbers) {
    let total = 0;
    numbers.forEach(n => total += n);
    return total;
}
console.log(total(2, 3, 4, 5, 6, 7));