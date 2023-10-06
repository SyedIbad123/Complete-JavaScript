 //  The do_while statement creates a loop that executes a specified statement untill the test condition evaluates to false. The condition is evaluated after executing the statement , resulting in the specified statement executing at least once.

 //  Example:


 let result = "";
 let i = 0;
 do{
    i+=1;
    result+=`${i}`;
 }while(i>0 && i<5);
 console.log(result);

 //  output:
 //  1 2 3 4 5