 //  NaN(Not a Number)...

 //  It is a special kind of number value that's typically encountered when the result of an arithmetic operation can't be expressed as number.
 //  It is also the only value in JS that is not equal to itself.
 //  The NaN global property is a value representing Not-a-Number.

 
 //  There are 5 different operations that returns NaN.

 //  1) Failed number conversion.
 //  Example:

 console.log(parseInt("Ibad"));  //  NaN
 console.log(Number(undefined));  //  NaN
 console.log(Math.abs(undefined));  //  NaN


 //  2) Math operator where result is not a real number.
 //  Example:

 console.log(Math.sqrt(-1));  //  NaN


 //  3) Indeterminate forms.
 //  Example:

 console.log(1**Infinity);   // NaN


 //  4) A method or expression whose operand is or get coerced to NaN.
 // Example:

 console.log(7**NaN);  // NaN

 //  5) Where an invalid value is to be represented as a number.
 //  Example:

 var date = new Date("Ibad").getTime()
 console.log(date);  //  NaN

 



