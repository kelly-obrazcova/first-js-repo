function maxArray(arr) {
	var biggestNum = arr[0];
	arr.forEach(function(element) {
		if(biggestNum < element) 
		biggestNum = element;
	});
	return biggestNum;
}


//test cases
//maxArray([1, 2, 3])
//maxArray([10, 3, 10, 4])
//maxArray([-5, 100])