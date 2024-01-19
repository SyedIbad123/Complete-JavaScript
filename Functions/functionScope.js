 //  Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. However, a function can access all variables and functions defined inside the scope in which it is defined.

 //  In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.

 //  Example:

 //  The following variables are defined in the global scope
 const num1 = 20;
 const num2 = 3;
 const name1 = "Chamakh";

 //  This function is defined in the global scope
 function multiply() {
  return num1 * num2;
 }

 console.log(multiply());   //  60

 // A nested function example

 function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name1} scored ${num1 + num2}`;
  }

  return add();
 }

 console.log(getScore());   // "Chamakh scored 5"