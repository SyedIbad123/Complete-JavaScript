 //  Differenc between Null and Undefined...

 //  Basically Undefined indicates the absence of a value, while Null indicates the absence of Object. Null is a keyword but Undefined is a normal identifier that happens to be a globale property. In practice, the difference is minor, Since Undefined shoud not be redefined or shadowed.

 //  Example:

 console.log(typeof null);  //  "Object" (because of legacy reasons)

 console.log(typeof undefined);  //  undefined
 console.log(null===undefined);  //  false(because of strict Equality)  
 console.log(null==undefined);  //  true(because of Equality or absence of Value)  
 console.log(null===null);  //  true
 console.log(!null);  //  true