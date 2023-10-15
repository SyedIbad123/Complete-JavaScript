 //  The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

 //  Example:

 const x = [1, 2, 3, 4, 5];
 const [y, z] = x;
 console.log(y); // 1
 console.log(z); // 2


 const foo = ["one","two"];
 const [red,yellow,blue,green] = foo;
 console.log(red);      //  one
 console.log(yellow);   //  two 
 console.log(blue);     //  undefined
 console.log(green);    //  undefined


 //  Swapping variables

 //  Example:

 const arr = [1,2,3];
 [arr[1], arr[2]] = [arr[2] , arr[1]];
 console.log(arr);    //  [1, 3, 2]