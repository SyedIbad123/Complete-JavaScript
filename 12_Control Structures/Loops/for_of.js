 //  The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterables objects include instances of built-ins such as Array, String, Map, Set, NodeList, as well as arguments objects, generators produced by generator functions and user-defined iterables.

 //  Example:
 const a = "Ibad";
 for(const b of a){
    console.log(b); //  I  b  a  d 
 }

 //  Example 2:

 const b = "Ali";
 for(const str of b){
    console.log("1");  //  1 1 1 (3 times)
 }

 //  Example 3:

 const arr = ["BMW", "Lambo", "Audi"];
 for(const a of arr){
    console.log(a);  //  BMW  Lambo  Audi
 }