

//arrays exercise forEach to for loop

var numbers = [1,2,3,4,5,6,7,8,9,10];

/*original, returns 3, 6, 9

numbers.forEach(function(trips){
	if(trips% 3 === 0) {
	console.log(trips);
	}
})

*/

for(i=0; i<numbers.length; i++) {
	if(i%3===0) {
		console.log(numbers[i-1]);
	}
}





/*window.setTimeout(function(){




}, 500);

*/