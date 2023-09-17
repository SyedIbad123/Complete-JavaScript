 //  replace() method...

 //  It is used for replace first occurences of search.
 // Example:

 const myName = "Ali";
 console.log(myName.replace("Ali","syed"));

 //  Ouput:
 //  syed


 //  replaceAll() method...

 //  It replace all occurences in string.
 // Example:

 const str = "ali is a good boy.he is very good";
 console.log(str.replaceAll("is","of"));

 //  Output:
 //  ali of a good boy.he of very good.


 // slice() method...

 //  It extracts a section of a string and returns a new string.
 //  Example:

 const str2 = "The quick brown fox jumps over the lazy dog";
 console.log(str2.slice(31));   //  the lazy dog
 console.log(str2.slice(4,19));  //  quick brown fox
 console.log(str2.slice(-4));   //  dog
 console.log(str2.slice(-9,-5));  //  laz