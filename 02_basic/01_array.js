// array

//we can decreate array like this  ::
const arr = [0, 2, 3, 4, 5, 5];

const arr2 = ["hey", "bee", "cee"];

// const ary3 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(ary3[2]);

// method

// ary3.push(2); //add 2 in last
// console.log(ary3);

// ary3.pop(); // remove from last
// console.log(ary3);

// ary3.unshift(0); // add 0 on first
// console.log(ary3);

// ary3.shift(0); // remove 0 from first
// console.log(ary3);

// console.log(ary3.includes(5)); // always in boolean value : true or false
// console.log(ary3.indexOf(2)); // if value include than it will give index if not than alswzy say -1

// slice and Splice

ary3 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(ary3); //output // [1, 2, 3, 4, 5,6, 7, 8, 9]

const new1 = ary3.slice(1, 6); // from index  1 to 6  not a value // it will take element between the given range
console.log("A", new1); //  output:: [ 2, 3, 4, 5, 6 ]
console.log(ary3); // output::  [1, 2, 3, 4, 5,6, 7, 8, 9]

const new2 = ary3.splice(1, 6); // from index 1 to 6 but also print the last last index but the original value will change
console.log("B", new2); // output:: [2,3,4,5,6,7]
console.log(ary3); //  output:: [1,8,9]
