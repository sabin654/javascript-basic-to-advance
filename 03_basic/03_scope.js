// Global scope:
// A variable declared outside a function or block is in the global scope.
// It is accessible from any part of the code, including functions and blocks.
// It exists for the entire lifetime of the program.
let globalVar = "I am a global variable";
function exampleFunction() {
  console.log(globalVar); // accessible
}
exampleFunction(); // logs: I am a global variable
console.log(globalVar);

//................................................................................
// Local scope:
// A variable declared inside a function or block is in the local scope.
// It is only accessible from within the function or block it is declared in.
// It exists only for the lifetime of the function or block it is declared in.
function exampleFunction() {
  let localVar = "I am a local variable";
}

//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "sabin";

  function two() {
    const website = "gogle";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()

if (true) {
  const username = "sabin";
  if (username === "sabin") {
    const website = " google";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting  ++++++++++++++++++

console.log(addone(5));
function addone(num) {
  return num + 1;
}
// console.log(addTwo(3));
// const addTwo = function (num) {
//   return num + 2;
// };
