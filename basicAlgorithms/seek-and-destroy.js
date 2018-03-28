
function destroyer(arr) {
  // Remove all the values
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   console.log(arguments[2]);
  
  for(i = 0; i < arguments[0].length; i++) {
    if(arguments[0][i] === arguments[1] || arguments[0][i] === arguments[2] || arguments[0][i] === arguments[3]){
      delete arguments[0][i];
    }
  }
  var newArr =  arguments[0];
  console.log(arguments[0]);
  newArr = newArr.filter(function(arg){
    return (Boolean(arg) === true);
  });
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// Test Cases
// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
