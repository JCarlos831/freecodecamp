// 1 - Get the first letter = firstChar *

// 2 - Check if next character is the next letter in the alphabet *
// 3 - Check if another character is available *
// 		4 - Repeat (loop) line 2 with next character *
// 	5 - Else
// 		6 - Return undefined
// 7 - Else
// 	8 - Return expected character *
    
    
function fearNotLetter(str) {
  var firstLetter = str[0];
  
//   console.log(firstLetter.charCodeAt(0));
//   console.log('code for b is', 'b'.charCodeAt(0));
  
  for(var i=0; i < str.length-1; i++){
    if (str.charCodeAt(i+1) === str.charCodeAt(i)+1) {
//       console.log(str[i]);
      console.log("next character is the next alphabetically");
    } else{
      console.log("found missing character");
      return String.fromCharCode(str.charCodeAt(i)+1);
    }
  }
//   console.log("hey");
//   return undefined;
}

fearNotLetter("abcde");