 //  The spread syntax in JavaScript lets you easily expand arrays or objects into their individual elements or properties, making it useful for function arguments, array creation, and object property copying.


 //  Example:

 const parts = ["shoulders","knees"];
 const lyrics = ["head",...parts,"and","toes"];
 console.log(lyrics);  //  ['head', 'shoulders','knees', 'and', 'toes']


 //  It is also used for copying array.

 //  Example:

 const originalArray = [1,2,3,4,5];
 const copiedArray = [...originalArray];
 console.log(copiedArray);  //  [1, 2, 3, 4, 5]


 //  It is also used for concatenation.

 //  Example:

 const str1 = "Ibad";
 const str2 = "Ali";
 const concatenate = [...str1,...str2];
 console.log(concatenate);  //  It returns array.  ['I', 'b', 'a', 'd', 'A', 'l', 'i']

 const str3 = concatenate.join("");
 console.log(str3);        //  IbadAli