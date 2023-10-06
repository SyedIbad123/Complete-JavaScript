 //  Concepts of Arrays...
 
 
 // 1) JavaScript arrays can dynamically change in size. You can add or remove elements from an array as needed. The elements in an array can be of different data types.

 // Example:

 let myArray = [1, 'apple', true];
 myArray.push(42);   // Adding an element of a different data type
 myArray.pop();      // Removing the last element


 //  2) JavaScript arrays are not the same as associative arrays or dictionaries found in some other programming languages. Array elements are accessed using nonnegative integers as indexes, not arbitrary strings.

 // Example:

 let myArray1 = [10, 20, 30];
 console.log(myArray1[0]);     // 10
 console.log(myArray1['0']);   // 10 
 // You can use the string form of the index


 //  3) Array indices start at 0. The first element in the array is at index 0, the second at index 1, and so on. The last element's index is equal to the array's length minus 1.

 // Example:
 let fruits = ['apple', 'banana', 'cherry'];
 console.log(fruits[0]);            // Access the first element at index 0 ('apple')
 console.log(fruits[1]);           // Access the second element at index 1 ('banana')
 console.log(fruits.length);        // The length property is 3 (number of elements)
 console.log(fruits[fruits.length - 1]);    // Access the last element using length - 1 ('cherry')


 //  4)  When you perform copy operations on JavaScript arrays, you create shallow copies. This means that the new array references the same objects as the original array. Changes to the objects within the array will be reflected in both the original and the copied arrays.

 // Example:
 let originalArray = [1, 2, 3];
 let shallowCopy = originalArray.slice(); // Create a shallow copy

 shallowCopy[0] = 99; // Modify an element in the copied array
 console.log(originalArray); // [1, 2, 3] (original array is not affected)
 console.log(shallowCopy);  // [99, 2, 3] (copied array is changed)