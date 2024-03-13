// function addnum(num1, num2) {
//   console.log(num1 + num2);
// }
// addnum(3, 9);

//....................................................................
// function addnum(num1, num2) {
//   return num1 + num2;
// }

// let newnum = addnum(3, 4);
// console.log("result ", newnum);

// Falsy values are:

// undefined
// null
// 0
// NaN (Not-a-Number)
// '' (empty string)
// false

// function loginuser(username) {
//   if (username === undefined) {
//     //or if(!username )  // both are saying same thing
//     console.log("please enter an username");
//     return;
//   } else {
//     return `${username} just logged in`;
//   }
// }

// let login = loginuser("sabin");
// console.log(login);

// or;
// console.log(loginuser("heeloo"));

function loginuser(username = "sam") {
  //if we use  username = "sam" it will never be undefined by default , automatically the value will be sam
  if (!username) {
    console.log("please enter an username");
    return;
  } else {
    return `${username} just logged in`;
  }
}
console.log(loginuser("sabin"));
