//Code Wars Kata - Months, Weeks, Days, Hours, and Minutes - 7 kyu
//https://www.codewars.com/kata/months-weeks-days-hours-and-minutes
//status: Not Attempted

//description
/*
Given a number of minutes, translate it into a readible human timestamp.

For example: 100 minutes equals "1 hour 40 minutes" And: 52874 minutes equals "1 month 1 week 1 day 17 hours 14 minutes"

Given that each month has 28 days.

The largest amount of minutes you'll have to test for is under a year so you'll have to translate it to Months, Weeks, Days, Hours and Minutes.

function displayValue(value) {
  //insert code
  return;
}

*/

function displayValue(value) {

	//figure out if it's more than an hour
	if (value>60){
		var minutes = value%60;
	}

	else{
		var minutes = value;
	};


//
	if (minutes > 59 && minutes%60 > 0) {
		var hours = (value-minutes)%60;
	};

	if (hours > 23 && hours%24 > 0) {
		var days = (minutes-hours)%24;
	};

	if (days > 6 && days%7 > 0) {
		var weeks = (hours-days)%7;
	};

	if (weeks > 3 && days%28 >0) {
		var months = (days-weeks)%28
	};

  var stringTime = hours + " Hours, " + minutes +" Minutes, ";
  return stringTime;
}
