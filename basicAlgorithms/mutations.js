//Works for all

function mutation(arr) {
//  return arr[0].toLowerCase().indexOf(arr[1].toLowerCase()) == -1;
//  using toLowerCase to make comparison easier
  var str0 = arr[0].toLowerCase();
  var str1 = arr[1].toLowerCase();
  
  for(var i=0; i < str1.length; i++) {
    if(str0.indexOf(str1[i]) === -1)
       return false;
       }
    return true;
}

mutation(["hello", "hey"]);

// //Works for test 1, 8, 9
// function mutation(arr) {
//   return arr[0].indexOf(arr[1]) !== -1;
// }

// mutation(["hello", "hey"]);


// // Works for tests 2-7
// function mutation(arr) {
//   return arr[0].indexOf(arr[1]) == -1;
// }

// mutation(["hello", "hey"]);

// // Works for tests 2,4,5,7,8,9
// function mutation(arr) {
// //  return arr[0].toLowerCase().indexOf(arr[1].toLowerCase()) == -1;
// //  using toLowerCase to make comparison easier
//   var str0 = arr[0].toLowerCase();
//   var str1 = arr[1].toLowerCase();
  
//   for(i=0; i < str0.length; i++) {
//     console.log(i);
//     if(str1.indexOf(str0[i]) == -1){
//       return false;
//       }
//     return true;
//   }
// }

// mutation(["hello", "hey"]);


"Test cases";
// mutation(["hello", "hey"]) should return false.
// mutation(["hello", "Hello"]) should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// mutation(["Mary", "Army"]) should return true.
// mutation(["Mary", "Aarmy"]) should return true.
// mutation(["Alien", "line"]) should return true.
// mutation(["floor", "for"]) should return true.
// mutation(["hello", "neo"]) should return false.
// mutation(["voodoo", "no"]) should return false.