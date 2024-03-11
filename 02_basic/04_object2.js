// obejct singleton or constructor
const tinderuser = new Object(); // singleton object
const tinderusers = {}; // non singleton and object literal

const Fbuser = new Object();
Fbuser.name = "John Doe";
Fbuser.age = 25;
// console.log(Fbuser);

// const regularuser = {
//   email: "john@gmail.com",
//   fullname: {
//     username: {
//       Fullname: "John hub",
//       firstName: "John",
//       lastName: "Hub",
//     },
//   },
// };

// console.log(regularuser.fullname.username.firstName);
// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "c", 4: "d" };

// const mergedObj = { ...obj1, ...obj2 }; // merged two object (spread Operator)
// console.log(mergedObj);
// //or
// const merge = Object.assign({}, obj1, obj2);
// console.log(merge);

// when data is come from database it will look like this where (array bhitra object)
const user = [
  {
    id: 1,
    email: "abc@xyz.com",
    "first name": "sabin bahndari",
  },
  {
    id: 2,
    email: "abc@xy.com",
  },
  {
    id: 3,
    email: "abc@xz.com",
  },
];

console.log(user[0]["first name"]); // first array and than objecct
console.log(user[1].email);
console.log(user[2].email);

//
console.log(Fbuser);
// mostly used very imp concept
console.log(Object.values(Fbuser)); // intreting fact is : the datatype will be in array form like this [ 'John Doe', 25 ]
console.log(Object.keys(Fbuser)); // we can acees key also in arrray form like this ['name','age']
console.log(Object.entries(Fbuser)); //we can access both the value and key ['name', 'John Doe'],['age', '25'] in array

console.log(Fbuser.hasOwnProperty("name")); // check whether its exist in object  or not

const hey = new Object();
hey.name = "sabin";
hey.age = 22;
