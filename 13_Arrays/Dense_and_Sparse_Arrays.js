 //  Dense arrays are the most well known type of Array. They are the "normal" arrays most are familiar with.

 //  A dense array is an array where the elements are all sequential starting at   index 0.

 //  In this instance, the length property of an array accurately specifies the number of elements in the array.

 //  Example:

let array = [1, 2, 3, 4, 5];
console.log(array.length); // Returns 5



//  A sparse array is one in which the elements are not sequential, and they don't always start at 0.

//  They are essentially Arrays with "holes", or gaps in the sequence of their indices.

let array1 = [];
array1[100] = "Holes now exist";
array1[200] = "Ibad";

console.log(array1[100]);   //  Holes now exist

console.log(array1.length);  // 201, but only 2 element

console.log(array1);   // [empty × 100, 'Holes now exist', empty × 99, 'Ibad']

console.log(array1[199]);   //  undefined
console.log(array1[200]);   //  Ibad


const array2 = [1,2,,3];
console.log(array2.length);  //  4
console.log(array2[3]);     //  undefined
console.log(array2);        //  [1,2,empty,3]


const array3 = [,,,];
console.log(array3.length);   //  3

 //  Normally, the length property of an Array accurately returns the number of elements in the array, but in sparse arrays they don't. If the array is sparse, the value of the length property is greater than the number of elements.