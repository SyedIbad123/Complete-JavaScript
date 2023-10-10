 //  The every method tests whether all elements in the array pass the test implemented by the particular function. It returns a boolean value.

 //  Example:

 const check = (currentValue) => currentValue < 40;
 const array1 = [1,30,39,29,10,13];
 console.log(array1.every(check));  //  true


 const array2 = [2,4,6,8,10,11];
 const check2 = array2.every((currentValue1) => currentValue1 %2 == 0)
 console.log(check2);  // false



 //  The some method tests whether at least one element in the array passes the test implemented by the provided callback function. It returns boolean value.

 //  Example:

 const array3 = [2,4,3,6,8,10];
 const check3 = array3.some((currentValue2) => currentValue2 % 2 != 0 )
 console.log(check3);  // true


 const array4 = [2,4,22,6,8,10];
 const check4 = array4.some((currentValue3) => currentValue3 % 2 != 0 )
 console.log(check4);  // false