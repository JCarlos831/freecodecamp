// function reverseString(str) {
//   var strArray = [];
//   strArray = str.split("");
// //   console.log("splitting the string");
// //   console.log(strArray);
//   strArray.reverse();
// //   console.log("after reverse");
// //   console.log(strArray);
//   var reverseStr = strArray.join("");
// //   console.log("after join");
// //   console.log(reverseStr);
//   return reverseStr;
// }

// console.log(reverseString("Juan Carlos Montoya"));

// function reverseString(str) {
//   str = str.split("");
// //   console.log("splitting the string");
// //   console.log(strArray);
//   str.reverse();
// //   console.log("after reverse");
// //   console.log(strArray);
//   return str.join("");
// //   console.log("after join");
// //   console.log(reverseStr);
// }

// reverseString("hello");


function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");
