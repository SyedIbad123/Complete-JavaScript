 //  The at method takes an integer value and returns the item at the index, following positive and negative integers.


 //  Example:
 const a = [1,2,3,4];
 console.log(a.at(1));  //  2

 const b = [1,2,3,4];
 console.log(b.at(-1));

 const c = [1,2,3,4];
 console.log(c[-1]);  // undefined cause arrays in JS does'nt accept -ve indexes, it will only acces through at method.


 //  The concat method is used to merge two or more arrays. This method does'nt change the existing arrays, but instead returns new array.
 //  It returns shallow copy that contains the same elements as the ones from the original arrays.


 //  example:
 const letters = ["a","b","c"];
 const numbers = [1,2,3,4];
 const alphaNumeric = letters.concat(numbers);
 console.log(alphaNumeric);    //  ['a', 'b', 'c', 1, 2, 3, 4]