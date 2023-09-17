 //  Truthy and Falsy Values...

 //  In JavaScript, truthy and falsy values are used to determine whether a given expression or variable evaluates to true or false in a boolean context.

 //  In other words, there are only a handful of values that get coerced to false -- these are called falsy values. All other values are called truthy values. 

 //  A value's truthiness is important when used with logical operators, conditional statements, or any boolean context. Truthy values are even moe unlikely to be loosley equal to true.

 //  All values are eithe truthy or falsy, but most values are loosely equal to neither true or false.


 //  Many built-in operations that expect booleans first coerce their arguments to booleans.

 //  1)  Undefined, null, NaN, 0, -0 and 0n turns into false, These are called falsy values. All remaining values are truthy.

 //  Example:

 if(-0){                   //  -0 is falsy that's why it turns false.
    console.log("Hey");
 }else{
    console.log("hello");
 }

 //  Output:
 //  hello
 
 
 //  Example:

 if(-1){                 //  -1 is truthy that's why it turns true.
    console.log("hey");  //  hey
 }