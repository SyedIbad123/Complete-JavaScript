 //  The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

 //  Example:

 const obj = {foo:"bar" , baz:42};
 console.log(Object.entries(obj)); 

 //  [['foo,'bar] , ['baz',42]]

 
 const obj2 = {a:5,b:7,c:9};
 for(const [key,value] of Object.entries(obj2)){
    console.log(`${key} ${value}`);
 }

 //  a 5
 //  b 7
 //  c 9
 