 //  split() method...

 //  This method takes a pattern and divides a string into an ordered list of substrings by searching for the pattern.

 //  It splits these substring into an array, and returns the array.

 //  Syntax:
 //  split(seperator,limit)
 //  Limit argument: A non negative int specifying a limit on the number of substrings to be included in the array. When the limit is reached, any leftover text is not included in array at all.
  //  a) If limit is 0, [] is returned.

 //  Example:

 const str = "My name is Ibad";
 const words = str.split(" ");
 const words1 = str.split("");
 console.log(words);      //  ["My","name","is","Ibad"]
 console.log(words1);     //   ['M', 'y', ' ', 'n', 'a', 'm', 'e',  ' ', 'i', 's', ' ', 'I', 'b', 'a', 'd']
 console.log(words[1]);   //  name


 //  Note: 
 //  1) If we give space  in split argument this returns whole word.
 //  2) If we don't then this returns only character.
 //  3) If we use only split with no arguments, it returns whole sentence split in an array.



 //  repeat() method...

 //  This method allows you to create a new string by repeating the original string a specified number of times.

 //  Example:

 const str3 = "Hello, ";
 console.log(str3.repeat(3));

 //  Output:
 //  Hello, Hello, Hello,