//singleton
//==============================
//object literal

const sym = Symbol("key1");

const user = {
  name: "sabin bhandari",
  "full name": "sabin bhandari",
  [sym]: "I am private",
  age: 25,
  city: "ktm",
  country: "Nepal",
  lastlogin: ["sunday", "monday"],
  gretting: function () {
    console.log(`hello ${this.name} ! Your Age  is ${this.age}`);
  },
};
// console.log(user.age); // not a good way to access object
// console.log(user["name"]); //good  way of accessing the property in an object
// console.log(user["full name"]);
// console.log(user["lastlogin"][0]); //accessing array inside the object
// console.log(user[sym]); // best way to acess Symbol

// user.name = "sabin Bhandari";
// Object.freeze(user); // this will freeze it means name sabin bhandari will never be chnage
// console.log(user);
user.gretting(); // call the greeting function

const syms = Symbol("secret");
const name = {
  "full name": "sabin Bhandari",
  [syms]: "ID number 1",
};
console.log(name["full name"]);
console.log(name[syms]);
