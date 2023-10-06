 //  The for_in statement iterates overall enumerable string properties of an object, including inherited enumerable properties. It returns Index.

 //  Example:

 const a = "Ibad Ali";
 for(const b in a){
    console.log(b);  //  0-7
 }

 // Example 2:

 const arr = [1,2,4,5];
 for(const a in arr){
    console.log(a);  //  0 1 2 3
 }


 //  Example 3:

 const obj = {
    name:"Ibad",
    age: 14
 }

 for(const key in obj){
    console.log(key);  // name age
 }