// This one needs some work

var newStr;
function translatePigLatin(str) {
  
  if (str.charAt(0) === 'a' || str.charAt(0) === 'e' || str.charAt(0) === 'i' || str.charAt(0) === 'o' || str.charAt(0) === 'u'){
    newStr = str + "way";
  } else if (str.substr(0,2) === 'gl'){
    newStr = str.slice(2, str.length) + str.charAt(0) + str.charAt(1) + "ay";
  } else {
    newStr = str.slice(1, str.length) + str.charAt(0) + "ay";
  }
  return newStr;
}

translatePigLatin("glove");