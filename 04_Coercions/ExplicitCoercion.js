 // Explicit coercion in JavaScript refers to the intentional conversion of a value from one data type to another using built-in functions or operations. Unlike implicit coercion, which happens automatically, explicit coercion requires you to specify the conversion you want to perform. 


 //  Examples:

 // To String...

 var num = 42;
 var str = String(num); // str will be the string "42"


 // To Number...

 var str = "42";
 var num = Number(str); // num will be the number 42


 //  Using (+) before variable also converts a variable type into number...

 var str = "42";
 var num = +str; // num will be the number 42


 // To Float...

 var str = "42.5";
 var num = parseFloat(str); // num will be the number 42.5


 //  To Boolean...

 var truthyValue = "Hello";
 var boolValue = Boolean(truthyValue); // boolValue will be true