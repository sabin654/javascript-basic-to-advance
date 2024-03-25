// we always use forEach loop for array  iteration
// forEach(item,index,arr)
const array = ["sabin", "rahul", "ram"];
// array.forEach((val, index) => {
//   console.log(val, index);
// });

const array2 = [
  { name: "sabin", age: 23 },
  { name: "rahuk", age: 18 },
];
array2.forEach((val) => {
  console.log(val.name, val.age);
});
