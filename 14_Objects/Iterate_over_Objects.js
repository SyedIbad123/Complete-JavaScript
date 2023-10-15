 //  We can iterate over objects using for...of and for...in loops.

 //  Example:

 const person = {
    name:"John",
    age:19,
    "person hobbies" : ["Programming","reading","swimming"]
 }

 for(let key in person){
    console.log(key);    // name  age   person hobbies
    console.log(person.key);     //  undefined
    console.log(person[key]);    //  John  19   ["Programming","reading","swimming"]
    console.log(`${key} : ${person[key]}`);  
    //  name : John
    //  age : 19
    //  person hobbies : Programming,reading,swimming
 }


 //  Objects can also be iterate by object.keys() method. It always return an array.

 //  Example:

 console.log(Object.keys(person));  //  ['name', 'age', 'person hobbies']


 //  Iterate by using for...of loop

 //  Example:

 for(let key of Object.keys(person)){
    console.log(key);   //  name   age   person hobbies
    console.log(person[key]);
    //  name : John
    //  age : 19
    //  person hobbies : Programming,reading,swimming
 }