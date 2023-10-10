 //  The pop method removes the last element of an array and returns that element.This method changes the length of the array.

 //  Example:
  
 const myFish = ["angel","clown",'mandarin'];
 const popped = myFish.pop();
 console.log(popped);  //  "mandarin"
 console.log(myFish);  //  ["angel","clown"]


 //  The push methods adds the element adds the specified elemenrts to and end of an array and returns the new length of the array.

 //  Example:

 const sports = ["soccer","baseball"];
 const total = sports.push("football","swimming");
 console.log(sports);  //   ["soccer", "baseball", "football", "swimming"] 


 //  The shift method rmoves element to the beggining of array.

 // Example:

 const hobbies = ["Reading","Coding","learning"];
 const extra = hobbies.shift("Watching Movies");
 console.log(hobbies);  //  ["Coding","learning"]


 //  The unshift method adds the element to the beggining of the array.

 //  Example:

 const languages = ["JavaScript","C++", "Pyhton"];
 const more = languages.unshift("C#");
 console.log(languages);   //  ['C#', 'JavaScript', 'C++', 'Pyhton']