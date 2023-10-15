 //  Objects are more complex and each object may contain any combination of these primitive data types as well as reference data types.

 //  Example:

const person = {
    name: "John Doe",          // Primitive data type (string)
    age: 30,                   // Primitive data type (number)
    isStudent: false,          // Primitive data type (boolean)
    address: {                 // Reference data type (object)
      street: "123 Main St",
      city: "Anytown"
    },
    hobbies: ["Reading", "Gardening"] // Reference data type (array)
  };
  
 //  An object is a reference data type. Variables that are assigned a reference value are given a reference or a pointer to that value. That reference or a pointer points to the location in memory where the object is stored. These variables don't actually store the value.

 //  Example:

 const obj1 = { name: "Object 1" };
 const obj2 = obj1;      // obj2 now refers to the same object in memory as obj1
 obj2.name = "Modified Object 1";
 console.log(obj1.name);    //  "Modified Object 1"


 //  Losely speaking objects in JS may be defined as an unordered collection of related data, of primitive or reference types, in the form "key:value" pairs. These keys can be variables or functions and are called properties and methods respectively in the context of an object.

 //  Example:

 const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    startEngine: function() { // Method
      console.log("Engine started!");
    },
    honkHorn: function() {     // Method
      console.log("Honk! Honk!");
    }
  };
  
  console.log(car.make);       // Accessing a property: "Toyota"
  car.startEngine();           // Calling a method: "Engine started!"  