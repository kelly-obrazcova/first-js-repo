
//Functions Exercise 1
	//return true if even
	//return false otherwise

/*
function isEven(num) {


	if (num % 2 === 0) {
		return true;
	} 

	else {
		return false;
	}
	
}

// shortened answer:  function isEven(num) {return num % 2 === 0;}
*/




//Functions Exercise 2


/*
function getFactorial(num) {

	var result = 1;

for(var i = 1; i <= num; i++) {
	 result *= i;
}

return result;
}





/*
if (num === 0)
	var result = 1;

else if (

else {var result = undefined
} 
*/





//Functions Exercise 3

//replace all '-' with '_'

function kebabToSnake(str) {

var newStr = str.replace(/-/g, "_");
return newStr;
}
