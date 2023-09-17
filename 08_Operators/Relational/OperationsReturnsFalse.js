 //  There are two cases where all four operations returns false..

 //  1)  If one is Bigint while other gets converted to a string(that can't converted to a Bigint value). It throws a Syntax Error when passed to Bigint().

 //  Example:

 console.log(10n < "abd");  // false (because string can't converted to number)
 console.log(BigInt(10) > "abc");  // false


 //  2) If one of the operands get converted to NaN. (for e.g, strings that can't be converted to numbers, or undefined).

 //  Example:

 console.log("5" < 3);  //  false
 console.log("hello" > 3);  //  false
 console.log("hello" <= 3);  //  false
 console.log("hello" >= 3);  //  false