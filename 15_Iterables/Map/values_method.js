 //  The values()  method of Map instances returns a new map iterator object that contains the values for each element in this map in insertion order.

 //  Example:

 const map = new Map();
 map.set("0","foo");
 map.set("0","bar");
 const iterator = map.values();
 console.log(iterator.next().value);   //  "foo"

 console.log(iterator.next().value);   // "bar"