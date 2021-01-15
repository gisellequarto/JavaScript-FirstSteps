// ES8 : Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3 };

console.log(Object.values(obj));
console.log(Object.entries(obj));

// Improves in Literal  Notacion
const name = "José";
const person = {
    name,
    hello() {
        return "Hello, everyone!"
    }
}

console.log(person.name, person.hello());

//Class
class Animal {}
class Dog extends Animal {
    bark() {
        return "Au! au!"
    }
}

console.log(new Dog().bark());