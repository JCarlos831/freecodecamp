//Works for test 1, 8, 9
function mutation(arr) {
  return arr[0].indexOf(arr[1]) !== -1;
}

mutation(["hello", "hey"]);


// Works for tests 2-7
function mutation(arr) {
  return arr[0].indexOf(arr[1]) == -1;
}

mutation(["hello", "hey"]);


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