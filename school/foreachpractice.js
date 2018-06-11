//traditional forEach

/*
var nums = [45, 65, 77, 34]
nums.forEach(function(num){
	console.log(num)
});
*/


//building manual forEach from scratch

/*
function myForEach(arr, func){
//loop through array
	for(var i = 0; i<arr.length; i++){

//call func for each item in array
	func(arr[i]);
	}
}

//arguments
var colors = ["red", "orange", "yellow"]
myForEach(colors, alert)
*/


function myForEach(arr, func){
	for(var i = 0; i<arr.length; i++){
	func(arr[i]);
	}
}

var colors = ["red", "orange", "yellow"]

myForEach(colors, function(color){console.log(color)})