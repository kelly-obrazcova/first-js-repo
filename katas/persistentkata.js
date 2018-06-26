//Code Wars Kata - Persistent Bugger - 6 kyu
//https://www.codewars.com/kata/persistent-bugger/train/javascript
//Status: Passed

//Description
/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number

*/


function persistence(num) {

	//turn the given number into an array of integers

if(num<10){
	return 0;
}

else{
	var numbersArray;

	var newNum = num;

    function makeArray() {
	   	var numString = newNum.toString();
	    numbersArray = numString.split("");
	   	return numbersArray;
	};

	//multiply each element of the array together
	var productArray = 1;  //need to figure out where in the loop to reset productArray to 1

	function multiplyArray(){
		numbersArray.forEach(function(element){
			productArray *= element;
		});

		newNum = productArray;
		makeArray();
    productArray = 1;

	};
	
	var loopsNumber = 1
	//while loop that repeats until single digit is returned
	function allInOne() {
		makeArray(newNum);
		multiplyArray(numbersArray);
    	

		while (numbersArray.length >1){
			    makeArray(newNum);
			    multiplyArray(numbersArray);
			    loopsNumber ++;
		};
		//at this point, newNum should be a single digit
		//final step is to count number of while loops
	};
allInOne(num);
return loopsNumber;
};
}


//official solution
/*
function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}
*/

//another official solution
/*
function persistence(num) {
   for (var i = 0; num > 9; i++) {
     num = num.toString().split('').reduce((t, c) => c * t);
   }
   return i;
}
*/



// // allInOne(num);
// makeArray(newNum);
// multiplyArray(numbersArray);
// return productArray;
// }


//turns out it wasnt necessary to convert the string back to an integer
	   	// stringArray.forEach(function(element){
	   	// 	numbersArray.push(Number(element));
	   	//	};


//used *= notation instead of reduce
//multiply each element together and return a new number
/*
var sumArray;
    function multiplyArray (numbersArray){
	    if (numbersArray.find(0) = -1){

	    }

	    else {};
	    
	  	sumArray = numbersArray.reduce(current, accumulator);
    };
*/