 //  In JavaScript, an iterable is an object that implements the iterable protocol. The iterable protocol allows JavaScript objects to define or customize their iteration behavior, which means you can define how they will be looped over using constructs like for...of loops.


 //  For Example:

 for(const value of ["a","b","c"]){
    console.log(value);    //  a b c
 }

 const firstName = "Harshit";
 for(const char of firstName){
    console.log(char);  //  H  a  r  s  h  i  t
 }