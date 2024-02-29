const account_id = 12345;
var account_name = "sabin bhandari";
let account_address = "gongabu";

account_city = "kathmandu";

// account-id =123;
// we cannot change const
account_name = "sabin ";
account_address = "newtourk";
// always use let , donot use var beacuse var has issue of block scope and function scope

console.log("The id is ", account_id);

console.log("address ", account_address);

console.table([account_id, account_name, account_address, account_city]);
