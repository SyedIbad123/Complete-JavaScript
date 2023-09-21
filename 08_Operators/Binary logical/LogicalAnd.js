 //  This returns true if and only if all operands are true. Otherwise, it will be false.
 //  It evaluates operands from left to right.
 //  The AND operator has higher precedence than OR operator, means AND executed before OR.

 //  Examples:

 const a = 5;
 const b = 3;
 console.log(a>b && b>0);  //  True

 console.log("" && "foo");  // " "
 console.log(2 && 0);  // 0
 console.log("foo" && 4);  // 4



  // More generally, the operator returns the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy. This is (SHORT-CIRCUITING) behaviorb of logical AND.

  //  Example:

  console.log(-1 > 0 && 2 > 0);  //  false (short-circuiting behavior)