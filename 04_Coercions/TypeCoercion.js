 // Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.


 // Example:
 
 const value1 = "5";
 const value2 = 9;
 let sum = value1 + value2;
 console.log(sum);

 //  Output:
 //  59

 // In the above example, JavaScript has coerced the 9 from a number into a string and then concatenated the two values together, resulting in a string of 59. JavaScript had a choice between a string or a number and decided to use a string.