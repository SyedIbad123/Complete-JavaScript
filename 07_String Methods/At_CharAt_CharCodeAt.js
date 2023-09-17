 // At() method...
 
 //  The At method of string returns the character at the specified index.
 //  It also accepts -ve integers, which counts back from the last string characters.

 //  Example:

 const myName = "Syed";
 console.log(myName.at(-1));

 //  Output:
 //  d



 //  charAt() method...

 //  It returns the character at the specified index.
 //  It can't accept -ve integers.

 //  Example:
 
 let myNam = "Syed";
 console.log(myNam.charAt(1));

 //  Output:
 //  y



 //  charCodeAt() method...

 //  It returns a number that is the UTF-16 code unit value at the given index.

 //  Example:

 let lastName = "Ali";
 console.log(lastName.charCodeAt(0));

 //  Output:
 //  65