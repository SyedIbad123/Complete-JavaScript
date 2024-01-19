 //  The add() method of set instances inserts a new element with a specified value in to this, if there is'nt an element with the same value already in this set.

 //  Example:

 const myself = new Set();
 myself.add(1);
 myself.add(5).add("Some Text");
 console.log(myself);   //  Set(3) { 1, 5, 'Some Text' }