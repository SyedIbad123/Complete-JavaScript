 // The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

 //  Example:

 const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
 ];

 console.log(matrix.join());    //  1,2,3,4,5,6,7,8,9
 console.log(matrix.join(";"));    //  1,2,3;4,5,6;7,8,9
 console.log(matrix.join("\""));    //  1,2,3"4,5,6"7,8,9



 //  The slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.

 //  The original array will not be modified

 //  Example:
 const fruits = ["Banana","Orange","Lemon","Apple"];

 console.log(fruits.slice(1,3));   //  ['Orange', 'Lemon']

 
 //  It returns shallow copy means does'nt modify original array.

 console.log(fruits);              //   ['Banana', 'Orange', 'Lemon', 'Apple']
