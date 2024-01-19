 //  This method returns true if the specified object has the indicated property as its own property. If the property is indicated, or does not exist, the method returns false.

 //  Example:

 const example = {};
 console.log(Object.hasOwn(example,"prop"));  //  false

 example.prop = "exists";
 console.log(Object.hasOwn(example,"prop"));  // true

 const fruits = ["Apple","banana","grapes","orange"];
 console.log(Object.hasOwn(fruits,3));   //  true
 console.log(Object.hasOwn(fruits,4));   //  false