//helpful link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function largestOfFour(arr) {
  // You can do this!
  
  var newArray=[];

  var a = Math.max.apply(null, arr[0]);
  var b = Math.max.apply(null, arr[1]);
  var c = Math.max.apply(null, arr[2]);
  var d = Math.max.apply(null, arr[3]);
  
  newArray.push(a);
  newArray.push(b);
  newArray.push(c);
  newArray.push(d);
  return newArray;
  
  //Come back to this one and do with a for loop or two...

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);