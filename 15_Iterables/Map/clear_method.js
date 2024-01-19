 //  The clear() method of Map instances removes all elements from this map.

 //  Example:

 const map1 = new Map();
 map1.set('bar','baz');
 map1.set(1,"foo");
 console.log(map1.size);  // 2

 map1.clear();
 console.log(map1.size);  // 0