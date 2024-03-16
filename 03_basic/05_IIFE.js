// IIFE (immediately  Invoked Function Expression)

//we used iffe  to remove global scope pollution.  (golab scope bat aaune sakne problem lai slove garxa)

// example
(function run() {
  console.log("Hello World");
})(); // alwz use semicolon at last to end IFFE

// () () one () for function declertion, one () for function execution
((num1, num2) => {
  console.log(num1 + num2);
})(2, 3);
