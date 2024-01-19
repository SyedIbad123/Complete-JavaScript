 //  The delete() method of Map instances removes the specified element from this map by key.

 //  Example:

 const map1 = new Map();
 map1.set('bar','foo');
 console.log(map1.delete('bar'));   // True (True indicates successful removal)
 
 console.log(map1.has('bar'));     //  false