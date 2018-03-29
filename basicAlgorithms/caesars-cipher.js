// console.log('F'.charCodeAt(0));
// helpful link https://www.asciitable.com/
function rot13(str) { // LBH QVQ VG!
  var letters = str.split('');
//   console.log(letters);
  
  return letters.map(function(letter){
    letter = letter.charCodeAt();
    console.log(letter);
    if(letter >= 65 && letter < 78){
      letter += 13;
    } else if (letter >= 78 && letter < 91){
      letter -= 13;
    }
    return String.fromCharCode(letter);
  }).join("");
}
                    

// Change the inputs below to test
rot13("SERR PBQR PNZC");






// Test Cases
// rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
// rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
// rot13("SERR YBIR?") should decode to "FREE LOVE?"
// rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."