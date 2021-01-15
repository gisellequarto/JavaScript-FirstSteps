// spread with objects

const worker = {name: 'Maria', salary: 1234.56}

//it´s a clone... if you change the worker... the clone remain the same
const clone =  {active: true, ...worker}

console.log(clone);


// spread with array
const groupA = ['John', 'Peter', 'Anne'];
const finalGroup = ['Sabrina', ...groupA, 'Rafaela'];
console.log(finalGroup);
