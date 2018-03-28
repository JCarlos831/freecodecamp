// Return the remaining elements of an array after chopping off n elements from the head.

// The head means the beginning of the array, or the zeroth index.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// Array.prototype.slice()
// Array.prototype.splice()


function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0, howMany);
  return arr;
}

slasher(["Amazon", "Apple", "Google"], 1);