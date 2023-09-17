// We can also initialize variables without var, let and const.

// Example:

x = 10;
console.log(x);

// Output:
// 10

// However, It is not best practice and your code is not robust.

// Therefore, we use (Strict Mode) to cope up these types of problems.

// Basically, using a Strict Mode at the beginning of your JavaScript code can help catch potential issues and make your code more robust.

// Example:

"use strict";
x = 10;
console.log(x);

// Output:
// Uncaught ReferenceError: x is not defined

// With strict mode, you can not, for example, use undeclared variables as shown in the above example.






// Strict mode makes it easier to write "secure" JavaScript.

// Strict mode changes previously accepted "bad syntax" into real errors.

// As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable. // We later talk about this keyword,global and local variable.

// In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

// In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.