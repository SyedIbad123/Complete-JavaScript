 //  The fill method changes all elements in an array to a static value from start to index(default 0) to an end index(default array.length).
 //  It returns the modified array.
 /*  Syntax:
        fill(value,start,end)
 */

 //  Example:

 const array1 = [1,2,3,4];
 console.log(array1.fill(0,2,4));  // [1, 2, 0, 0]
 //  fill with 0 from position 2 untill 4

 console.log(array1.fill(5,1));   //  [1, 5, 5, 5]
 console.log(array1.fill(6));     //  [6, 6, 6, 6]

 


 //  The flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

 //  Example:

 const arr1 = [0,1,2,[3,4]];
 console.log(arr1.flat());    //  [0, 1, 2, 3, 4]

 const arr2 = [0,1,2,[[[3,4]]]];
 console.log(arr2.flat(2));    //  [0, 1, 2, Array(2)]

 const arr3 = [1,2,3,[3,4,[44,33,[233,322,[20,232,[38984,277823,[2838]]]]]]];
 console.log(arr3.flat(Infinity));   //  [1, 2, 3, 3, 4, 44, 33, 233, 322, 20, 232, 38984, 277823, 2838]