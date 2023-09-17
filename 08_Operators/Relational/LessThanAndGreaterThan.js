 //  Relational Operators...

 //  Relational Operators compares its operands and returns a boolean value based on whether the comparison is true.

 //  All comparison operators coerce left operands before the right opernad.


 //  1)  LESS THAN(<) AND LESS THAN EQUAL TO(<=)...

 //  It returns true if the left operand is less than the right operand, and false otherwise. And Vice versa in GREATER THAN(>) AND GREATER THAN EQUAL TO.


 //  The operands are compared with multiple rounds of coercion:

 //  1)  If both values are strings, they are compared as strings based in the values of the UniCode they contains.

 //  Example:

 console.log("w" < "e");   //  false (because of Unicode)
 console.log("w" > "e");   //  true (because of Unicode)


 //  2)  Otherwise, JS attempts to convert non numeric types to numeric values.
    //   a)  Boolean converts to 1 for true and 0 for false.
    //   b)  Null = 0 and Undefined = NaN.
    //   c)  Strings if they contains Unicode, if not then convert to NaN.

 // 3)  If either value is NaN, the operator returns false.

 // Example:
 console.log(NaN > 2);  //  false