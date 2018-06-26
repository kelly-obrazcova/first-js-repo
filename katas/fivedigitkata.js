//Code Wars Kata-- Largest Five Digit Number - 7 kyu
//https://www.codewars.com/kata/largest-5-digit-number-in-a-series/train/javascript
//Status: Complete

//description
/*
In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

Adapted from ProjectEuler.net
*/

// function solution(digits){

// 	//convert digit to string

// 	var dString = digits.toString();

	

// 	//get first four digits of string

// 	var currentNumber = dString.substr(0, 4);

// 	return currentNumber;
// }

function solution(digits){
  var dString = digits.toString();
  var i;
  var biggestNumber = 0;

  //iterate through the string and find the biggest number
  
  for(i=0; i<dString.length-4; i++){
  
    var currentNumber = dString.substr(i, 5)
    
    if(biggestNumber<currentNumber){
      biggestNumber = currentNumber;
    }
    
  }
  
  return biggestNumber;
  
}


//sample input: solution(1234567890);
//expected output: 67890;