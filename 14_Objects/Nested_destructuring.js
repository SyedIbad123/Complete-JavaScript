 //  Nested Destructuring

 const user = [
    {userId:1 , firstName:'harshit', gender:"male"},
    {userId:2 , firstName:'Ibad', gender:"male"},
    {userId:3 , firstName:'Mahad', gender:"male"},
    {userId:4 , firstName:'Adriana', gender:"female"},
 ];
 const[{firstName},{gender}] = user;
 console.log(firstName,gender);

 //  harshit male


 const [{ firstName: firstName1, gender: gender1 },{ firstName: firstName2, gender: gender2 },{...thirdUser}] = user;
 console.log(firstName1, gender1,firstName2, gender2); 
 
 //  harshit male Ibad male

 console.log(thirdUser);  //  {userId: 3, firstName: 'Mahad', gender: 'male'}