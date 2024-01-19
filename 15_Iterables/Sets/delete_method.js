 //  The delete() method of set instances removes specified value from this set, if it is in the set.

 //  Example:

 const set1 = new Set();
 set1.add({x:10,y:20}).add({x:20,y:30});
 set1.forEach((point)=>{
    if(point.x > 10){
        set1.delete(point);
    }
 });

 console.log(set1.size);   // 1
 console.log(set1);   // Set(1) { { x: 10, y: 20 } }