 // Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique.

 //  It is advance topic in Js introduce in ES6.


 // Example:
 
 const sym1 = Symbol();
 const sym2 = Symbol("foo");
 const sym3 = Symbol("foo");
 console.log(sym3);

// Output:
// Symbol(foo)
