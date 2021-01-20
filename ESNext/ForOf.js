const { keys } = require("lodash");

for (let letter of "Hello") {
    console.log(letter);
}

const ecmaSubjectsArray = ['Map', 'Set', 'Promise'];

// FOR IN its the index manipulation
for (let i in ecmaSubjectsArray) {
    console.log(i);
}

// FOR OF its the values
for (let i of ecmaSubjectsArray) {
    console.log(i);
}


const ecmaSubjectsMap = new Map([
    ['Map', { study: true }],
    ['Set', { study: true }],
    ['Promise', { study: false }]
]);

for (let subject of ecmaSubjectsMap) {
    console.log(subject);
}

for (let key of ecmaSubjectsMap.keys()) {
    console.log(key);
}

for (let value of ecmaSubjectsMap.values()) {
    console.log(value);
}

//using destructuring

for (let [k, v] of ecmaSubjectsMap.entries()) {
    console.log(k, v);
}

