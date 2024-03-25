//for of loop
// array string
// ["", "", ""]
// array objecet
// [ ({}, {}, {})];
// .............................................................
// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(num);
// }
//......................................................
// const greeting = "hello";
// for (const greet of greeting) {
//   console.log(`Greeting is ${greet}`);
// }

//................................................................
//maps :it is object ,  alwayz represenr unique value (it means kaileni double vlaue garna mildaina)
//shft option and downarrow dorect copy paste

// const map = new Map();
// map.set(1, "Nepal");
// map.set(2, "India");
// map.set(3, "Us");
// map.set(4, "uk");

// console.log(map);

// for (const key of map) {
//   console.log(key);
// }
// output: [1, "Nepal"][(2, "India")][(3, "Us")][(4, "uk")];

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }
// // output:
// 1 :- Nepal
// 2 :- India
// 3 :- Us
// 4 :- uk
//............................................

// object
// const obj = {
//   name: "sabin",
//   age: 23,
//   address: "Ktm",
// };
// for (const { value } of obj) {
//   console.log(value);
// }
// output: it will not itterate or work becuas forof is not support by object
//...................................................

// for in loop in object
// const obj1 = {
//   js: "javascript",
//   cpp: "c++",
//   rb: "rubby",
// };
// for (const key in obj1) {
//   console.log(`${key}, :-  ${obj1[key]}`);
// }
// // output/
// js, :-  javascript
// cpp, :-  c++
// rb, :-  rubby
//...................................................

// for in loop in array
// const arr = ["js", "cpp", "rb"];
// for (const key in arr) {
//   console.log(`Index ${key} represent ${arr[key]}`);
// }
// // output/
// Index 0 represent js
// Index 1 represent cpp
// Index 2 represent rb
//forof loop > direct value print but forin loop > give key and value both
//...................................................

// for in loop in maps

// const map = new Map();
// map.set(1, "Nepal");
// map.set(2, "India");
// map.set(3, "Us");
// map.set(4, "uk");

// for (const key in map) {
//   console.log(key);
// }
// // for in loop in maps will not work and itterate

//...................................................
// we alwasy use forin loop for object
