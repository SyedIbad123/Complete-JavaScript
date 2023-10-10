 //  The forEach() method executes a provided function once for each array element.

 //  Example:

 const array = ["a","b","c","d"];
 const result = array.forEach((element)=>{
    console.log(element);
 })
 console.log(result);  //  a  b  c  d 



 //  The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

 //  Example:

 const numbers = [1,2,3,5];
 const square = numbers.map((num) => num * 2 );
 console.log(square);   //  [2, 4, 6, 10]