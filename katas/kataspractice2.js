function GetSum( a,b )
{
  if (a == b){
	  return a;
	  }

  else if (a>b) {
	  var sumAB = b;

	  var newNumber = b;

	  while (newNumber<a) {
		  sumAB = sumAB + (sumAB+1);
		  newNumber++;
	    }

    return sumAB;
	  }

  else {
	  var sumAB = a;

	  var newNumber = a;

	  while (newNumber<b) {
  		sumAB = sumAB + (sumAB+1);
  		newNumber++;
		  }

    return sumAB;
	  }

	}




// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2



/*
 if (a-b >0) {
 	numLength = a-b;
 	sumAB = b;
 	}

 else if (b-a > 0) {
 	numLength = b-a;
 	sumAB = a;
 	}

else {return a;};



for(i=0; i<numLength; i++) {
	sumAB = sumAB + (sumAB+1);
}

return sumAB;
*/





/*  
numLength = a-b

if(numLength < 0) {

numlength = -numLength

ret
*/