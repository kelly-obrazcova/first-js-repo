/* 
https://www.codewars.com/kata/get-the-mean-of-an-array/train/javascript

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
Return the average of the given array rounded down to its nearest integer.
The array will never be empty. 
*/

//get an average grade from an array of marks
//this code passes

function getAverage(marks) {
	var totalScore = 0;
	marks.forEach(function(element){
		totalScore = totalScore + element;
		return totalScore;
	})
	return Math.floor(totalScore / marks.length);
}

//sample test: getAverage([2, 2, 2, 2]); should return 2
//sample test: getAverage([1,2,3,4,5,]); should return 3
//sample test: getAverage([1,1,1,1,1,1,1,2]); should return 1