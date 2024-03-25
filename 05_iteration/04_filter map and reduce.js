//  filter ...................................................

// const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// //note array function use garda {} use garya xa bahne jaile return garnai parxa yedi () use garya xa bahne return garnu pardiana
// // {}use garera
// const newarry = arry.filter((item) => {
//   return item > 3;
// });
// console.log(newarry);
// // {} use nagarda
// const newarry2 = arry.filter((item) => item > 5);
// console.log(newarry2);

// const array1 = ["sabin", "rahul", "he", "she", "hero", "gunda"];
// const neww = array1.map((item) => item);
// console.log(neww);

// const books = [
//   {
//     name: "To Kill a Mockingbird",
//     publishDate: 1960,
//     type: "Fiction",
//   },
//   {
//     name: "1984",
//     publishDate: 1949,
//     type: "Dystopian",
//   },
//   {
//     name: "The Great Gatsby",
//     publishDate: 1925,
//     type: "Fiction",
//   },
//   {
//     name: "Pride and Prejudice",
//     publishDate: 1813,
//     type: "Romance",
//   },
// ];

// let user = books.filter((books) => {
//   return books.publishDate > 1850 && books.type === "Fiction";
// });
// console.log(user);

// user = books.filter((books) => books.name === "1984");
// console.log(user);
//................................................................

//  map ...................................................

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14];
// const num1 = num.map((item) => item + 10);
// console.log(num1);

// map chaining
// const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50];
// const valuee = value
//   .map((val) => val)
//   .map((val) => val * 10)
//   .map((val) => val + 1)
//   .filter((val) => val >= 81);

// console.log(valuee);

//  reduce ...................................................
// mostly used in adding all the array total , mostly in bill

// syntax : abc.reduce((accumulator,currentvalue)=> (), initialValue)

// const value = [1, 2, 3, 4];
// const newval = value.reduce((acc, curval) => {
//   return acc + curval;
// }, 2);
// console.log(newval);
// // or......................................................
// const mynum = [1, 2, 3, 4, 20, 100, 400, 10000, 1202, 20];
// const newnum1 = mynum.reduce(
//   (accumulator, currentvalue) => accumulator + currentvalue,
//   0
// );
// console.log(newnum1);

const shoppingcart = [
  {
    itemname: "jscourse",
    price: 1200,
  },
  {
    itemname: "c++",
    price: 1000,
  },
  {
    itemname: "java",
    price: 2000,
  },
];

const totalbill = shoppingcart.reduce((acc, curItem) => acc + curItem.price, 0);
console.log(totalbill);
