// There are plenty of RULES of (LET) keyword.

//  1) Variables define with let cannot be redeclared.

// Example

let firstName = "Ibad";
let firstName = "Ali"; // New variable with same name
console.log(firstName);

// Output:
// Uncaught SyntaxError:  Identifier 'firstName' has already been declared



//  2) The let variable's value can be change.

// Example:

let x = 2;
x = 3;
console.log(x);

// Output:
// 3



//  3) Variables define with let must be declared before use.

// Example:

console.log(y); 
let y = 20;

// Output:
// Uncaught ReferenceError: Cannot access 'y' before initialization