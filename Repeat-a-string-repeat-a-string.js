
function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeatedString='';
  if (num < 0){
    repeatedString = '';
  } else if (num > 0){
    repeatedString = str +=repeatStringNumTimes(str, (num-1));
  }
  
  return repeatedString;
}

repeatStringNumTimes("abc", 3);