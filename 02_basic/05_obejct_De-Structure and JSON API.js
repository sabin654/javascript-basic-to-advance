// // Destructuring

// let course = {
//   courseName: "Web Development",
//   price: 1000,
//   courseTeacher: "sabin",
// };

// console.log(course.courseName); // normal way to access object

// // Destructuring

// const { courseName, price, courseTeacher } = course;
// console.log(courseName, price, courseTeacher); // destructured way

// // or we can also give short name instead of courseName , courceteacher
// const { courseName: name, courseTeacher: teacher } = course;
// console.log(name, teacher);

// // more example

// const hotel = {
//   hotelName: "Hyatt Regency",
//   hotelPrice: "$ 300",
//   hotelLocation: "Kathmandu",
// };

// const { hotelName, hotelPrice, hotelLocation } = hotel;
// console.log(
//   `Hotel Name: ${hotelName} \nHotel Price : ${hotelPrice} \nLocation :${hotelLocation}`
// );

//API can be seen in obejct format or Array format

//JSON  Object look like this both "" which means both key and value are in String
// Object FOrmat
// {
//     "name":"sabin",
//     "age": 22,
//     "country":"Nepal"
// }

// Array Format

[{}, {}, {}];
