//let and const
{
    var a = 2;
    let b = 3;
}

console.log(a);
//console.log(b);  not possible

//Template String (better than normal String)

const product = 'IPad';
console.log(`${product}
é caro`);

//Destructuring
const [w, o, ...rds] = "Giselle";
console.log(w, o, rds);

const [x, y] = [1, 2, 3];
console.log(x, y);
const [t, , v] = [1, 2, 3];
console.log(t, v);

const {age: ag, name} = {name: "Giselle", age: 37};
console.log(ag, name);

