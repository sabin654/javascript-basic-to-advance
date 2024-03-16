// this make  current context
// const user = {
//   name: "sabin",
//   age: 22,
//   greetingmessage: function () {
//     console.log(`Hello! My name is ${this.name} and i am ${this.age}`);
//     console.log(this);
//   },
// };
// user.greetingmessage();
// user.name = ["bill"];
// user.greetingmessage();

// // note:this keyword is not so use  in function
// function run() {
//   let num = 2;
//   console.log(this.name);
// }
// run();
// //ouput= undefined
// // note:this keyword is not so use  in function

// let num1 = function () {
//   let num = 2;
//   console.log(this.name);
// };

// num1();
// //ouput= undefined
// // note:this keyword is not so use  in function

// //....................................arrow function
// const num2 = () => {
//   let num2 = 3;
//   console.log(this.name);
// };
// num2();
// wich means thta this keyword is not use in  arrow functions too

// arrow funtion decleartaion

// first way
// const num = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(num(1, 2));

// // second way // widely used in react
// const number = (num1, num2) => (num1 + num2); // if we dont use {}backet . we dont have to write return , it will diresctly understand
// console.log(number(1, 3));

// first way  syntax.........
// ()=>{
//     return
// }
// second way .........
// ()=>();//  no return required

// object return in arrow fucntion
const abc = () => ({ username: "sabin" });
console.log(abc());
//
const bc = () => [1, 2, 3, 4];
console.log(bc()[0]);
