// Primitive datatypes ,

// number=
//String =""
//boolean="true" or "fase"
//null = standalone value (empty but not zer0)
//undefined =>
//symbol=> unique
//bigInt

const id = Symbol("1");
const aid = Symbol("1");
// console.log(id === aid);

const bigNumber = 10220033030300300003n; //its big int

// reference types or nonprimitive datatypes
//array ,Objects, functions

//all the non primitive datatypes are object  in js
const hero = ["sabin", "shakti", "rahul"];

const obj = {
  name: "hey",
  aage: 10,
};

function a() {
  console.log("hello");
}
console.log(typeof hero); //object datatype
console.log(typeof obj); //object
console.log(typeof a); //function object

// https://262.ecma-international.org/5.1/#sec-11.4.3
