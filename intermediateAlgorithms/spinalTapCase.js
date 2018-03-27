// 1 use regex to recognize the space or separators between words
// 	Use patterns & flags

// 2 replace each space or separator with a dash

// 3 convert string to lowercase

// 4 return string


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var result = str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\W/g, '-').replace(/[_]/g, '-').toLowerCase();
  
  return result;
}

spinalCase('This Is Spinal Tap'); 