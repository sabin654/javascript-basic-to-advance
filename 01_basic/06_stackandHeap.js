// stack =(Primitive Datatypes) and heap =(non-primitive datatype)

// first let see for stack memory ( Primitives )
let num1 = 123;
let num2 = num1;
num2 = 9813;
// console.log("num2 =" + num2);
// console.log("num1= " + num1);

//in stack , original value is not change , it will create a copy only

//  let see for Heap Memory  ( Non-Primitives )

let per1 = {
  name: "sabin",
  age: 21,
};
let per2 = per1;

per2.name = "hey";

console.log(per2.name);
console.log(per1.name);

// in Heap , the value is chnage , because of references
