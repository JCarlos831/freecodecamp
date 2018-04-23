function sumFibs(num) {
  
  var prev = 0;
  var curr = 1;
  var odds = 0;
  
  while (curr <= num)
    {
      if (curr % 2 !== 0)
        {
          odds += curr;
        }
      
        var oddsAdded = curr + prev;
        console.log(oddsAdded);
        prev = curr;
        curr = oddsAdded;
    }
  return odds;
}
