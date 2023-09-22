 //  Left Shift operator(<<)...
 
 //  It returns a numbe or Bigint whose binary representation is the first operand shifted by specified number of bits to the left.
 //  Excess bits shifted off the left are discarded, and zero bits shifted in from the right.

 //  Example:

 const a = 5;
 const b = 2;
 console.log(a<<b);   //  20


 //  Right Shift operator(>>)..

 //  It returns a numbe or Bigint whose binary representation is the first operand shifted by specified number of bits to the right.
 //  Excess bits shifted off the left are discarded, and zero bits shifted in from the right.
 //  This operation is also called "sign-propagation right shift" or "arithmetic-right shift", because the sign of resulting number is the same as the sign of the first operand.

 //  Example:

 const a = 5;
 const b = 2;
 console.log(a>>b);  //  1


 // Unsigned Right Shift operator(>>>)...

 //  It is same as the bitwise right shift. It does'nt accept Bigint values.

 //  Example:

 const a = 5;
 const b = 2;
 console.log(a>>>b);  //  1