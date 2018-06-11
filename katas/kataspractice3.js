
//this code passed the validate pin kata on codewars, 7kyu

function validatePIN (pin) {


if (isNaN(parseInt(pin)) === true) {
	return false;
	}
else if ((pin>=0) && (pin.length === 4 || pin.length === 6)) {
	return true;
	}

else {
	return false;
	}
}


// validatePIN(12345);
// validatePIN(1234);
// validatePIN(q234);


/* previous attempt


function validatePIN (pin) {

//check if pin is a number
if (typeof pin !== "number") {
	return false;
}


//convert pin to a string
var str = pin.toString();


//check if string is either 4 or 6 digits long
else if (str.length === 4 || str.length === 6) {
	return true;
	}

else {
	return false
	}





//another attempt

//check if pin is a number
if (typeof pin !== "number") {
	return false;
}


else {var str = pin.toString();


//check if string is either 4 or 6 digits long
	if (str.length === 4 || str.length === 6) {
	return true;
	}

else {
	return false
	}
}
}


*/