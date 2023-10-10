 //  The reduce() method executes a user-specified "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.

 //  Example:

 const array = [1,2,3,4];
 const initialValue = 0;
 const totalSum = array.reduce((accumulator,currentValue) => accumulator + currentValue,initialValue);
 console.log(totalSum);  // 10

 const array1 = ["Syed ","Ibad ","Ali"];
 const initialValue1 = ""
 const concatenate = array1.reduce((accumulator, currentValue)=> accumulator + currentValue,initialValue1);
 console.log(concatenate);  //  Syed Ibad Ali



 // The filter method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

 // Example:

 const words = ["spray","limit","present","submarine"];
 const result = words.filter((word)=>word.length>6);
 console.log(result);
 console.log(words);


 const things = ["spray","limit","exuberant","elite","present"];

 const modifiedWords = things.filter((word,index,arr) =>{
    arr[index + 1] += "extra";
    console.log(index);
    return word.length < 6;
 });

 console.log(modifiedWords);  //  ['spray']