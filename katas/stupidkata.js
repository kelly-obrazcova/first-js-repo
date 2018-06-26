
function removeSmallest(numbers) {
	var newArrayIndex = numbers.indexOf(Math.min(...numbers));
	
	function doThisAlreadyPlease(){
			numbers.splice(newArrayIndex, 1);
	}

	doThisAlreadyPlease(numbers);
	return numbers;

};

/*
function removeSmallest(numbers) {

    var newArrayIndex = numbers.indexOf(Math.min(...numbers)); 
    var newArray = numbers.splice(newArrayIndex, 1);
    return newArray;
};
*/

//test cases removeSmallest([3, 2, 3, 2, 3]);
//expected output [3, 3, 2, 3]
//actual output [2]