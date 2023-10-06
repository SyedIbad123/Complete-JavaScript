 //  The splice() method changes the contents of an array by removng or replacing existing elements or adding new elements in place.

 //  Example:
 const myFish = ["angel","clown","mandarin"];
 const removed = myFish.splice(2,0,"clown");
 console.log(removed);  //  []

 const myFish2 = ["angel","clown","mandarin","stungeon"];
 const remove = myFish2.splice(2,0,"drum","guitar");
 console.log(myFish2);   //  ['angel', 'clown', 'drum', 'guitar', 'mandarin', 'stungeon']
 console.log(remove);     //  []




 //  The Array.isArray() static method determines whether the passed value is an Array.

 //  Example:

 console.log(Array.isArray([1, 3, 5]));   //  true

console.log(Array.isArray('[]'));         //  false

console.log(Array.isArray(new Array(5)));    //  true

console.log(Array.isArray(new Int16Array([15, 33])));    //  false