 //  Typeof Operator...

 // All primitive data types, except null, can be tested by the typeof operator, Except Null.

 // Example:

 var str = "IBAD";
 var number = 12;
 var boolean = true;
 var firstname;
 var bigInt = 2n;

 console.log(typeof str);   // string...
 console.log(typeof number); // number...
 console.log(typeof boolean); // number...
 console.log(typeof firstname); // undefined...
 console.log(typeof bigInt); // bigint...



 // The type of null returns "Object" it is a bug in JS.

 // You can use "=== null" (strict Equality Operator) to test for null.

 // Example:

 var value = null;
 console.log(value === null); // true.

 if(value===null){
    console.log("Null");
 }else{
    console.log("Not Null");
 }

 // Output:
 // Null



 

