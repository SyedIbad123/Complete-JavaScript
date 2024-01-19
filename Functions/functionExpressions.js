 //  Functions can also be created by a function expression.
 //  Such a function can be anonymous; it does not have to have a name. For example, the function square could have been defined as:

 //  Example:

 const square = function (number) {
    return number * number;
  };
  
 console.log(square(4)); // 16


 //  However, a name can be provided with a function expression. Providing a name allows the function to refer to itself, and also makes it easier to identify the function in a debugger's stack traces:

 //  Example:

 const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
 console.log(factorial(3)); // 6