// helpful link https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call
function convertHTML(str) {
  // &colon;&rpar;
  
  var replaceChars={ "&":"&amp;" , "<":"&lt;" , ">":"&gt;" , "\"":"&quot;" , "'":"&apos;" };
  return str.replace(/&|<|>|"|'/g,function(match) {return replaceChars[match];});
}

convertHTML("Hamburgers < Pizza < Tacos");