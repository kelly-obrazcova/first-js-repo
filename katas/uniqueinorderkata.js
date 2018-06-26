//Code Wars Kata - Unique in Order - 6 kyu
//https://www.codewars.com/kata/unique-in-order/train/javascript
//Status: Complete

//description
/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]


var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
}

*/


//current attempt
//this attempt passes
var uniqueInOrder=function(iterable){
var returnedArray = [];

	if(Array.isArray(iterable)) {
		 for(i=0; i<iterable.length; i++){
	       if(iterable[i] != iterable[i+1]){
	       returnedArray.push(iterable[i]);
     		};

  		};
  	}

else {
	for(i=0; i<=iterable.length; i++){

		if(iterable.charAt(i)!=iterable.charAt(i+1)){
		
		returnedArray.push(iterable.charAt(i))
		};

	};
};
	
return returnedArray;
}



//official solution
/*
function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
}
*/


//another official solution
/*
var uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}
*/



//penultimate attempt
//this passes all but the integer tests

/*
function uniqueInOrder(iterable){

	 
	var returnedArray = [];

	if(Array.isArray(iterable)) {
		 iterable = iterable.join("");};

	for(i=0; i<=iterable.length; i++){

		if(iterable.charAt(i)!=iterable.charAt(i+1))
		
		returnedArray.push(iterable.charAt(i));

	};
	return returnedArray;

};

*/



//early attempts

	// for(i=0; i<returnedArray.length-1; i++){
	// 	if(returnedArray[i] == returnedArray[i+1]){
	// 		returnedArray.splice(i+1, 1);
	// 	};
	// };
	// 
	// 	if(!iterable.charAt(i) === iterable.charAt(i+1)){
	// 	returnedArray.push(iterable.charAt(i));
	// 	};
	// };

	


//sample input: uniqueInOrder('AAAABBBCCDAABBB');
//expected output: ['A', 'B', 'C', 'D', 'A', 'B']

//sample input: uniqueInOrder([1,2,2,3,3]);
//expected output: [1,2,3]



//first attempt

//convert array of numbers and/or letters to 
// 	var compArray = []
// 	iterable.forEach(function(element){
// 		compArray.push(element.toString());
// 	});
// return compArray;