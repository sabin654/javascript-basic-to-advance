// Rest Operator (...num1)
function addnum1(...num1) {
  // rest operator
  return num1;
}
console.log(addnum1(1, 2, 3, 4, 5));
//output :  [ 1, 2, 3, 4, 5 ] // all the value ies print in array form

function addnum(a, b, ...num1) {
  // rest operator
  return num1;
}
console.log(addnum(1, 2, 3, 4, 5));
//output :  [ 3, 4, 5 ] // all the value ies print in array form

// pass object in function
//...........................................................................
const person = {
  name: "sabin",
  age: 20,
};
const person2 = {
  name: "rahul",
};

function handleObject(anyobject) {
  console.log(`Name is ${anyobject.name}`);
}
handleObject(person);
handleObject(person2);

//or we can pass obejct direct like this:

function handleObject2(anyobject) {
  console.table(
    `Name: ${anyobject.name} \nAge: ${anyobject.age} \nAddress: ${anyobject.address}`
  );
}
handleObject2({
  name: "sabin",
  age: 23,
  address: "ktm",
});

//// pass array in function

const array = [100, 200, 300];
function handlarray(getarray) {
  return getarray[0];
}
console.log(handlarray(array));

// or

function handlarray(getarray) {
  return getarray;
}
console.log(handlarray([10, 20, 30]));
