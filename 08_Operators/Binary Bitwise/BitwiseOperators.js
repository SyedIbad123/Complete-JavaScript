 //  Bitwise AND operatr(&)

//  This returns a number or Bigint whose binary reresentation has a ! in each bit poition for which the corresponding bits of both operands ar 1.

 //  Example:

 const a = 5; // 00000000000000000000000000000101
 const b = 3; // 00000000000000000000000000000011
 
 console.log(a & b); // (1) 00000000000000000000000000000001


 //  Bitwise OR (|)

 //  This returns a numbe rof Bigint whose binary representation has a 1 in each bit for which the corresponding bits of either or both operands are 1.

 // Example:

 const a = 5;  // 00000000000000000000000000000101
 const b = 3;  // 00000000000000000000000000000011
 console.log(a|b);   // (7) 00000000000000000000000000000111


 //  Bitwise XOR(^)

 //  This returns a number or Bigint whose binary representation has 1 in each bit position for which the corresponding bits of either but not both operands are 1.

 // Example:

 const a = 5;  // 00000000000000000000000000000101
 const b = 3;  // 00000000000000000000000000000011
 console.log(a^b);  // (6) 00000000000000000000000000000110   