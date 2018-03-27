function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArray = [];
  for (var i = 0; i < arr.length; i+=size) {
	newArray.push(arr.slice(i , i+size));
  }
  return newArray;
}

// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   var newArray1 = [];
//   var a = arr.slice(0,size);
//   var b = arr.slice(size, (size*2));
//   var c = arr.slice()

//   newArray1.push(a);
//   newArray1.push(b);
//   return newArray1;  
// }

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);

// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   var newArray2 = [];
//   var d = arr.slice(0,size);
//   var e = arr.slice(size, (size*2));
//   var f = arr.slice((size*2), (size*3));
  
//   newArray2.push(d);
//   newArray2.push(e);
//   newArray2.push(f);
//   return newArray2;  
// }

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);

// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   var newArray3 = [];
//   var g = arr.slice(0,size);
//   var h = arr.slice(size, (size*2));
//   var i = arr.slice((size*2), (size*3));
//   var j = arr.slice((size*3), (size*4));
//   var k = arr.slice((size*4), (size*5));
  
//   newArray3.push(g);
//   newArray3.push(h);
//   newArray3.push(i);
//   newArray3.push(j);
//   newArray3.push(k);
//   return newArray3;  
// }

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

// Additional test cases:

// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].  Pass newArray1
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].  Pass newArray1
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].  Pass newArray2
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]]. Pass newArray1
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]]. Pass newArray2
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]. pass newArray2
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]. pass newArray3