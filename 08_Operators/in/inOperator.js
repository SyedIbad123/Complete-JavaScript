 //  in Operator...

 //  It returns true if the specified property is in the specified object or its prototype chain.
 //  It is used for objects not for arrays.

 //  Example:

 const x = [1,2,3,4];
 console.log(5 in x);

 //  false (because [in] operator in array always checks index position not the value).



 const myObj = { name: "John", age: 30 };

 //  Check if a property exists in an object.

 const hasNameProperty = "name" in myObj;     //  true
 const hasEmailProperty = "email" in myObj;   //  false
 
 console.log(hasNameProperty);   //  true
 console.log(hasEmailProperty);  //  false
 