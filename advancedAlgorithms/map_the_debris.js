// Return a new array that transforms the element's average altitude into their orbital periods.
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
//   var a = (earthRadius + arr[0].avgAlt)**3;
//   var pie = 2*Math.PI;
//   var t = Math.round(pie * Math.sqrt(a/GM));
  
  var size = Object.keys(arr).length;
 
  for (var i = 0; i < size; i++)
  {
    var t = Math.round((2*Math.PI)*Math.sqrt(((earthRadius + arr[i].avgAlt)**3)/GM));
  
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = t;
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
// orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].