function diffArray(arr1, arr2) {
// Same, same; but different.

  // Use concat to combine arrays into 1 array
  var newArr = arr1.concat(arr2);
  // console.log(newArr) [1,2,3,5,1,2,3,4,5] ; 
  
  // Check for repeat values, if not a repeat, return value
  return newArr.filter(function(value, index, array) {
    if(array.slice(index+1).indexOf(value) === -1 && array.slice(0, index).indexOf(value) === -1){
      return value;
    }
  });
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
