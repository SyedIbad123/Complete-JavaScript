 //  In JS, an array is a data structure that allows you to store multiple values in a single variabe. The values stored in an array can be of any data type, including objects.

 //  To create an array in JS, you can use the array literal notation, which is reprsented by square bracket([]).

 const myArray = [
    {name:"John",age:25},
    {name:"Jane",age:15},
    {name:"Bob",age:35}
 ];

 console.log(myArray[0].name);  //  "John"
 console.log(myArray[1].age);   //  15
 console.log(myArray[2].name);  //  "Bob"


 for(var i = 0; i<myArray.length; i++){
    console.log(myArray[i].name);
 }

 //  John
 //  Jane
 //  Bob