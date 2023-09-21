 //  NULLISH COALESCING OPERATOR (??)
 
 //  This returns its right hand side operand when its left hand side operand is null or undefined, and otherwise returns its left hand side operand. It is special case of logical (OR) operator.

 // It's precedence has the fifth lowest operator precedence, directly lower than (||) and directly higher than ternary operator.

 // Example:

 const str = null ?? "string";
 console.log(str);  //  string

 const baz = 0 ?? 42;
 console.log(baz);   //  0


 //  We don't combine (AND) or (OR) operator with (??), it will throw syntax error.

 //  Example:

 console.log(null || undefined ?? "foo");   // Syntax Error