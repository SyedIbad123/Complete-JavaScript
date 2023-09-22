 //  if else statement...

 //  This statement executes if a specified condition is truthy. If the condition is falsy, another statament in the optional clause else will be executed.

 //  Example:

 const age = 17;
 if(age>=18){
    console.log("Watch Netflix!");
 }else{
    console.log("Do Nothing");
 }

 //  Do Nothing


 //  Multiple (if...else) statements can be nested to create an (else if) clause.

 //  Example:

 const age = 17;
 if(age>=10){
    console.log("Go to park");
 }else if(age>=18){
    console.log("Watch Netflix!");
 }else{
    console.log("Do Nothing");
 }

 //  Go to park