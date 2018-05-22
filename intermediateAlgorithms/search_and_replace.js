function myReplace(str, before, after) {
  var replacee = before;
  var replacer;
  
  if (before[0] === before[0].toUpperCase()){
    replacer = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    replacer = after;
  }
  
  var re = new RegExp(replacee);
  return str.replace(re, replacer);
}

myReplace("His name is Tom", "Tom", "john");