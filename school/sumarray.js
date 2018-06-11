
//add all the elements of an array and return the total value


function sumArray(arr){
	var resultingSum = 0;

	arr.forEach(function(element){
		resultingSum = resultingSum + element;
	});
	return resultingSum;
}


/*test cases 
sumArray([1, 2, 3]);
sumArray([10, 3, 10, 4]);
sumArray([-5, 100]);
*/
