const marvel_heros = ["thor", "iron man", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//concat
// const allhero = marvel_heros.concat(dc_heros);
// console.log(allhero);

//spread Operator
// const all_new_heros = [...marvel_heros, ...dc_heros]; // merged two array
// console.log(all_new_heros);
//concat and spread Operator are same but in ral world spread is use more

// const another_array = [1, 2, 3, [4, 5, 6], 7, [2, 3, 4], 9, 10];
// const new_array = another_array.flat();
// console.log(new_array);

// console.log(Array.isArray["sabin"]); //false
// console.log(Array.from("sabin")); //it will convert string to array

let score = 100;
let name = "sabin";
let obj = {
  name: "sabin",
  age: 28,
};

let convert = Array.of(score, name, obj); // it will cconvert into  an array
console.log(convert);
