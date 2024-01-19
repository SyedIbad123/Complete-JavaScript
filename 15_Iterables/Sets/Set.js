 //  The Set object lets you store unique values of any type, whether primitive values or object references.

 //  Set objects are collection of values. A value in a Set may only occur once, it is unique in the set's collection.


 //  Example:

 const numbers = new Set();
 console.log(numbers);         //  Set(0)  {}

 const num = new Set([1,2,3]);
 console.log(num);       //   Set(3) { 1, 2, 3 }