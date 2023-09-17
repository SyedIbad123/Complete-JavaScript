 //  Equality(==) Operator...

 //  This checks whether its two operands are equal, returning a Boolean result.
 //  It attempts to convert and compare operands that are of different types.


 //  1)  If operands have same types;

    //  a)  Object returns true if both operands reference the same Object.
    //  b)  String returns true if both strings have same characters in same order.
    //  c)  Number returns true only if both operands have same value(same for BigInt).
    //  d)  Boolean returns true only if operands are both true or both false.
    //  e)  Symbol returns true only if both operands reference the same object.
 
    
 //  2)  If one of the operand if Null or undefined, the other must also be null or undefined to return true.

 
 //  Examples:
 console.log(Symbol(1)==Symbol(1)); //  false(because of different Reference value)
 console.log("1" == 1);             //  true
 console.log("1" == "1");           //  true
 console.log("Ibad" == "Ibad");     //  true
 console.log("ibad" == "Ibad");     //  false
 console.log(0 == null);            //  false
 console.log(0 == undefined);       //  false    
 console.log(null == undefined);    //  true


 //  InEquality(!=) operator is same as the Equality operator, difference is that it reverses the result of Equality Operator.