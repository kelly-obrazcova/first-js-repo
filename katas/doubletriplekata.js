/*
Codewars Kata
Title: Triple trouble - 6kyu
Status: Passed 17-06-18
Location: https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/javascript
*/

/*description
Write a function

tripledouble(num1,num2)
which takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.
For example:
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
If this isn't the case, return 0
*/

/* official solution

function tripledouble(num1, num2) {
  let nums = [...Array(10).keys()];
    
  return +nums.some(num => 
    num1.toString().includes(num.toString().repeat(3)) &&
    num2.toString().includes(num.toString().repeat(2))
  );
}
*/

//this bit works
function tripledouble(num1, num2) {

	var whatWasTheDouble = [];
	var whatWasTheTriple = [];


	//this bit works
	//make an array of every number within num2 that has a consecutive double

	function makeDoubleArray() {

	  	var numString = num2.toString();

	    for(i=0; i<numString.length-1; i++) {
	    	if(numString[i] === numString[i+1]){
	    	whatWasTheDouble.push(numString[i]);
	    	i++;
	    	} 
	    }

	};
 

	//this bit works
	//make an array of every number within num1 that has a consecutive triple

	function makeTripleArray() {

	  	var numString = num1.toString();
	  	

	    for(i=0; i<numString.length-2; i++){
	    	if(numString[i] === numString[i+1] && numString [i+1] === numString[i+2]){
	    	whatWasTheTriple.push(numString[i]);
	    	}
	    };
	};


	//this bit works
	//comparing the arrays

	var finalResult = 0;

	function findOneTrue(){
		whatWasTheDouble.forEach(function(element){
			if(whatWasTheTriple.some(x=> x===element)){
			finalResult = 1;
			}
		})
	}



	//WIP
	//final bit, returning one for true or 0 for false

makeDoubleArray();
makeTripleArray();
findOneTrue();
return finalResult;
}


//test cases
//input: tripledouble(451999277,41177722899); expected output: true;
//input: tripledouble(1222345, 12345); expected output: false;


//this finally passes, and is the basis for the final product

/*
var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9];


var finalResult = false;
function findOneTrue(array2, array1){
array2.forEach(function(element){
	if(array1.some(x=> x===element)){
	finalResult = true;
	}

})
return finalResult;
}
*/

/*var y = for (var i = 0; i < array2.length; i++) {
    return(arr[i]);};
console.log (array1.some(x=> x === y));
*/




// this works-ish
/*
var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 5];
var y = array2[3];
console.log (array1.some(x=> x === y));
*/


/*
array1.some(x=> x === array2.forEach(function(element){
    return element;}));
*/

/*
function getEach(array2) {array2.forEach(function(element){
    console.log(element);});};
*/




//test compareArrays([2, 3, 4], [6, 5, 4]); expected output: true
//test compareArrays([2, 3, 4], [5, 6, 7]); expected return: false
/*
if (isTriple(num1) && isDouble(num2)) {
return 1;}
else {return 0}
}
*/






//input: tripledouble(451999277,41177722899); expected output: 1;
//input: tripledouble(1222345, 12345); expected output: 0;


//attempt 1: this code passes 94 and fails 11
//issue is that the triple and double have to be of the same number

/*
function tripledouble(num1, num2) {
  function isDouble(num2) {
  	var i = 0;
  	var isItThough = false;
  	var numString = num2.toString();

    while(i<numString.length-1 && !isItThough) {
    	isItThough = (numString[i] === numString[i+1]);
    	i++;
    	}
   return isItThough;
    }

 
function isTriple(num1) {
  	var i = 0;
  	var isItThough = false;
  	var numString = num1.toString();

    while(i<numString.length-2 && !isItThough) {
    	isItThough = (numString[i] === numString[i+1] && numString [i+1] === numString[i+2]);
    	i++;
    	}
   return isItThough;
    }

if (isTriple(num1) && isDouble(num2)) {
return 1;}
else {return 0}}
*/



//attempting what i would later use .some() for
/*
function compareArrays(everyTriple, everyDouble){

	var doTheyMatch;

	everyTriple.forEach(function(e1){

		doTheyMatch = false;

		for(i=0; i<everyDouble.length; i++){
			var e2 = everyDouble[i];
			
			if(!doTheyMatch) {
				doTheyMatch = (e1 === e2);
			}
		return doTheyMatch; 	
		};
	return doTheyMatch;
	});
};
}


var everyTriple = makeTripleArray(num1);
var everyDouble = makeDoubleArray(num2);
var doTheyMatch = false;
*/