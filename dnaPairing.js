// 1 split input into a character array

// 2 get first character = firstChar

// 3 check if firstChar is G
// 	Create pair [G, C]
// 4 else if firstChar is C
// 	Create pair [C, G]
// 5 else if firstChar is T
// 	Create pair [T, A]
// 6 else if firstChar is A
// 	Create pair [A, T]

// End if

// 7 Push to DNA Strand

// 8 Repeat (loop) step 3 for additional characters

// 9 Return DNA strand



function pairElement(str) {
//   var firstChar = str[0];
  var dnaArray=[];
  
  for(i=0; i<str.length; i++)
    if(str[i]==='G'){
      dnaArray.push([str[i],"C"]);
    }else if(str[i]==='C'){
      dnaArray.push([str[i],"G"]);
    }else if(str[i]==='T'){
      dnaArray.push([str[i],"A"]);
    }else{
      dnaArray.push([str[i],"T"]);
    }
  return(dnaArray);
  

//   return dna;
}

pairElement("ATCGA");