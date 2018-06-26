//Code Wars Kata - Human Readable Time - 5 kyu
//https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
//Status: Not Attempted



//description
/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

//first attempt
function humanReadable(seconds) {

var newSeconds = "00";
var MM = "00";
var HH = "00";
var  = 0

if (seconds > 0 && seconds < 10) {
  newSeconds = "0" + seconds;
};

else if (seconds >= 10 && seconds < 60){
  newSeconds = seconds;
  };

else {
  SS = 

var stringOfHours = HH + ":" + MM + ":" + SS 

return stringOfHours;
}