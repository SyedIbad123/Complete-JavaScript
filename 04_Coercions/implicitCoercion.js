 //  Implicit coercion in JavaScript refers to the automatic type conversion that occurs when you perform operations between values of different data types. JavaScript tries to convert one or both of the operands to a common data type so that the operation can be performed.


 // Example:

 var num = 42;
 var str = "Hello, ";
 var result = str + num;  //  When you use the + operator with strings and other data types, JavaScript will convert non-string values to strings and concatenate them.

 //  Output:
 //  "Hello, 42"


 //  Implicit coercions is very convenient but can be a potential footgun if developers did not intend to do the conversion, or intend to convert in the other direction(for example, string to a number instead of number to string). for symbols and BigInt, JS has intentionally disallowed certain implicit type conversions...