 //  The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.


 //  Example:

 const obj = {a:1};
 const copy = Object.assign({},obj);
 console.log(copy);  //  {a:1}


 const o1 = {a:1};
 const o2 = {b:2};
 const o3 = {c:3};
 const object = Object.assign([],o1,o2,o3);
 console.log(object);    //  [a: 1, b: 2, c: 3]