
//problem 2 return true if each item in an array is identical


// passing solution

function isUniform(arr) {
	var result = true;
	arr.forEach(function(element){
if(element !== arr[0]) {
	result = false;
}
});
return result;
}


/* second attempt
function isUniform(arr) {
	for(i=0; i<=arr.length-1; i++) {
		if(arr[i] !== arr[i+1]){
			return false;
		}
	
	}	
	return true;
}


i = 0, 0<=4, 
["b", "b", "b", "b"] index 0 is ["b"]
index 0+1 = 1 = "b"
b == b
i+1 = 1

i = 1, 1<=4,
[b, b, b, b] index 1 is b
index 1+1 = 2 = b
b == b

i = 3
*/

/*
	else{return false}

isUniform(["b", "b", "b", "b"])
*/



