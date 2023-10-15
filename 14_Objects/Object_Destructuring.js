 //  Spread is also used in Objects.

 //  Syntax:

 /* 
 const {a,b} = obj;
 const {a:a1, b:b1} = obj;
 const {a:a1 = aDefault , b:b1 = bDefault} = obj;
 const {a,b,...rest} = obj;
 const {a:a1 , b:b1, ...rest} = obj;
 const {[key] : a} = obj;
*/

 //  Example:

 const obj1 = {a:1 , b:2};
 const {a,b} = obj1;
 const {a:a1 , b:b1} = obj1;

 console.log(a);   //   1
 console.log(b);   //   2
 console.log(a1);  //   1
 console.log(b1);  //   2

 const obj2 = {a:1};
 const { a: a2 = 10, b: b2 = 20 } = obj2;

 console.log(a2);  //   2
 console.log(b2);  //   20
 
 const obj3 = {a:1,b:2,c:3,d:4};
 const {a3,b3,...rest } = obj3;

 console.log(a3,b3,rest);   //  1  2  { c: 3, d: 4 }

 const key = "a";
 const obj4 = { a: 42, b: 24 };
 const { [key]: a4 } = obj4;

 console.log(a4);    //  42