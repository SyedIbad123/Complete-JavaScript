 //  In JS, computed properties are a feature that allows you to dynamically define the properties of an object using square bracket notation ([]) and a compile expression as the property name.

 //  Example:

 const dynamicKey = "age";
 const person = {
    name:'John',
    [dynamicKey]:25,
    ['isStudent']:true,
 };

 console.log(person.name);         //  John
 console.log(person[dynamicKey]);  //  25
 console.log(person.isStudent);    //  true