var funcs = [];

//closure crazy things
for (let i = 0; i < 3; i++) {

  // push will create new execution context with reference to i
  funcs.push(function() {
    console.log(i);
  });

}


// this output is with you declare i inside the for loop as a VAR
funcs[0](); // 3
funcs[1](); // 3
funcs[2](); // 3