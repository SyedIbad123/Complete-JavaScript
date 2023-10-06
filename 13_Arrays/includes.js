 //  The includes method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

 //  Example:

 const array1 = [1,2,3];
 console.log(array1.includes(2));   // true
 console.log(array1.includes(4));   // false
 console.log(array1.includes(3,3));   // false
 console.log(array1.includes(3,-1));   // true



 //  Computed Index

 //  If fromIndex argument is negativ, the computed index is calculated to be used as as a positon in the arrray at which begin searching for searchElement. If the computed index is less than 0 or equal to 0, the entire array will be searched.

 const arr = ["a","b","c"];
 console.log(arr.includes("a",-100));    //  true
 //  array length is 3
 //  fromIndex is -100
 //  Computed index is 3+(-100) = -97

 console.log(arr.includes("b",-100));    //  true
 console.log(arr.includes("a",-2));      //  false