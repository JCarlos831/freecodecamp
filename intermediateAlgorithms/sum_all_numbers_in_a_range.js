function sumAll(arr) {
  // get max value in array
  var max = Math.max.apply(null, arr);
  // get min value in array
  var min = Math.min.apply(null, arr);
  // declare an empty array
  var sumArr = [];
  
  // get range of numbers from min upto and including max into an array
  for(min; min <= max; min++){
    sumArr.push(min);
  }
  
  // use reduce method to sum all numbers in array
  var sum = sumArr.reduce(function(total, num){
    return total + num;
  });
  
  return sum;
}

sumAll([1, 4]);