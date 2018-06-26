//Code Wars Kata - Multiples of 3 or 5 - 6kyu
//https://www.codewars.com/kata/multiples-of-3-or-5/train/javascript
//Status: Complete

//description
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of ProjectEuler.net
*/

//passing attempt

function solution(number){

	var multiplesArray = [];


	//make an array of every multiple of 3 or 5
	function makeArray(){
		for(i=number-1; i>0; i--){
			if(i % 3 === 0 || i % 5 === 0){
		  	multiplesArray.push(i);
		  	};
		};

	};
	  makeArray(number);

	  //add them all together and return the value
	  return multiplesArray.reduce((a, b) => a + b, 0);
	
}


//sample input: solution(10);
//expected output: 23;




// official solution

/*
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
*/




//first attempt

/*
function solution(number){

	var numberArray = [];
	var multiplesArray = [];

	function makeArray(){
		for(i=number-1; i>0; i--){
			numberArray.push(i);
		};

	};
	
	function findTheMultiples(){
		numberArray.forEach(function(element){
			if(element % 3 === 0 || element % 5 === 0){
		  	multiplesArray.push(element);
		  	};

		});
	};
	  

	  makeArray(number);
	  findTheMultiples(numberArray);
	  return multiplesArray;
}
*/

