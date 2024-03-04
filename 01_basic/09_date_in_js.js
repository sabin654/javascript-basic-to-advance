const date = new Date();
const number = new Number();
const string = new String();

// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleTimeString());
// console.log(date.toJSON());
// console.log(date.toISOString);

console.log(typeof date); //object
console.log(typeof number); //object
console.log(typeof string); //obejct

// ******************************************************************
//how to create a new date of urself

// let myCreatedDate = new Date(2024, 4, 23);
// let myCreatedDate = new Date(2024, 5, 23, 8, 6, 2);

const myTimeStamp = Date.now(); //just give real time date
console.log(myTimeStamp);

let myCreatedDate = new Date("2024-01-23"); //create own date withh string
// console.log(myCreatedDate.toLocaleString());
let time = myCreatedDate.getTime(); //imp licitly it is converted into milliseconds
console.log(time);

// console.log(myTimeStamp);
//console.log(Math.floor(Date.now() / 1000));  //in Second

let newDate = new Date();
// console.log(newDate);
console.log(newDate.getMonth());
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(`the time is ${Math.floor(newDate.getMonth() / 1000)}`);

newDate.toLocaleString("default", {
  weekday: "long",
}); //impotant
console.log(newDate);
