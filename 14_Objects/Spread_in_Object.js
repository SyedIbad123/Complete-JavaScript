 //  Shallow cloning (excluding prototype) or merging of objects is possible using a shorter syntax than Object.assign().

 // Example:

 const obj1 = {foo:"bar" , x:42};
 const obj2 = {foo:"baz" , y:13};

 const clonedObj = {...obj1};
 console.log(clonedObj);     //  {foo:"bar" , x:42}

 const mergedObj = {...obj1,...obj2};
 console.log(mergedObj);     //  {foo: 'baz', x: 42, y: 13}