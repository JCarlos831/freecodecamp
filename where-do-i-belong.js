// Helpful link --->  https://www.w3schools.com/jsref/jsref_sort.asp 
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(function(a, b){return a-b});
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);