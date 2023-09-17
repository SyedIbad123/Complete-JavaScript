// There are some rules of const keyword.

//  1) const variable cannot be redeclared.

// Example:

const department = "Software";
// const department = "Mechanical";
// console.log(department);

// Output:
// Uncaught SyntaxError: Identifier 'department' has already been declared.


//  2) const variable cannot be reassigned.

// Example:

const University = "NED";
University = "Dawood";
console.log(University);

// Output:
// Uncaught TypeError: Assignment to constant variable.


//  3) Use const when you have:
//        i) A new Array.
//        ii) A new Object.
//        iii) A new function.
//        iv) A new Regular Expression.

// Example:

const array = [1,2,3,4];
const object = {
    Name:"Ibad",
    email: "ibad@gmail.com"
}; 
// etc.



