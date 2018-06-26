//Code Wars Kata - Averages of Numbers - 6kyu
//https://www.codewars.com/kata/averages-of-numbers/train/javascript
//status: passed

// Description
// #Get the averages of these numbers
// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

function averages(numbers) {

	if (numbers == null || numbers.length <= 1){
	  	return [];
	 }


	else {
		var arr1 = [];
		var avgOfNext = 0;
		var i;
		
		for(i=0; i<numbers.length-1; i++){
			avgOfNext = arr1.push((numbers[i] + numbers[i+1])/2);
			};

		return arr1;
		}
}

//sample test averages([2, 2, 2, 2, 2]), expected output: [2, 2, 2, 2, 2];

// official solution
//chuffed to say this is the first time my solution was pretty close to the official one

/*
function averages(numbers) {
  var final = [];
  if (numbers) {
    for (var i=0; i<numbers.length-1; i++) {
      final.push((numbers[i] + numbers[i+1]) / 2);
    }
  }
  return final;
}
*/




//second full attempt
//passes all but empty/null tests

/*

function averages(numbers) {
var arr1 = [];
var avgOfNext = 0;
var i;
	
	for(i=0; i<numbers.length-1; i++){
	avgOfNext = arr1.push((numbers[i] + numbers[i+1])/2);
	};
  return arr1;
}

*/

//first full attempt.  passes in console but not on website

/*
var testArray;
var arr1 = [];
var avgOfNext = 0;

function findNextAvg(testArray){
	var i;
	for(i=0; i<testArray.length-1; i++){
	avgOfNext = arr1.push((testArray[i] + testArray[i+1])/2)
	};
return arr1;
};

*/

// function pushToArray(avgOfNext) {
// 	input.forEach(function(element){
// 		();
// 	});
// };


//sample test: findNextAvg([ 1, 3, 5, 1, -10]);
//expected output: [ 2, 4, 3, -4.5]
