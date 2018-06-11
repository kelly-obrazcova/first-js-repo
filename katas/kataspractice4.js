//codewars kata check coupon description

/*Description:
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Your mission: 
Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.

A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"
*/




//my code here, code passed all tests


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
//compare codes

var checkCode = (enteredCode === correctCode);

//parse and compare the dates

var checkDate = (Date.parse(currentDate) <= Date.parse(expirationDate));


//complete both
if (checkCode === true && checkDate === true){
	return true;
	}
else {
	return false;
	}
}


//this was the recommended solution

/*
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}
*/




//test cases


/*
Test.assertEquals(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
Test.assertEquals(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);
Test.assertEquals(checkCoupon('12abcd3','12abcd3','January 5, 2014','January 1, 2014'), false);
Test.assertEquals(checkCoupon('123ablqc0','123ablqc0','July 5, 2000','July 5, 2000'), true);
Test.assertEquals(checkCoupon('abc','abc','November 8, 2013','November 5, 2014'), true);
Test.assertEquals(checkCoupon(0,false,'September 5, 2014','September 25, 2014'), false);
Test.assertEquals(checkCoupon(1,true,'September 5, 2014','September 25, 2014'), false);
Test.assertEquals(checkCoupon(1+1,'2','September 5, 2014','September 25, 2014'), false);
Test.assertEquals(checkCoupon('a12v564','a12v564','March 5, 1998','March 25, 1998'), true);
*/
