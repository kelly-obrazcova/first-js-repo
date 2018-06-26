//Code Wars Kata - Two Sum - 6 kyu
//https://www.codewars.com/kata/two-sum/train/javascript
//Status: In Progress

//Description
/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/
*/


function twoSum(numbers, target) {
    // var solutionArray = numbers.forEach(function(element){
    // 	numbers.find(function(element){
    // 		(target-element);
    // }
    var secondNumber = numbers.find(function(element){
    	return (target-element);
    };


  //   function makeArray(){
  //   	var i;

	 //    for(i=0; i<numbers.length; i++){
	 //    	var otherHalf = target - numbers[i];
		//       	if(numbers.includes(otherHalf)){
		//           solutionArray.push(i);
		//           solutionArray.push(numbers.indexOf(otherHalf));
		//     	};
		// };
  //   };
  makeArray(numbers);
  return solutionArray;
};



//sample input: twoSum([1,2,3], 4);
//expected output:[0, 2]


//sample input:
//expected output:



//second attempt
//prints everything twice
/*

function twoSum(numbers, target) {
    var solutionArray = [];
    
    function makeArray(){
    	var i;

	    for(i=0; i<numbers.length; i++){
	    	var otherHalf = target - numbers[i];
		      	if(numbers.includes(otherHalf)){
		          solutionArray.push(i);
		          solutionArray.push(numbers.indexOf(otherHalf));
		    	};
		};
    };
  makeArray(numbers);
  return solutionArray;
};
*/


//first attempt
//prints everything three times

/*

function twoSum(numbers, target) {
    var newArray = [];   
    var solutionArray = [];
    
    function makeArray(){
    //make an array of every possible missing number
      numbers.forEach(function(element){
          newArray.push(target-element);
      });
    };
    
    function checkArray() {
      var i;
      for(i=0; i<newArray.length; i++) {
        solutionArray.push(numbers.find(function(element){
           element = newArray[i];
        }));
      };
    };

    
  makeArray(numbers);
  checkArray(newArray);
  return solutionArray;
}
*/